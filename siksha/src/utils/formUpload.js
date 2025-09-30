// src/utils/formUpload.js
// export function toFormData(obj = {}, fileFieldName = "files") {
//   const fd = new FormData();
//   Object.keys(obj).forEach((k) => {
//     const val = obj[k];
//     if (val === undefined || val === null) return;
//     if (Array.isArray(val)) {
//       val.forEach(v => fd.append(k, v));
//       return;
//     }
//     fd.append(k, val);
//   });
//   return fd;
// }
