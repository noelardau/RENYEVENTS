import histoire_img from "../assets/images/A_propos_image.jpg"
import produit1 from "../assets/images/produit_bouteille.jpg"
import produit2 from "../assets/images/produit_bracelet.jpg"
import produit3 from "../assets/images/produit_chaussure.jpg"
import produit4 from "../assets/images/produit_tsaky.jpg"



export const AboutSection = () => {
  
  return (
    <div className="container mx-auto bg-white md:pt-[88px] pt-[120px] px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-3 gap-4" style={{ gridTemplateRows: 'repeat(6, minmax(100px, auto))' }}>
        {/* Row 1 */}
        <div className="col-span-3  text-left py-2">
          <span className="text-xs text-red-500 font-semibold uppercase">Notre Histoire</span>
          <h1 className="text-2xl font-bold">Reny Events de l'événementiel, du solidaire</h1>
        </div>
        {/* Row 2 */}
        <div className="row-span-2 flex items-center justify-center">
          {/* Logo Placeholder - Replace with actual logo */}
          <img src={histoire_img} alt="Product 1" className="w-full h-auto rounded" />
         
        </div>
        <div className="col-span-2  p-2">
          <p>
            Créée en 2022, la société Reny Events s’est constituée une place dans le paysage de l’organisation événementielle dans la capitale. Reny Events est également une association solidaire qui soutient les femmes dans leurs activités quotidiennes.
          </p>
        </div>
        {/* Row 3 */}
        <div className=" p-2">
          <img src={produit1} alt="Product 1" className="w-full h-auto rounded" />
        </div>
        <div className=" p-2">
                  <img src={produit2} alt="Product 1" className="w-full h-auto rounded" />

        </div>
        <div className="bg-gray-200 p-2">
                    <img src={produit3} alt="Product 1" className="w-full h-auto rounded" />

        </div>
        {/* Row 4 */}
        <div className=" p-2">
                    <img src={produit4} alt="Product 1" className="w-full h-auto rounded" />

        </div>
        <div className=" p-2">
          {/* <img src="https://via.placeholder.com/100?text=Image+5" alt="Product 5" className="w-full h-auto rounded" /> */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni molestiae at unde repellat saepe, impedit, voluptatibus minima quasi obcaecati sed enim eum! Ut suscipit perferendis ad veniam eligendi tempore laborum debitis dolorum ipsam possimus, nobis, nulla repellat facilis sequi. Tempore, voluptatum quo. Tempora eveniet tenetur qui deserunt suscipit laboriosam soluta rerum perferendis officiis nostrum odio iure consequatur libero optio et, magni neque sit sed blanditiis ex quis temporibus sequi vero dignissimos? Consectetur beatae quos in quia consequuntur quo, asperiores aperiam cumque est sunt corrupti enim debitis laudantium, qui ut repudiandae fuga illum commodi expedita voluptatum exercitationem error ipsa quisquam. Eos.

        </div>
        <div className=" p-2">
                    <img src={produit1} alt="Product 1" className="w-full h-auto rounded" />

        </div>
        {/* Row 5 */}
        <div className="col-span-1  p-4">
          <p>
            Les services de création et d’organisation événementielle proposés par Reny Events en place dépassent l’auteur de la mise en exposition tels de marché et les vide-greniers que les ventes privées, société également de l’organisation demande personnel à sur allant des grands spectacles offrant une large gamme d’événements.

            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore et adipisci, ipsam distinctio voluptatibus tenetur voluptatem labore neque. Quae vel facilis dolor tempore nobis et nisi pariatur facere sint consequatur, ut qui blanditiis at eos est distinctio reiciendis esse. Cupiditate, laudantium saepe? Unde ad blanditiis tempora libero rescipit, qui voluptates quaerat. Nobis, ducimus totam. 
          </p>
        </div>
        <div className="p-2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cum quisquam, numquam obcaecati ad dolor sint impedit fugit minus, deleniti cumque eius ea sapiente, dignissimos illum officiis fugiat repudiandae voluptatibus nostrum hic sunt. Expedita distinctio quasi libero corporis ut sequi ipsam impedit consequatur aut est tenetur dolor sapiente omnis minus quae neque quos et animi, consequuntur eius odio aliquid totam. Nemo maiores vero ut temporibus libero quisquam voluptates. Nihil assumenda id magni earum voluptate illo nam commodi ipsum. Officiis sed, cumque reprehenderit vero quisquam inventore tempora illo vel iusto error quia eos consequuntur, quidem sint excepturi. Quaerat quod distinctio soluta.
          </p>
        </div>
        <div id="contact"></div>
        {/* Row 6 */}
        {/* <div className="col-span-2 bg-gray-100 p-4 flex items-center">
          <img src="https://via.placeholder.com/80?text=Person" alt="Heriniaina Raoelison" className="w-20 h-20 rounded-full mr-4" />
          <div>
            <p className="text-gray-600 italic">"Qualité des services que nous proposons nous différencient des autres agences."</p>
            <p className="text-gray-800 font-semibold">Heriniaina Raoelison</p>
          </div>
        </div> */}
        {/* <div className="bg-gray-200 p-2">
          <img src="https://via.placeholder.com/100?text=Image+8" alt="Product 8" className="w-full h-auto rounded" />
        </div> */}
      </div>
    </div>
  );
};




// import { FaCheckCircle } from "react-icons/fa";
// import about_image from "../assets/images/A_propos_image.jpg";


// export const AboutSection = () => {
//   const atouts = [
//     "Expertise événementielle reconnue",
//     "Respect des délais et budgets",
//     "Réseau de partenaires fiables",
//     "Solutions personnalisées",
//     "Équipe professionnelle dédiée",
//     "Innovation et créativité",
//   ];

//   return (
//     <section className="py-10 px-4 pt-[88px] md:px-10 lg:px-20 bg-white" id="about">
//       <div className="max-w-7xl mx-auto">
//         <span className="text-xs text-red-500 font-semibold uppercase">Notre Histoire</span>

//         <div className="flex flex-col lg:flex-row gap-10 items-start mt-4">
 
//           <div className="flex-1">
//             <h2 className="text-2xl md:text-3xl font-bold mb-4">
//               RENY Events, organisateur événementiel d'expérience
//             </h2>
//             <p className="text-gray-700 mb-4 text-sm md:text-base">
//               Spécialisés dans l'organisation d'événements professionnels, nous mettons notre expertise au service de vos séminaires, spectacles, foires, conférences et de tous vos projets événementiels.
//             </p>

//             <h3 className="font-semibold text-lg mb-2">Notre Expertise</h3>
//             <p className="text-gray-700 mb-4 text-sm md:text-base">
//               Fort de nombreuses années d'expérience dans l'organisation événementielle, RENY Events s'est forgé une solide réputation dans la gestion complète d'événements professionnels de toute envergure.
//               Nous combinons créativité, rigueur opérationnelle et excellence du service.
//             </p>

//             <h3 className="font-semibold text-lg mb-2">Nos atouts</h3>
//             <ul className="text-gray-700 space-y-2 text-sm md:text-base">
//               {atouts.map((item, index) => (
//                 <li key={index} className="flex items-start gap-2">
//                   <FaCheckCircle className="text-red-500 mt-1" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>

//             <h3 className="font-semibold text-lg mt-6 mb-2">Notre siège</h3>
//             <p className="text-gray-700 text-sm md:text-base">
//               Pavillon 2, Cité Premier Ampandrana – Au cœur de notre communauté, nous restons proches de nos clients pour mieux les servir.
//             </p>
//           </div>


//           <div className="flex-1 h-64 md:h-auto">
//             <img
//               src={about_image}
//               height={500}
//               alt="Notre Histoire"
//               className="w-full rounded-lg shadow-md object-cover"
//             />
//           </div>
//         </div>
//       </div>
//       <div  id="contact"></div>
//     </section>
//   );
// }
