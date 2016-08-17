ДЗ#3

File system

1) Создать в домашней директории директорию homeWork2
2) Создать файл index.html внутри директории homeWork2
3) Создать внутри директории homeWork2 директорию content
4) Скопировать файл index.html в директорию content
5) Создать внутри директории homeWork2 директорию newContent
6) Переместить файл index.html из директории content в директорию newContent
7) Удалить директорию content
8) Переименовать файл index.html на newIndex.html
9) Изменить права доступа для файла newIndex.html: Только пользователь имеет право читать записывать и выполнять, группа имеет только права на чтение, а остальные не имеют никаких прав

mkdir HomeWork2
cd HomeWork2/
touch index.html
mkdir content
cp index.html content/index.html
mkdir newContent
mv content/index.html newContent/index.html
rm -rf content
mv index.html newIndex.html
sudo chmod 740 newIndex.html