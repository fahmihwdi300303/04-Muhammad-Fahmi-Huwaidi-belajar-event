"use client";
//import Tombol_1 from "@/component/button";
// import Tombol_1, {Tombol_2} from "./component/button2";
import Tombol_1, {Tombol_2, Tombol_3} from "./component/button3";
import Gallery from "./component/gallery";
import Form, { Form_2 } from "./component/form";



export default function Home() {
  return(
    <>
      <div className="container mx-auto">
        <h2>Kuis Kota</h2>
        <Tombol_1/>
        <br></br>
        <Tombol_2  isiPesan="Ini Pesanku" namaTombol="Pesan" />
        <br></br>
      <div
        className="bg-red-300" onClick={() =>alert('Parent Element : DIV')}>
          <Tombol_3 isiPesan="Child Element : Tombol-1" namaTombol="Tombol-1"/>
          <Tombol_3 isiPesan="Child Element : Tombol-2" namaTombol="Tombol-2"/>
      </div>
      </div>
      <br></br>
      <Gallery/>
      <br></br>
      <Form />
      <br></br>
      <Form_2/>
      </>
  );
}

// import Tombol_1 from "./component/button";
// export default function Home() {
//   return(
//     <>
//       <div className="container mx-auto">
//         <h2>Kuis Kota</h2>
//         <Tombol_1/>
//       </div>
//     </>
//   );
// }