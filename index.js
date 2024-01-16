const { app, globalShortcut } = require('electron');
const robot = require('robotjs');
const { exec } = require('child_process');

// اسم التطبيق الذي تريد تشغيله
const appName = 'C:\\Users\\wsamd\\AppData\\Local\\Figma\\app-116.15.4\\Figma.exe';
// تسجيل الاختصار العام
app.whenReady().then(() => {
  console.log('App is ready');
  globalShortcut.register('CommandOrControl+F', () => {
    handleCtrlF();
  });
});

// تحديد وظيفة عند النقر على زر Ctrl + F
function handleCtrlF() {
  exec(`${appName}`);

  // يمكنك هنا تنفيذ الإجراءات التي تريدها
}

// تسجيل الاختصار العام عند إغلاق التطبيق
app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
