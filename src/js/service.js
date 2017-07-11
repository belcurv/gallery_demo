/* jshint esversion:6, browser:true */

const getJSON = (url) => {
    const xhr = new XMLHttpRequest();
    return new Promise( (resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr.responseText);
                }
            }
        };
        xhr.open('GET', url);
        xhr.send();
    });
};

export { getJSON };
