    const setCookie = (name, value, min) => {
      if(min !== 0){     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
        var expires = min *  60 * 1000;
        var millisecond = new Date().getTime();
        var date = new Date(millisecond + expires)
        document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
      }else{
        document.cookie = name + "=" + escape(value);
      }
    };

    const getCookie = (name) => {
      var arr;
      var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
      else
        return null;
    };

    const delCookie = (name) =>{
      setCookie(name, ' ', -1);
    };

    module.exports = {
      setCookie,
      getCookie,
      delCookie
    }
