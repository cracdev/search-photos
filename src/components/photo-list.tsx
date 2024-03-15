import { Thumbnail } from './thumbnail';

type props = {
  list: Photo[];
};

export const PhotoList: React.FC<props> = ({ list }) => {
  return (
    <section id="photos" className="my-5 grid grid-cols-1 md:grid-cols-4 gap-4">
      {list.map((photo: Photo) => (
        <Thumbnail key={photo.id} photo={photo} />
      ))}
    </section>
  );
};
// const PhotoList = () => {
//   return (
//     <section id="photos" className="my-5 grid grid-cols-1 md:grid-cols-4 gap-4">
//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g767d25e85f2e2ae466dbf761a0e8b56a626e4a8380db1a69fb1d3dac1f1443e324332343366d4cf42ffeef1a6c62139006904293a3ab00caaf8702486a295677_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g767d25e85f2e2ae466dbf761a0e8b56a626e4a8380db1a69fb1d3dac1f1443e324332343366d4cf42ffeef1a6c62139006904293a3ab00caaf8702486a295677_1280.jpg"
//           alt="woman, portrait, model"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g61265ff57d468b4d29eade4a69d9b96ae207bd4091fa9a0f0ab0f4f76cb7a692f7fa01aadb6a11e26292b278dd198586805c2e5f28d897c48beb3a39509e7e66_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g61265ff57d468b4d29eade4a69d9b96ae207bd4091fa9a0f0ab0f4f76cb7a692f7fa01aadb6a11e26292b278dd198586805c2e5f28d897c48beb3a39509e7e66_1280.jpg"
//           alt="woman, fashion, beauty"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g44b1c711f9b76f0305d54fc7cbf7d1288365f2b948bc50de9041dbbf6c6b5123f30914525a82be19db28b0ce23b623566298743c92d5bee67fbd1d52009f6a64_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g44b1c711f9b76f0305d54fc7cbf7d1288365f2b948bc50de9041dbbf6c6b5123f30914525a82be19db28b0ce23b623566298743c92d5bee67fbd1d52009f6a64_1280.jpg"
//           alt="woman, redhead, scarf"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g1a17053c0d8ba9fa9015696187dd360e834d5ae221326119f00b3ed3c283e16b306e088eb0d3b41fab0ca73dca2eca756d33d80b0cb9401f38d3f191391260eb_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g1a17053c0d8ba9fa9015696187dd360e834d5ae221326119f00b3ed3c283e16b306e088eb0d3b41fab0ca73dca2eca756d33d80b0cb9401f38d3f191391260eb_1280.jpg"
//           alt="woman, model, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g663472b6b3b1d583103faffd4051740dff3106c10778029a66c6a128c7c4361f857e5333f232ecdd4fd05a2b55797cda25a44a12a77eb870042fff8e5809b2e9_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g663472b6b3b1d583103faffd4051740dff3106c10778029a66c6a128c7c4361f857e5333f232ecdd4fd05a2b55797cda25a44a12a77eb870042fff8e5809b2e9_1280.jpg"
//           alt="portrait, adult, woman"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g8492722b883a48fffeda95af5976cadd5245413ebcf72532115f63854d0967f13b2efecef2eb99c69d4e45890d5679e52f86f7e01ac02adce126d6c00a5aa0a1_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g8492722b883a48fffeda95af5976cadd5245413ebcf72532115f63854d0967f13b2efecef2eb99c69d4e45890d5679e52f86f7e01ac02adce126d6c00a5aa0a1_1280.jpg"
//           alt="girl, woman, face"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/gad27ab63cbf3e70e857f82999fb35f40c3acfe837a1eb9e1e148dcb41026b52c035561c12c403470d78de6f127e8dfe8149256896711703c7af73f479e903243_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/gad27ab63cbf3e70e857f82999fb35f40c3acfe837a1eb9e1e148dcb41026b52c035561c12c403470d78de6f127e8dfe8149256896711703c7af73f479e903243_1280.jpg"
//           alt="sunglasses, woman, pool"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g5cd0f17ca291408091e88e3769981f8a6f89e39f24f4c1c196d925fddab250db093293a32618ac037ebac24a9416807be0b9c2bb07f401f3416391c7a92b54ef_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g5cd0f17ca291408091e88e3769981f8a6f89e39f24f4c1c196d925fddab250db093293a32618ac037ebac24a9416807be0b9c2bb07f401f3416391c7a92b54ef_1280.jpg"
//           alt="girl, woman, dancer"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g02f4dfa28d835f54f3ce00600147cd34432a4d6aeeb647737dc8943841b3ef7639ec86eb27b1691ce77296313382365772248ed454873793cb438e699ec4042f_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g02f4dfa28d835f54f3ce00600147cd34432a4d6aeeb647737dc8943841b3ef7639ec86eb27b1691ce77296313382365772248ed454873793cb438e699ec4042f_1280.jpg"
//           alt="portrait, woman, profile"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g63043f423378be2a5812b0d5a19321272c533bf9a0f99eabd3a268a9df601c75dc9239d30d0f01c443c8e27702c2ef8a6b1e69c808abb17a3c00b14f6f6429ea_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g63043f423378be2a5812b0d5a19321272c533bf9a0f99eabd3a268a9df601c75dc9239d30d0f01c443c8e27702c2ef8a6b1e69c808abb17a3c00b14f6f6429ea_1280.jpg"
//           alt="woman, girl, beautiful"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g8e0e25020f931ca1e1d68e5ae8485040bb96780eaaf6c12552b1dff4849025ceb65b7594ddc5a5ca9d7b27e97601a8bb417880e735f1c7b856e4b68fd1f380f6_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g8e0e25020f931ca1e1d68e5ae8485040bb96780eaaf6c12552b1dff4849025ceb65b7594ddc5a5ca9d7b27e97601a8bb417880e735f1c7b856e4b68fd1f380f6_1280.jpg"
//           alt="girl, woman, sexy"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g3ac1d83cea3b904a05b875bfbb20f2ba5a8f6aef40989a6ab19ca8415c4ce547758e53447b9ef0c4738e3b32168bfda0ac79c7564f22b9fb8e873a3051079730_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g3ac1d83cea3b904a05b875bfbb20f2ba5a8f6aef40989a6ab19ca8415c4ce547758e53447b9ef0c4738e3b32168bfda0ac79c7564f22b9fb8e873a3051079730_1280.jpg"
//           alt="woman, leaves, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/gf5457d315cbd5569d41194a5da2f3b67aa98d094009d189a31185ed7e6370d8f2f31f680967a118bfa30814987d5854313aaac735c5b7aecdc8013e086cae3fe_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/gf5457d315cbd5569d41194a5da2f3b67aa98d094009d189a31185ed7e6370d8f2f31f680967a118bfa30814987d5854313aaac735c5b7aecdc8013e086cae3fe_1280.jpg"
//           alt="woman, model, pose"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/gb85ec298ca5f07bdec1e4c8d3e81958f587056f3ffc5ee12c0bbd6b3a47b28a1b19d2c12a8c274af2f64267c05973f9f0b67623ab471bd8f0fd0771cc466ed47_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/gb85ec298ca5f07bdec1e4c8d3e81958f587056f3ffc5ee12c0bbd6b3a47b28a1b19d2c12a8c274af2f64267c05973f9f0b67623ab471bd8f0fd0771cc466ed47_1280.jpg"
//           alt="woman, floating, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g3b87302045638b1b6268b2bb6b53a1cfa2b3c1943c6550e957cc4fcb62b623435aa2706e69e93beba25368775da673cf6e78e49ebfa80846cc3f42ecc4237127_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g3b87302045638b1b6268b2bb6b53a1cfa2b3c1943c6550e957cc4fcb62b623435aa2706e69e93beba25368775da673cf6e78e49ebfa80846cc3f42ecc4237127_1280.jpg"
//           alt="woman, beauty, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g1f8a0bf2c18e4e6c749b0cff9838a353ae918c75b064a33127a25af16a39339c45d266198b6059f05213cd57504eae548fa3be50f6238ea0a54e551c20db690b_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g1f8a0bf2c18e4e6c749b0cff9838a353ae918c75b064a33127a25af16a39339c45d266198b6059f05213cd57504eae548fa3be50f6238ea0a54e551c20db690b_1280.jpg"
//           alt="woman, knitwear, eyes"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/gabd715be2e7c16914ec57f40f20ede00d6cff5439edbf75e9a22840adf8838c0464487f5edd3e4bc02240328b1e5429eaa4ab572b2b61c7f47d160f5b060cced_1280.png"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/gabd715be2e7c16914ec57f40f20ede00d6cff5439edbf75e9a22840adf8838c0464487f5edd3e4bc02240328b1e5429eaa4ab572b2b61c7f47d160f5b060cced_1280.png"
//           alt="girl, pose, model"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g801e159ae40b77aa1441fec66fd75211db28185af90254ad2053a8e0ac7500322a9be859950d76d47857d33eee578ecc59bc85bdd99f198edd0f1fb13da73abe_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g801e159ae40b77aa1441fec66fd75211db28185af90254ad2053a8e0ac7500322a9be859950d76d47857d33eee578ecc59bc85bdd99f198edd0f1fb13da73abe_1280.jpg"
//           alt="woman, beauty, naked"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g72e7b4008285f02837d684665bdc74d8fc878f838886a54969a0f3c4ef0434b863c0d9d3e7e1bdbd89f6598079efdd8c129a142c42d116e0f7ade91b8dd99ce1_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g72e7b4008285f02837d684665bdc74d8fc878f838886a54969a0f3c4ef0434b863c0d9d3e7e1bdbd89f6598079efdd8c129a142c42d116e0f7ade91b8dd99ce1_1280.jpg"
//           alt="woman, model, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g6f42738955089302ad485e343b69996cfddb2c2783e5140a477a990aa4f806ce11c6af2f044b4ea587e496570f051dfdbb479ac5bc4072ef0b0fcd480d2cd664_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g6f42738955089302ad485e343b69996cfddb2c2783e5140a477a990aa4f806ce11c6af2f044b4ea587e496570f051dfdbb479ac5bc4072ef0b0fcd480d2cd664_1280.jpg"
//           alt="woman, portrait, model"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g0a642eff955581eab4a9e333e024cac7f2cb7bbe6a961e8276cc28ec1fcff372ccce25653a41474e2d83f66b24510f5d3c97d5968dfc4b39d894293561e4794e_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g0a642eff955581eab4a9e333e024cac7f2cb7bbe6a961e8276cc28ec1fcff372ccce25653a41474e2d83f66b24510f5d3c97d5968dfc4b39d894293561e4794e_1280.jpg"
//           alt="asia, woman, washing clothes"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g44fcc12bf46e88f9187fc1d15b6e93c840d9d153d1a1454d13c544a944935615502e0dc1cdcc777c335a1cc926654480b7f21b3e7569ec76ea17e901a68ea65c_1280.png"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g44fcc12bf46e88f9187fc1d15b6e93c840d9d153d1a1454d13c544a944935615502e0dc1cdcc777c335a1cc926654480b7f21b3e7569ec76ea17e901a68ea65c_1280.png"
//           alt="cycling, girl, landscape"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g651d5d6c182ee3bad3e01daaa16762761ff36e7bb6eab30e62d8bf8acb8c230b468e9fcc6adb221bd08efa3cd0604937cac25f9067c7d1d88df958658b71f2cd_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g651d5d6c182ee3bad3e01daaa16762761ff36e7bb6eab30e62d8bf8acb8c230b468e9fcc6adb221bd08efa3cd0604937cac25f9067c7d1d88df958658b71f2cd_1280.jpg"
//           alt="watercolor, portrait, character"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g150f3371f12d844e726276ffc04163409a3eb11d26d80b5e5f1137b079d6f07e8b0e86461df9c62e370375cab3d7a8614a6c1089f42d454aabc4444155e3ce3a_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g150f3371f12d844e726276ffc04163409a3eb11d26d80b5e5f1137b079d6f07e8b0e86461df9c62e370375cab3d7a8614a6c1089f42d454aabc4444155e3ce3a_1280.jpg"
//           alt="girl, hands, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g9e5dc2659546a5ee49463636fc17df377b17b083e8d08eb7e6db77083aecffe2201f31e6e1862620542b6066c4722e64e5997c602d3f111c62179f72a50c1dc0_1280.png"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g9e5dc2659546a5ee49463636fc17df377b17b083e8d08eb7e6db77083aecffe2201f31e6e1862620542b6066c4722e64e5997c602d3f111c62179f72a50c1dc0_1280.png"
//           alt="woman, beauty, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g20943c9314c273727559e967b2acafc6dbf90e72776ef8cd3bc7ab7d8e01796e18c332cd38a0725df1c9593ca9fbd953ed8ab5eeb18bcc0ef5bd967db2b3911b_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g20943c9314c273727559e967b2acafc6dbf90e72776ef8cd3bc7ab7d8e01796e18c332cd38a0725df1c9593ca9fbd953ed8ab5eeb18bcc0ef5bd967db2b3911b_1280.jpg"
//           alt="girl, woman, model"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g3afe461087426d99808d0dfdb8dc56b89fa4ae64fa2483720ceb2a607f040f24c49eac669e001ca0cc377c6ed75ca8078c7958d89f4afc46e4d65a38f96cf638_1280.png"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g3afe461087426d99808d0dfdb8dc56b89fa4ae64fa2483720ceb2a607f040f24c49eac669e001ca0cc377c6ed75ca8078c7958d89f4afc46e4d65a38f96cf638_1280.png"
//           alt="pinup, girl, stripper"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g54b79120439aa9660c0f15bf5ca54889b6d3d7f3dcfe546917c75094c9468d521145f78c2ba57a648149f95ea76661fc46bf8c387b4d5323487742f0d93ee327_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g54b79120439aa9660c0f15bf5ca54889b6d3d7f3dcfe546917c75094c9468d521145f78c2ba57a648149f95ea76661fc46bf8c387b4d5323487742f0d93ee327_1280.jpg"
//           alt="girl, portrait, brunette"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g736663876d71a3e8e804e81b2b154b3a06c6f9c4e1b7b79faa19a8f6a86f61bd84cc2f413e340cde2ce4b4c1c0b9047efe90835953443787e96feda233cc97f5_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g736663876d71a3e8e804e81b2b154b3a06c6f9c4e1b7b79faa19a8f6a86f61bd84cc2f413e340cde2ce4b4c1c0b9047efe90835953443787e96feda233cc97f5_1280.jpg"
//           alt="blonde, girl, book"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g76f32129f59178c44f088d3032238dbd0ac3cc3c815ddef0400278cd57ebc71405daa46fe3bc27311b287d25b06fd44958eaf850b9734a2453c2f1b29478d645_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g76f32129f59178c44f088d3032238dbd0ac3cc3c815ddef0400278cd57ebc71405daa46fe3bc27311b287d25b06fd44958eaf850b9734a2453c2f1b29478d645_1280.jpg"
//           alt="woman, beauty, model"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/ga7d68a6c02bde41e49f23024eafacffc51903a9756e1d92f3f2d9d88aafd65da78ccfba48deb5ab9d29f5f1e4d19ef2dfd9dffbf20e0acf152e6e4eed1e3051b_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/ga7d68a6c02bde41e49f23024eafacffc51903a9756e1d92f3f2d9d88aafd65da78ccfba48deb5ab9d29f5f1e4d19ef2dfd9dffbf20e0acf152e6e4eed1e3051b_1280.jpg"
//           alt="woman, model, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g27eeb6b23e7d3f167116628f4148959c850ccd2eed45d9ad7de3107eacb1bda1cef3843f8cf5373caf5c1210deae93bb1950005e12ec28a27396a6401fbaf475_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g27eeb6b23e7d3f167116628f4148959c850ccd2eed45d9ad7de3107eacb1bda1cef3843f8cf5373caf5c1210deae93bb1950005e12ec28a27396a6401fbaf475_1280.jpg"
//           alt="hijab, headscarf, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g96b2af3bf70c871a509a0c1034b8a4f3c5d960924dd2066e8b78c70095fac6e8006f5e01d65a72fae198e22db88864908145f7ab232a951951cf1c4172c7241a_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g96b2af3bf70c871a509a0c1034b8a4f3c5d960924dd2066e8b78c70095fac6e8006f5e01d65a72fae198e22db88864908145f7ab232a951951cf1c4172c7241a_1280.jpg"
//           alt="woman, model, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/gd785555842ecbfc068bc1a5522e8389482cf6b85bf4335eae89a2996436cdc5e865f79120d9d1036140afe1451b30ee1b5f32e0f205e68cbd3bd79a710baaf75_1280.png"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/gd785555842ecbfc068bc1a5522e8389482cf6b85bf4335eae89a2996436cdc5e865f79120d9d1036140afe1451b30ee1b5f32e0f205e68cbd3bd79a710baaf75_1280.png"
//           alt="woman, face, model"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g8901fd69796982cd9fc34e875b7a5bc7063ec35c579bcab0716d1d4b04b3d9088ecb76c6e301e2d9be70e02a2689598096e079853bfb45421c78c07cb30baefe_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g8901fd69796982cd9fc34e875b7a5bc7063ec35c579bcab0716d1d4b04b3d9088ecb76c6e301e2d9be70e02a2689598096e079853bfb45421c78c07cb30baefe_1280.jpg"
//           alt="beautiful, fence, girl"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g0da4b7d16111991ccc1f92580d71eb62e67eff43a63124f55fc4c6487a5fb9732df1597e39f128eba94b4209721191b0d272f13397beb76e6f6f72da61cd3ad6_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g0da4b7d16111991ccc1f92580d71eb62e67eff43a63124f55fc4c6487a5fb9732df1597e39f128eba94b4209721191b0d272f13397beb76e6f6f72da61cd3ad6_1280.jpg"
//           alt="portrait, asian woman, vietnam"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/gb0d0a6d53dbac7a03223b061bfea43a2be6fd8f39403d00d2bc7f370281a00e0b5999b9a0a041b25b74884562e506fede131a685254d4f5d795d7588b1e9fa73_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/gb0d0a6d53dbac7a03223b061bfea43a2be6fd8f39403d00d2bc7f370281a00e0b5999b9a0a041b25b74884562e506fede131a685254d4f5d795d7588b1e9fa73_1280.jpg"
//           alt="woman, model, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g931c295ced5aca0d4010687937217c14e62876ae336f74fd437c894dddb4a7162d9d8683342bd40e96f53d2964af863b0a2bbee6ad6a702e9120c55aa5b8115a_1280.png"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g931c295ced5aca0d4010687937217c14e62876ae336f74fd437c894dddb4a7162d9d8683342bd40e96f53d2964af863b0a2bbee6ad6a702e9120c55aa5b8115a_1280.png"
//           alt="girl, asian, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g2257a56f1fd5bc49f05a1bffbd8a0d4ae3a6297daffd00a7cfafe4dde46945f093993f62e284726d4751034769800c1754fa64a2eaecbba342c2bbcc356cc959_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g2257a56f1fd5bc49f05a1bffbd8a0d4ae3a6297daffd00a7cfafe4dde46945f093993f62e284726d4751034769800c1754fa64a2eaecbba342c2bbcc356cc959_1280.jpg"
//           alt="girl, woman, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g61a46c8349a496860d4e157809b4ec135bdc425196ac9a3e29f7bfd7df6f6450f14ff63be02d039561e49ad2c6c8b98a55b8d99ca96305c9a499266bc973f55c_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g61a46c8349a496860d4e157809b4ec135bdc425196ac9a3e29f7bfd7df6f6450f14ff63be02d039561e49ad2c6c8b98a55b8d99ca96305c9a499266bc973f55c_1280.jpg"
//           alt="woman, girl, eye"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/gce854023be75b5c4373d2b3d010056c3d5310237ca0219ec209b3d59341bc83e7f762d555a96a9f6b95e27ab9407c34c7991fcee77a8e59ca38643bc01606e37_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/gce854023be75b5c4373d2b3d010056c3d5310237ca0219ec209b3d59341bc83e7f762d555a96a9f6b95e27ab9407c34c7991fcee77a8e59ca38643bc01606e37_1280.jpg"
//           alt="woman, model, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/gad0ad1498620bc635f29edbdab79f020402dba55188c8dd27452a119e42412bb3be15bdd50c8e2cc91621a5460cd218748e6117def943b927ba0990a2cd3787e_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/gad0ad1498620bc635f29edbdab79f020402dba55188c8dd27452a119e42412bb3be15bdd50c8e2cc91621a5460cd218748e6117def943b927ba0990a2cd3787e_1280.jpg"
//           alt="woman, model, portrait"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g4879207a8ad75e9adb25d7100a5b87c7261bd59824eb1b0513bdcf11772341c3fa7f48d0b34f68f1c9f699455e783706cbc23d0d44b3f2e2e1d1355c80bf89da_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g4879207a8ad75e9adb25d7100a5b87c7261bd59824eb1b0513bdcf11772341c3fa7f48d0b34f68f1c9f699455e783706cbc23d0d44b3f2e2e1d1355c80bf89da_1280.jpg"
//           alt="woman, beauty, model"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g6a30d3f99aa72573d6e0ff8b03f3c5714d9413b7d06b18e88b2d4ed94ff6cd89cd318ebf799bcb51eccaecc4c337a8f56b9a701a313435670847a7d4c2bbb9c1_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g6a30d3f99aa72573d6e0ff8b03f3c5714d9413b7d06b18e88b2d4ed94ff6cd89cd318ebf799bcb51eccaecc4c337a8f56b9a701a313435670847a7d4c2bbb9c1_1280.jpg"
//           alt="smile, portrait, girl"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/gcd413b7ce74d2c0e92099d159711e61329506b85ead51d97d4d8af62c17c5fdc1e6c837938aaeabd19119c8c626aa14e0e8329e4b70359e28d46288d318ecb4d_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/gcd413b7ce74d2c0e92099d159711e61329506b85ead51d97d4d8af62c17c5fdc1e6c837938aaeabd19119c8c626aa14e0e8329e4b70359e28d46288d318ecb4d_1280.jpg"
//           alt="french fries, fast food, mcdonald's"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g6d2baa9cb8ce35fb47e23a5f510ff7232c8e4c61d2278f25e1a81038d38920a6e9389c11f9d885c5a4925c66312fbc16334abd01f2c964a0d33f7feec7203cb8_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g6d2baa9cb8ce35fb47e23a5f510ff7232c8e4c61d2278f25e1a81038d38920a6e9389c11f9d885c5a4925c66312fbc16334abd01f2c964a0d33f7feec7203cb8_1280.jpg"
//           alt="woman, pose, style"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/gaad5f7bc4de74fc3b4db0d36334cae34e3329c1ce7d0c308339d90743c13e55783f3f9f861c5f951cea59969ca347b62ed10258204730f94e0ce19e583c7baf7_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/gaad5f7bc4de74fc3b4db0d36334cae34e3329c1ce7d0c308339d90743c13e55783f3f9f861c5f951cea59969ca347b62ed10258204730f94e0ce19e583c7baf7_1280.jpg"
//           alt="woman, portrait, pose"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g352533b0b4190da34d511ed0e293466e50a7a00f24de013e99a58e05c936944707360c24fd50180349c3befdacd6bdcda1b0331d7de0fbd8f73e324586e2be48_1280.png"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g352533b0b4190da34d511ed0e293466e50a7a00f24de013e99a58e05c936944707360c24fd50180349c3befdacd6bdcda1b0331d7de0fbd8f73e324586e2be48_1280.png"
//           alt="woman, beautiful, face"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/gca779b6062cf070cf360983fd22053b8d5b94e03be09f241c7782fa58677391474c5db04fb7eaf448b491958adf6519a4362b6ddaf552e7c74da9efc9974de2a_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/gca779b6062cf070cf360983fd22053b8d5b94e03be09f241c7782fa58677391474c5db04fb7eaf448b491958adf6519a4362b6ddaf552e7c74da9efc9974de2a_1280.jpg"
//           alt="woman, nature, blooming"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/ga3c301c3589edc00bf69afb4f5f21120efcfd7ae6be83c309a38eef4698731e2f19b5f66c00bf2a6fe3404e1572fa93efe255697439f9ced7f8372610fd6930b_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/ga3c301c3589edc00bf69afb4f5f21120efcfd7ae6be83c309a38eef4698731e2f19b5f66c00bf2a6fe3404e1572fa93efe255697439f9ced7f8372610fd6930b_1280.jpg"
//           alt="woman, fashion, beauty"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g00ba3cb821bc8cad3d1901a511a8bea6c82dc23f2782cfc4514e99668f560c54cf2774470a657e2c934057a6dba0c92fdb59627815dc8b88c5630afc0f81f8f8_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g00ba3cb821bc8cad3d1901a511a8bea6c82dc23f2782cfc4514e99668f560c54cf2774470a657e2c934057a6dba0c92fdb59627815dc8b88c5630afc0f81f8f8_1280.jpg"
//           alt="woman, portrait, model"
//         />
//       </a>

//       <a
//         className="hover:opacity-75 "
//         target="_new"
//         href="https://pixabay.com/get/g9d2fcd6ab7f2755193fab02b0d82eb006183b5784b84c003882bd19f27a36eaef519cae2e37fb766362dbe9739c4f0273662fd0474dfe5945297906007613fd7_1280.jpg"
//       >
//         <img
//           className="w-full h-64 object-cover"
//           src="https://pixabay.com/get/g9d2fcd6ab7f2755193fab02b0d82eb006183b5784b84c003882bd19f27a36eaef519cae2e37fb766362dbe9739c4f0273662fd0474dfe5945297906007613fd7_1280.jpg"
//           alt="woman, model, portrait"
//         />
//       </a>
//     </section>
//   );
// };
