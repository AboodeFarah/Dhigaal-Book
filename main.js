const menuIcon=document.querySelector("#menu-icon");
const menu=document.querySelector("#menu");

menuIcon.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
})

// carD
const AllProduct = [
    {
        image : "/images/Righdad-01.png",
        name : "Rich Dad",
        description : "Rich Dad Poor Dad has sold over 32 million copies. The book has been translated to over 51 languages across 109 countries, and has been on the New York Times bestsellers list for over six years. It launched a series of books and related products; and received positive reviews from some critics.",
        price : 22
    },
    {
        image : "/images/7habit-01.png",
        name : "Habit",
        description : "The Habit loop is a neurological pattern that governs any habit. It consists of three elements: a cue, a routine, and a reward. Understanding these components can help in understanding how to change bad habits or form good ones. The habit loop is always started with a cue, a trigger that transfers the brain into a mode that automatically determines which habit to use. The heart of the habit is a mental, emotional, or physical routine. Finally there is a reward, which helps the brain determine if this particular loop is worth remembering for the future.[6] In an article in The New York Times, Duhigg notes, The cue and reward become neurologically intertwined until a sense of craving emerges",
        price : 32
    },
    {
        image : "/images/learnstatup-01.png",
        name : "Learn Statup",
        description :"Most startups fail. But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched.",
        price : 27
    },
    {
        image : "/images/lightout-01.png",
        name : "Light Out",
        description : "If you’re in any kind of leadership role—whether at a company, a non-profit, or somewhere else—there’s a lot you can learn here. Bill Gates, Gates NotesHow could General Electric—perhaps America’s most iconic corporation—suffer such a swift and sudden fall from grace?",
        price : 18
    },
    {
        image : "/images/3f6b7f50-86f3-4c3a-b02e-e87f5e03bbd5.png",
        name : "رسائل من القرآن",
        description : "رسائل من القرآن” للكاتب الفلسطيني أدهم شرقاوي هو عمل أدبي ديني يجمع بين البساطة والعمق، حيث يستعرض الكاتب آيات القرآن الكريم بطريقة مبتكرة وسهلة الفهم، مستخرجًا منها دروسًا وعبرًا حياتية. ما يميز هذا الكتاب؟ اللغة السلسة: يتميز أسلوب الكاتب بالبساطة والوضوح، مما يجعل الكتاب ملائمًا لجميع الفئات العمرية",
        price : 27
    },
    {
        image : "/images/sahaaba.png",
        name : "رسائل من الصّحابة",
        description : "هذا الدين لم يصلنا على طبق من ذهب وإنَّما على طبق من تَعَبٍ ! لقد وصلنا على أجساد الصحابة التي نخَرَتْها الرماح، وقطعتها السيوف ! وصلنا على نهر من دمائهم، وجبال من أشلائهم ! ..وصلنا بأموالهم، وهجرتهم، وجهادهم، وثباتهم! ..وهذه ثلاثمئة رسالة من الصحابة، اخترت أن تكون شاملة كل مناحي الحياة في العلاقات والمعاملات، والحب، والزواج والعائلة، والجيران، والعمل، والأصحاب ربطتها بالواقع، وأنزلتها منزل التطبيق، هؤلاء الصحابة لم يُصلحهم الزمان ولا المكان هؤلاء هم الذين أصلحوا الزمان والمكان.",
        price : 14
    },
    {
        image : "/images/haruun.png",
        name : "هارون الرشيد",
        description : "لعل الخليفة «هارون الرشيد» هو أكثر خلفاء العصر العباسي شهرة ومعرفة بين الناس وذلك لِمَا تَحَقق في عصره من نهضة عِلْمية وأدبية، حيث قَرَّب من مجالسه الشعراء والأدباء وأهل العلم كما ازدهرت حركة التجارة الخارجية ونَمَت العلاقات السياسية بين دولة الخلافة وممالك أوروبا فأهدى الرشيدُ الهدايا النفيسة والطريفة للإمبراطور «شارمان» التي عَكَسَت ما وَصَلَت له الحضارة العربية مِنْ تَقَدُّم آنذاك. أيضًا طار صيت الرشيد إلى أن بَلَغ الغربَ بسبب ما حَكَتْه روايات «ألف ليلة وليلة» عن الحياة الباذخة التي كانت عليها قصور الخليفة. كما يسرد المؤلف في هذا الكتاب الكثيرَ من الأحداث السياسية الكبرى على عهد الرشيد كصعود «البرامكة» وتنامي نفوذهم ثُمَّ محنتهم الشهيرة بسبب انقلاب الخليفة عليهم.",
        price : 14
    },
    {
        image : "/images/أسرار الدعاء.png",
        name : "أسرار الدعاء: فاستجاب له ربه",
        description : "الدعاء يُريحُك مِنْ عناء الحيْرة وشتات التفكير، وخوف المُستقبَل ومَللَ الانتظار وقلق المصير، وحُزن البلاء وضِيق الكرْب ؛ فإذا أوَيْتَ إلى فراشك، أو خلوْتَ بنفسك ، وبدأتَ تستعرضُ حياتك الماضية، وتُفكِّر، وتُحدّث نفسك عن مُستقبل أيامك القادمة،فاجعل الدعاء راحتك وهدوء نفسك وطُمأنينة قلبك !.",
        price : 14
    },
];
    const ProductCard = document.querySelector("#ProductCard");
    AllProduct.forEach((product)=>{
    const productHTML=`<div class="shadow-xl rounded-xl px-4 py-2 bg-gray-100 ">
            <img class="w-full rounded-xl" src="${product.image}" alt="">
            <h3 class="py-2">${product.name}</h3>
            <h3>${product.price}</h3>
            <button class="bg-[#E2FE26] rounded-full px-4 py-2 mt-2  hover:bg-transparent
             hover:text-black ring-1 hover:ring-[#E2FE26]" onclick="buynow('${product.name}','${product.description}','${product.price}','${product.image}') " >Buy Now</button>
            </div>`;
                ProductCard.innerHTML += productHTML;
})

  
function buynow(name,description,price,image){
    sessionStorage.setItem("productName",name)
    sessionStorage.setItem("productDescription",description)
    sessionStorage.setItem("productPrice",price)
    sessionStorage.setItem("productImage",image)

    window.location.href="buynow.html";
};



