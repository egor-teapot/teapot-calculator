# Teapot Calculator

Для развертывания приложения вам понадобится:
- Android Studio
- npm > 8.19.2

## I
Запустите Android Studio, откройте вкладку sdk менеджера
и установите следующие компоненты:
- Android SDK Platform 33
- Android SDK Tools 33.0.1
- Android SDK Platform-Tools
- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
- Android CLI

<br>

Откройте консоль и введите
```
choco install openjdk11
```

<br>

Откройте панель ***настроки переменных*** и создайте переменную
с названием ANDROID_HOME и значением %LOCALAPPDATA%\Android\Sdk


## II

Зайдите в папку приложения и введите в командную строку
```
npx react-native start
```

Подключите ваш смартфон в режиме отладки через usb.
Нажмите англискую букву "a" на клавиатуре.

<br>

C этого момента должна начатся установка
приложения на ваше устройство, после того как
она закончится приложение запустится и вы сможите
его использовать.

<hr>

> Эта документация требует доработки

> Эта документация расчитана только для устройств на базе android

> При появлении ошибок прошу перейти на [страницу документации](https://reactnative.dev/docs/environment-setup)