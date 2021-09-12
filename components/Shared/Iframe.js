// import React, { useState, useEffect } from "react";
// import { createPortal } from "react-dom";
//
// const Iframe = ({ children, ...props }) => {
//   const [contentRef, setContentRef] = useState(null);
//   const mountNode = contentRef?.contentWindow?.document?.body;
//
//   return (
//     <iframe {...props} ref={setContentRef}>
//       {mountNode && createPortal(children, mountNode)}
//     </iframe>
//   );
// };
//
// export default Iframe;
