const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Функция для сканирования директории
function scanDirectory(dir, depth = 0, maxDepth = 2) {
  if (depth > maxDepth) return;
  
  try {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stats = fs.statSync(itemPath);
      
      // Пропускаем node_modules и .git директории
      if (item === 'node_modules' || item === '.git') {
        console.log('  '.repeat(depth) + `📁 ${item} (skipped)`);
        return;
      }
      
      if (stats.isDirectory()) {
        console.log('  '.repeat(depth) + `📁 ${item}/`);
        scanDirectory(itemPath, depth + 1, maxDepth);
      } else {
        console.log('  '.repeat(depth) + `📄 ${item}`);
      }
    });
  } catch (err) {
    console.error(`Ошибка при сканировании ${dir}: ${err.message}`);
  }
}

// Функция для определения типа проекта и команды запуска
function detectProjectType() {
  const currentDir = process.cwd();
  console.log(`Анализ проекта в директории: ${currentDir}\n`);
  
  // Проверяем наличие package.json (Node.js/JavaScript/TypeScript проект)
  if (fs.existsSync(path.join(currentDir, 'package.json'))) {
    const packageJson = require(path.join(currentDir, 'package.json'));
    console.log('Найден package.json. Это JavaScript/TypeScript проект.');
    
    console.log('\nДоступные скрипты в package.json:');
    if (packageJson.scripts) {
      Object.keys(packageJson.scripts).forEach(script => {
        console.log(`- ${script}: ${packageJson.scripts[script]}`);
      });
      
      // Предлагаем команды для запуска
      console.log('\nРекомендуемые команды для запуска:');
      
      if (packageJson.scripts.start) {
        console.log('npm start');
      }
      if (packageJson.scripts.dev) {
        console.log('npm run dev');
      }
      if (packageJson.scripts.serve) {
        console.log('npm run serve');
      }
      if (packageJson.scripts.develop) {
        console.log('npm run develop');
      }
    } else {
      console.log('В package.json не найдены скрипты.');
    }
    
    // Проверяем наличие фреймворков
    if (packageJson.dependencies) {
      if (packageJson.dependencies.react) {
        console.log('\nЭто React проект.');
      }
      if (packageJson.dependencies.next) {
        console.log('\nЭто Next.js проект.');
      }
      if (packageJson.dependencies.vue) {
        console.log('\nЭто Vue.js проект.');
      }
      if (packageJson.dependencies.angular || packageJson.dependencies['@angular/core']) {
        console.log('\nЭто Angular проект.');
      }
      if (packageJson.dependencies.express) {
        console.log('\nЭто Express.js проект (бэкенд).');
      }
    }
    
    return;
  }
  
  // Проверяем наличие pubspec.yaml (Flutter/Dart проект)
  if (fs.existsSync(path.join(currentDir, 'pubspec.yaml'))) {
    console.log('Найден pubspec.yaml. Это Flutter/Dart проект.');
    console.log('\nРекомендуемые команды для запуска:');
    console.log('flutter run');
    return;
  }
  
  // Проверяем наличие pom.xml (Java/Maven проект)
  if (fs.existsSync(path.join(currentDir, 'pom.xml'))) {
    console.log('Найден pom.xml. Это Java/Maven проект.');
    console.log('\nРекомендуемые команды для запуска:');
    console.log('mvn spring-boot:run (для Spring Boot)');
    console.log('или');
    console.log('mvn exec:java');
    return;
  }
  
  // Проверяем наличие build.gradle (Java/Gradle проект)
  if (fs.existsSync(path.join(currentDir, 'build.gradle'))) {
    console.log('Найден build.gradle. Это Java/Gradle проект.');
    console.log('\nРекомендуемые команды для запуска:');
    console.log('gradle bootRun (для Spring Boot)');
    console.log('или');
    console.log('gradle run');
    return;
  }
  
  // Проверяем наличие requirements.txt или setup.py (Python проект)
  if (fs.existsSync(path.join(currentDir, 'requirements.txt')) || 
      fs.existsSync(path.join(currentDir, 'setup.py'))) {
    console.log('Найден requirements.txt или setup.py. Это Python проект.');
    
    // Ищем файлы с расширением .py в корневой директории
    const pythonFiles = fs.readdirSync(currentDir)
      .filter(file => file.endsWith('.py'));
    
    console.log('\nНайденные Python файлы:');
    pythonFiles.forEach(file => console.log(`- ${file}`));
    
    console.log('\nРекомендуемые команды для запуска:');
    if (pythonFiles.includes('app.py')) {
      console.log('python app.py');
    } else if (pythonFiles.includes('main.py')) {
      console.log('python main.py');
    } else if (pythonFiles.includes('manage.py')) {
      console.log('python manage.py runserver (для Django)');
    } else if (pythonFiles.length > 0) {
      console.log(`python ${pythonFiles[0]}`);
    }
    return;
  }
  
  console.log('Не удалось определить тип проекта по стандартным файлам конфигурации.');
  console.log('Вот структура проекта, которая может помочь определить тип:');
  scanDirectory(currentDir);
}

// Запускаем анализ проекта
detectProjectType();