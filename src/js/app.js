// export default function canIterate(obj) {
//   if (obj == null) {
//     return false;
//   }
//   return typeof obj[Symbol.iterator] === 'function';
// }

export default function canIterate(obj) {
  return Symbol.iterator in Object(obj);
}
