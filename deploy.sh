#!/bin/bash

# Получаем текущую дату и время
current_date=$(date "+%Y-%m-%d %H:%M:%S")

# Добавляем все изменения
git add .

# Создаем коммит с датой
git commit -m "Update: $current_date"

# Отправляем изменения на GitHub
git push origin main

# Выводим сообщение об успешном выполнении
echo "✅ Изменения успешно отправлены на GitHub" 