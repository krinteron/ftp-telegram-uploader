# ftp-telegram-uploader

## Описание 
OS: CentOS 7   
Бот, который следит за локальным каталогом на ftp сервере и отправляет новые фотографии в телеграм-канал в двух качествах:
* Сжатое изображение
* Файл без сжатия (ограничение 10 МБ)


## Установка
* Поднять ftp/sftp сервер
* Установить Node.js v14
* В директории ftp создать каталог, за которым будет установлено наблюдение
* Склонировать репозиторий и установить
* В файле `index.js` заменить токен бота, id канала и путь до директории ftp
* Командой `incrontab -e` изменить пользовательскую таблицу: `/#pathToFtpDir# IN_CLOSE_WRITE FTP_FILE="$#" /bin/node /#pathTo#/index.js`
