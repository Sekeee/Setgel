// const strStr = (haystack, needle) => {
//   if (!haystack || !needle) return 0;
//   let boolean = false;
//   let number = 0;
//   haystack.forEach((element, index) => {
//     if (element === needle[0]) {
//       for (
//         let i = index, j = 0;
//         i < index + needle.length, j < index.length;
//         i++, j++
//       ) {
//         if (haystack[i] !== needle[j]) {
//           boolean = true;
//           number = number + 1;
//           if (number === needle.length) {
//             number = i - number;
//           }
//         }
//         boolean = false;
//       }
//     }
//   });
//   if (boolean) {
//     return number;
//   } else {
//     return -1;
//   }
// };

// const strStr = (haystack, needle) => {
//   if (!haystack || !needle) return 0;

//   haystack.forEach((element, index) => {
//     if (element === needle[0]) {
//       const check = haystack.slice(index, index + needle.length - 1);
//       if (check === needle) return index;
//     }
//   });
//   return -1;
// };

let string = "hello";
let hehe = string.slice(1, 3);
console.log(hehe);

const str = (haystack, needle) => {
  if (!haystack || !needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const check = haystack.slice(i, i + needle.length);
      console.log(`i + needle.lenght`, i + needle.length);
      console.log(`check `, check);
      if (check === needle) return i;
    }
  }
  return -1;
};
console.log(str("hello", "ll"));
