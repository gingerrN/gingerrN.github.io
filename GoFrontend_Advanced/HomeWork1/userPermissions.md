ДЗ#2

User permissions

1) Создать в домашней директории директорию HomeWork1
2) Прочитать права доступа к этой директории с помощью терминала
3) Изменить права доступа: Разрешить владельцу читать и записывать, группе только читать, а остальным запретить все права
4) Изменить владельца этой директории на пользователя Guest 


mkdir HomeWork1
ls -l 
sudo chmod 640 HomeWork1
( создаю нового пользователя Guest)
sudo chown Guest HomeWork1