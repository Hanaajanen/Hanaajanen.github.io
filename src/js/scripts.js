        // 获取当前月份
        const month = new Date().getMonth();
        let backgroundImage;

        // 根据月份设置背景图片
        if (month >= 2 && month <= 4) { // 春季: 3月, 4月, 5月
            backgroundImage = './src/bg/spring.jpg';
        } else if (month >= 5 && month <= 7) { // 夏季: 6月, 7月, 8月
            backgroundImage = './src/bg/summer.jpg';
        } else if (month >= 8 && month <= 10) { // 秋季: 9月, 10月, 11月
            backgroundImage = './src/bg/autumn.jpg';
        } else { // 冬季: 12月, 1月, 2月
            backgroundImage = './src/bg/winter.jpg';
        }

        // 设置背景图片
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.addEventListener('DOMContentLoaded', function() {
      var content = document.getElementById("content");
      document.getElementById("title").onclick = function() {
        if (content.style.display === "none") {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      };
    });
// Empty JS for your own code to be here
