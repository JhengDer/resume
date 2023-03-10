// var Authorization = {
//     key: 'CWB-69660E83-08F8-4D6D-A365-8AFB7E0C6A88'
// }
// function getweather() {
//     fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=" + Authorization.key + "&format=JSON&locationName=%E8%87%BA%E5%8C%97%E5%B8%82&elementName=Wx").then(function (response) {
//         return response.json();
//     }).then(function (data) {
//         $('#morning').empty();
//         $('#night').empty();
//         var wxtime = data.records.locations[0].location[0].weatherElement[0].time;
//         for (let i = 0; i < wxtime.length; i++) {
//             const wx = wxtime[i];
//             console.log(wx.startTime+" "+wx.elementValue[0].value);
//             // console.log(wx.startTime.substr(8, 2) + " " + wx.elementValue[0].value);
//             // if(wx.startTime.substr(11,2)=="06"){
//             //     $('#morning').append("<br>"+wx.startTime.substr(8, 2) + " " + wx.elementValue[0].value);
//             // }else{
//             //     $('#night').append("<br>"+wx.startTime.substr(8, 2) + " " + wx.elementValue[0].value);
//             // }
//         }
//     })
// }

const key = "ef9059f5a1bf2bbe3dc3d337b3f15ece";

const notificationElemnt = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const tempdescElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location");


const weather = {
    temperature: {
        value: 18,
        unit: "celsius"
    },
    description: "few clouds",
    iconId: "01d"
}
function getweather(lat, lon) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
    console.log(api);
    fetch(api).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
        weather.temperature.value = Math.floor(data.main.temp - 273.15);
        weather.description = data.weather[0].description;
        weather.city = data.name;
        weather.iconId = data.weather[0].icon;
    }).then(function () {
        displayWeather();
    })
}
function displayWeather() {
    iconElement.innerHTML = `<img src="https://raw.githubusercontent.com/JhengDer/resume/main/temp/weather_icons/${weather.iconId}.png"></img>`;
    tempElement.innerHTML = `${weather.temperature.value}<span>'C</span>`;
    tempdescElement.innerHTML = weather.description;
    locationElement.innerHTML = weather.city;
    console.log(weather.iconId);
    if(weather.iconId.slice(0,2)=="01"){
        $('body').css("backgroundImage", "url(sunny.jpg)");
    }else if(weather.iconId.slice(0,2)=="02"||weather.iconId.slice(0,2)=="03"||weather.iconId.slice(0,2)=="04"){
        $('body').css("backgroundImage", "url(clouds.jpg)");
    }else if(weather.iconId.slice(0,2)=="09"||weather.iconId.slice(0,2)=="10"){
        $('body').css("backgroundImage", "url(rain.jpg)");
    }else if(weather.iconId.slice(0,2)=="11"){
        $('body').css("backgroundImage", "url(thunder.jpg)");
    }else{
        $('body').css("backgroundImage", "url(mist.jpg)");
    }
}
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElemnt.style.display = "block";
    notificationElemnt.innerHTML = "<p>Browser doesn't support Geolocation</p>"
}

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getweather(latitude, longitude);
}
function showError(error) {
    notificationElemnt.style.display = "block";
    notificationElemnt.innerHTML = `<p>${error.message}</p>`;
}

const apikey = 'pub_185236d33cdd9d991a3fdfe86d31715a7d6ce';


fetch(`https://newsdata.io/api/1/news?country=tw&apikey=${apikey}`).then(function (res) {
    $('.news').empty();
    return res.json();
}).then(function (items) {
    console.log(items);
    items.results.forEach(e => {
        newsUpdate(e);
    });
}).catch(function (err) {
    console.log(err);
})

