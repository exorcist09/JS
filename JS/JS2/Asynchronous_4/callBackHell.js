//Callbacks , callback hell, pyramid of doom

// use of callback in asynchronous programming

// basic calling one-by-one
//maniputaing heading 1 after 1 second
// const heading1 = document.querySelector(".heading1");
// setTimeout(()=>{
//     heading1.textContent = "Heading1";
//     heading1.style.color="violet";
// },1000);

//manipulating heading 2 after 2 second
// const heading2 = document.querySelector(".heading2");
// setTimeout(()=>{
//     heading2.textContent = "Heading2";
//     heading2.style.color="red";
// },3000);

//other way  --> nested callbacks ==> callback hell
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
setTimeout(() => {
  heading1.textContent = "Heading1";
  heading1.style.color = "violet";
  setTimeout(() => {
    heading2.textContent = "Heading 2";
    heading2.style.color = "red";
    setTimeout(() => {
      heading3.textContent = "Heading 3";
      heading3.style.color = "blue";
      setTimeout(() => {
        heading4.textContent = "Heading 4";
        heading4.style.color = "pink";
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);

/*
pyramid of doom
Doing whatever the callback hell was doing but with the help of fucntion
*/

function changeText(
  element,
  text,
  color,
  time,
  onSucessCallback,
  onFailureCallback
) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSucessCallback) {
        onSucessCallback();
      }
    } else {
      if (onFailureCallback) {
        onFailureCallback();
      }
      console.log("your element does not exit");
    }
  }, time);
}

// this is called pyramid of doom
changeText(heading1, "one", "red", 1000, () => {
  changeText(heading2, "two", "green", 2000, () => {
    changeText(heading3, "three", "pink", 3000, () => {
      changeText(heading4, "four", "black", 4000);
    });
  });
});

// Do this after studing promises

// doing the things with promises

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject();
      }
    }, time);
  });
}

changeText(heading1, "one", "red", 1000)
  .then(() => {
    return changeText(heading2, "two", "purple", 1000);
  })
  .then(() => {
    return changeText(heading3, "three", "blue ", 1000);
  })
  .then(() => {
    return changeText(heading4, "four", "green", 1000);
  });
