ДЗ#4

Vim

Используя только терминал и vim выполнить эти действия, прикрепить файл about.md к этому заданию, скриншоты не нужны.
1) Создать в домашней директории директорию homeWork3
2) Изменить права доступа для директорию homeWork3: Только пользователь имеет право читать записывать, группа имеет только права на чтение, а остальные не имеют никаких прав
3) Внутри директории homeWork3 создать файл about.md
4) Открыть файл about.md консольным редактором vim
5) Добавить информацию о себе на английском языке 7-8 предложений, обязательно использовать Заголовок 1 уровня, Заголовок 2 уровня, Список, Выделение, Цытату, Ссылку
6) Сохранить эти изменения
7) Выйти из редактора
8) Октрыть фай about.md консольным редактором vim
9) Проверить есть ли там информация
10) Добавить в конец файла информацию о любимой книге
11) Сохранить эти изменения
12) Выйти из редактора


mkdir homeWork3
sudo chmod 640 homeWork3   ( 640 не дает зайти в папку, меняю на 740)
cd homeWork3
touch about.md
vim about.md
i
<h1><strong>Krasnovska Natalia</strong></h1>
<a href="https://www.facebook.com/natali.krasnovska">My profile on facebook</a>
	<p>Hello! Let me introduce myself. I was studying at GoIt FrontEndOnline#2. Now I am pleased to be able to learn more and get more and more new knowledge of technology on the course GoFrontend_Advanced. </p>
<h2>Pros that I identified for myself in the courses:</h2>
<ul>
	<li>online training</li>
	<li>an extensive training program</li>
	<li>clarity and brevity of feed materials</li>
</ul>
<blockquote> Because a person eats a lot, he does not get healthier than one that is satisfied only necessary: in the same way and a scientist - it's not the one who reads a lot, and those who read with advantage.</blockquote>
<p>Aristippus</p>


Esc :wq
vim about.md
i
<a href="https://en.wikipedia.org/wiki/Dandelion_Wine">Dandelion Wine</a>  by Ray Bradbury. 
<p>The story of Ray Bradbury's "Dandelion Wine" touches deeply. This work is permeated with light sadness and happiness at the same time. </p>

Esc :wq
sudo chmod 640 homeWork3  (выполняю 2ой пункт задания)