$('#general').click(function () {
    console.log("normalcc");
    $('.news').empty();
    loading();
    fetch(`https://newsdata.io/api/1/news?country=tw&apikey=${apikey}`).then(function (res) {
        $('.news').empty();
        return res.json();
    }).then(function (items) {
        items.results.forEach(e => {
            newsUpdate(e);
        });
    }).catch(function (err) {
        console.log(err);
    })
});
$('#business').click(function () {
    $('.news').empty();
    loading();
    fetch(`https://newsdata.io/api/1/news?country=tw&category=${this.id}&apikey=${apikey}`).then(function (res) {
        $('.news').empty();
        return res.json();
    }).then(function (items) {
        items.results.forEach(e => {
            newsUpdate(e);
        });
    }).catch(function (err) {
        console.log(err);
    })
});
$('#entertainment').click(function () {
    $('.news').empty();
    loading();
    fetch(`https://newsdata.io/api/1/news?country=tw&category=${this.id}&apikey=${apikey}`).then(function (res) {
        $('.news').empty();
        return res.json();
    }).then(function (items) {
        items.results.forEach(e => {
            newsUpdate(e);
        });
    }).catch(function (err) {
        console.log(err);
    })
});
$('#health').click(function () {
    $('.news').empty();
    loading();
    fetch(`https://newsdata.io/api/1/news?country=tw&category=${this.id}&apikey=${apikey}`).then(function (res) {
        $('.news').empty();
        return res.json();
    }).then(function (items) {
        items.results.forEach(e => {
            newsUpdate(e);
        });
    }).catch(function (err) {
        console.log(err);
    })
});
$('#politics').click(function () {
    $('.news').empty();
    loading();
    fetch(`https://newsdata.io/api/1/news?country=tw&category=${this.id}&apikey=${apikey}`).then(function (res) {
        $('.news').empty();
        return res.json();
    }).then(function (items) {
        items.results.forEach(e => {
            newsUpdate(e);
        });
    }).catch(function (err) {
        console.log(err);
    })
});
$('#sports').click(function () {
    $('.news').empty();
    loading();
    fetch(`https://newsdata.io/api/1/news?country=tw&category=${this.id}&apikey=${apikey}`).then(function (res) {
        $('.news').empty();
        return res.json();
    }).then(function (items) {
        items.results.forEach(e => {
            newsUpdate(e);
        });
    }).catch(function (err) {
        console.log(err);
    })
});
function newsUpdate(e) {
    length = e.title.length;
    if (window.innerWidth < 540) {
        if (length > 13) {
            $('.news').append(`<p><span>${e.pubDate.slice(0, 10)} ${e.pubDate.slice(11, 19)}</span><a href="${e.url}">${e.title.slice(0, 13) + "......"}</a></p>`);
        } else {
            $('.news').append(`<p><span>${e.pubDate.slice(0, 10)} ${e.pubDate.slice(11, 19)}</span><a href="${e.url}">${e.title}</a></p>`);
        }
    }
    else if (window.innerWidth < 768) {
        if (length > 20) {
            $('.news').append(`<p><span>${e.pubDate.slice(0, 10)} ${e.pubDate.slice(11, 19)}</span><a href="${e.url}">${e.title.slice(0, 20) + "......"}</a></p>`);
        } else {
            $('.news').append(`<p><span>${e.pubDate.slice(0, 10)} ${e.pubDate.slice(11, 19)}</span><a href="${e.url}">${e.title}</a></p>`);
        }
    } else if (window.innerWidth < 991) {
        if (length > 30) {
            $('.news').append(`<p><span>${e.pubDate.slice(0, 10)} ${e.pubDate.slice(11, 19)}</span><a href="${e.url}">${e.title.slice(0, 30) + "......"}</a></p>`);
        } else {
            $('.news').append(`<p><span>${e.pubDate.slice(0, 10)} ${e.pubDate.slice(11, 19)}</span><a href="${e.url}">${e.title}</a></p>`);
        }
    } else if (window.innerWidth < 1200) {
        if (length > 50) {
            $('.news').append(`<p><span>${e.pubDate.slice(0, 10)} ${e.pubDate.slice(11, 19)}</span><a href="${e.url}">${e.title.slice(0, 50) + "......"}</a></p>`);
        } else {
            $('.news').append(`<p><span>${e.pubDate.slice(0, 10)} ${e.pubDate.slice(11, 19)}</span><a href="${e.url}">${e.title}</a></p>`);
        }
    } else {
        $('.news').append(`<p><span>${e.pubDate.slice(0, 10)} ${e.pubDate.slice(11, 19)}</span><a href="${e.url}">${e.title}</a></p>`);
    }
}
$('button').click(function (){
    $('.btn-active').toggleClass('btn-active');
    $(this).toggleClass('btn-active');
})

function loading(){
    $('.news').append(`<div class="circle"></div><div class="circle"></div><div class="circle"></div>`)
}