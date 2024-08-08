import { categoryIdByRegion } from "general-config";
import { SingleRegionPlpData } from "lib/types/common";
import { generateFacets } from "../functions";
import {
  bannersDiamondAr,
  bannersFashionJewelryAr,
  bannersGiftOccasionsAr,
  bannersGoldAr,
  bannersJewelryAr,
  bannersLabGrownDiamondAr,
  bannersLoveEngagementAr,
  bannersMisslAr,
  bannersShopByBrandAr,
  giftsOccasionsAr,
} from "../banners-ar-eg";

export const arEg: SingleRegionPlpData = {
  lazurde: {
    lazurde: {
      seo: {
        title: "تسوقي مجوهرات لازوردي في مصر | Page <number> | لازوردي مصر",
        description:
          "اكتشفي مجموعتنا الرائعة من مجوهرات لازوردي أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.",
      },
      banner: bannersShopByBrandAr?.lazurde,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["lazurdeAr"],
        }),
      },
    },
    instyle: {
      seo: {
        title: "تسوقي مجوهرات إنستايل في مصر | Page <number> | لازوردي مصر",
        description:
          "اكتشفي مجموعتنا الرائعة من مجوهرات إنستايل أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.",
      },
      banner: bannersShopByBrandAr?.instyle,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["instyleAr"],
        }),
      },
    },
    "miss-l": {
      seo: {
        title: "تسوقي جميع مجوهرات مس أل في مصر | Page <number> | لازوردي مصر",
        description: `اكتشفي مجموعتنا الرائعة من مجوهرات الأزياء من مس أل لازوردي أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersShopByBrandAr?.missl,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAR"],
        }),
      },
    },
    "shop-by-brand": {
      banner: null,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        lazurde: {
          seo: {
            title: "تسوقي مجوهرات لازوردي في مصر | Page <number> | لازوردي مصر",
            description:
              "اكتشفي مجموعتنا الرائعة من مجوهرات لازوردي أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersShopByBrandAr?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
            }),
          },
        },
        instyle: {
          seo: {
            title: "تسوقي مجوهرات إنستايل في مصر | Page <number> | لازوردي مصر",
            description:
              "اكتشفي مجموعتنا الرائعة من مجوهرات إنستايل أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersShopByBrandAr?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["instyleAr"] }),
          },
        },
        "miss-l": {
          seo: {
            title:
              "تسوقي جميع مجوهرات مس أل في مصر | Page <number> | لازوردي مصر",
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الأزياء من مس أل لازوردي أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersShopByBrandAr?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["misslAr"] }),
          },
        },
      },
    },
    diamond: {
      seo: {
        title: `تسوقي مجوهرات الماس في مصر | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا الرائعة من المجوهرات الألماس بتصميمات فاخرة في مصر، بما في ذلك الخواتم والقلائد والأساور وغيرها. احصل على توصيل مجاني وإمكانية الإرجاع مع خيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: null,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `اتسوقي قلادات وعقود ألماس في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من قلادات وعقود الالماس أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.necklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              category: ["necklace"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>انطلقي معنا إلى عالم السحر والبريق للسلاسل والعقود الالماس</h2>
                <p>
                <span>&#xa0;</span><span>يمكنك الآن الاختيار من بين العديد من القطع المذهلة، بما في ذلك السلاسل الألماس والدلايات </span><a href="https://www.lazurde.com/ar-eg/diamond-jewelry" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">الألماس</span></u></a><span> والسلاسل التنس الألماس وتشوكر ألماس التي تضيف لمسة من الجمال والأناقة على إطلالتك وكأنك نجمة تسحر الجميع بذوقها الرفيع وتألقها الاستثنائي.</span>
              </p> 
                `,
              },
              content: {
                value: `
              
              <h2>سلاسل وعقود ألماس لكل مناسبة في مصر</h2>

             مجموعة فريدة من العقود و القلائد الألماس تيتح لك التألق والظهور بمظهر رائع في أي مناسبة. تتميز مجموعاتنا بالدقة والعناية في الصنع، حيث يتم استخدام الماس الأصلي عالي الجودة ضمن تصميمات فريدة ولمسة نهائية راقية تبرز جمال الألماس بأفضل شكل ممكن. فقد تم صياغة كل قطعة بعناية فائقة، مما يجعلها إضافة فاخرة لا تنسى لأي مجموعة من المجوهرات. وإذا كنتِ ممن يفضلون البساطة والسحر الهادئ، فإننا نقدم لك عقد الماس كلاسيكي فاتن تلائم ذوقك بشكل مثالي. واحدة من قطعنا المفضلة هي مجموعتنا من سلاسل التنس الألماس التي تخلق دائرة لا تنقطع من الحب والجمال. يمكنك حتى اختيار سلسلة ألماس بسيطة لتبرز جمال إطلالاتك اليومية

              <h2>عقود ألماس أنيقة ومتعددة الاشكال</h2>

             ويمكنك إضافة لمسة من السحر إلى السلسلة العادية التي تمتلكينها في مجموعتك من خلال ارتداء إحدى السلاسل الألماس المذهلة من لازوردي، ولا سيما وأن قطع هذه المجموعة تتميز بتصميم أنيق وجمال دائم، يجعل من السهل عليكِ التألق في أي مناسبة. دلايات الماس أنيقة ومتعددة الاستخدامات تتألق وتتوهج لتحكي قصة خاصة ساحرة ويمكن تنسيقها مع سلاسل مختلفة لابتكار طلة مميزة واستثنائية. تضم مجموعتنا دلايات ألماس مثالية تناسب إطلالاتك اليومية والمناسبات الخاصة.

              <h2>سلاسل ودلايات ألماس لأناقة لا حدود لها</h2>
              
              اكتشفي جاذبية السلاسل والدلايات الألماس من لازوردي التي تضيف لمسة من الأناقة والجمال على إطلالتك اليومية بكل يسر وسهولة. إنها تجمع بين البساطة والتألق، مما يجعلها الخيار المثالي لكل مناسبة. الألماس هو رمز للجمال والقوة، ويعتبر أحد أثمن المواد التي تزين العالم. إنه لا يقتصر على المناسبات الخاصة فقط، بل يمكن ارتداؤه واستخدامه في حياتنا اليومية أيضًا. وعليه، ندعوك لاستكشاف مجموعتنا التي تضم كل شيء بداية من القطع اليومية التي ستسحر قلبك، وصولاً إلى القطع الرائعة التي ستجذب بالتأكيد كل الأنظار.

              <h2>الأسئلة الشائعة:</h2>

              <h3>كيف اعتني بالسلسلة أو الدلاية؟</h3>
              ما عليك سوى وضع السلسلة أو الدلاية في الماء والصابون لبضع دقائق ثم التجفيف بقطعة قماش جافة.

              <h3>ما الأمور التي يجب أخذها في الاعتبار عند شراء عقد الماس ناعم؟</h3>
              عند شراء سلسلة ذهب بدلاية مزينة بالألماس، يجب التحقق من القيراط والدمغة و الألماس.

              <h3>هل يمكنني ارتداء طقم مجوهرات مكون من معادن أو أحجار كريمة أخرى؟</h3>

              <p>
              <span>نعم، يمكن أن يضيف دمج </span><a href="https://www.lazurde.com/ar-eg/jewelry/sets" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">طقم المجوهرات</span></u></a><span> مع معادن أو </span><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">أحجار كريمة</span></u></a><span> أخرى بعدًا. تأكدي من أن المجموعة تكمل التصميم العام لاطلالتك.</span>
            </p>
		
              `,
              },
            },
          ],
          schema: [
            {
              q: "كيف اعتني  بالسلسلة أو الدلاية؟",
              a: "ما عليك سوى وضع السلسلة أو الدلاية في الماء والصابون لبضع ساعات ثم التجفيف بقطعة قماش جافة.",
            },
            {
              q: "ما الأمور التي يجب أخذها في الاعتبار عند شراء سلسلة بلاية مزينة بالألماس؟",
              a: "عند شراء سلسلة ذهب بلاية مزينة بالألماس، يجب التحقق من القيراط والدمغة و الألماس.",
            },
            {
              q: "هل يمكنني ارتداء طقم مجوهرات مكون من معادن أو أحجار كريمة أخرى؟",
              a: "نعم، يمكن أن يضيف دمج طقم المجوهرات مع معادن أو أحجار كريمة أخرى بعدًا. تأكدي من أن المجموعة تكمل التصميم العام لاطلالتك.",
            },
          ],
        },
        rings: {
          seo: {
            title: `تسوقي خواتم نسائية ألماس في مصر | تصاميم خواتم ألماس | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من خواتم الالماس أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.rings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              category: ["rings"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>خواتم ألماس لامعة بتصاميم استثنائية</h2>

              <p>
				<span>اكتشفي عالم خواتم لازوردي المميزة؛ حيثما يلتقي الجمال بالابتكار في انسيابية تخلق جمالًا ساحرًا يلفت الأنظار. تحتفي مجموعة خواتم ألماس لازوردي بمعاني التناغم والاتساق المتحقق بين قطعها والتي تعزز في النهاية إطلالاتكِ اليومية وإطلالات المناسبات الخاصة. فإذا كنتي في رحلة للبحث عن الخواتم الألماس أو </span><a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><span class="Hyperlink" style="color:#1155cc">خواتم</span></a><a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><span class="Hyperlink" style="color:#1155cc">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><span class="Hyperlink" style="color:#1155cc">الذهب</span></a><span> أو دبل الزفاف، تدعوكِ لازوردي لاكتشاف مجموعتها وبالتأكيد ستجدي الخاتم الأمثل الذي يناسب ذوقكِ وشخصيتكِ.</span>
			</p>
                  `,
              },
              content: {
                value: `
           
              <h2>دبلة ألماس جذابة لتعبري عن حبكِ للعالم!</h2>
              
              <p>
				<span>إن </span><u><span>دبل </span></u><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><span class="Hyperlink" style="color:#1155cc">الزفاف</span></a><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><span class="Hyperlink" style="color:#1155cc">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><span class="Hyperlink" style="color:#1155cc">الألماس</span></a><span> من لازوردي تعتبر جزءًا من أهم لحظات حياتكِ، فهي تتسم بتصاميم عصرية ترمز للرابط الأبدي الذي يجمع بين قلبين كما أنها تعكس معاني الحب والالتزام. صُممت هذه الدبل بحرفية ودقة شديدة وتم إضافة فصوص الألماس لها لتتألقي في إطلالة تخطف الأنظار. إن دبل الألماس من لازوردي هي تجسيد حي لمعاني التفاني والجمال السرمدي الذي لا يتأثر بتغير الأزمان وتعدّ القطعة التي تربطكِ بكل حب بمن ستتزوجينه. لذا، فإن انتقاءها يجب ألا يكون عشوائيًا إذا كنتي ترغبين في إبراز مدى أناقة إطلالتكِ.</span>
		        	</p>
              
              <h2>تسوقي في مجموعة خواتم الألماس</h2>
              
              تضم مجموعة خواتم الألماس من لازوردي تشكيلة متنوعة من حيث التصميم ونمط الألماس وعيار الذهب، لتختاري الأنسب لكِ بكل سهولة. نهتم في لازوردي بطريقة تثبيت الألماس، بحيث نجعله يتألق ببريق لا يُضاهى عندما يُزين أصابعكِ. يمكنكِ أيضًا اكتشاف مجموعة خواتم ألماس لازوردي المزينة باللؤلؤ والأحجار الملونة والتي تنضح بالحيوية والفخامة في الوقت ذاته. اختيارات لا نهائية تناسب جميع الأذواق.

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>
              <a id="_3ex5k6pkghiu"></a><strong><span>ما هي مدة بقاء خاتم الألماس؟</span></strong>
            </h3>
            <p>
              <span>إلى الأبد! وهذا ما يجعله قطعة مميزة.</span>
            </p>
            <h3>
              <a id="_ttx7yl17hs5d"></a><strong><span>ما الذي يجب مراعاته عند شراء خاتم ألماس؟</span></strong>
            </h3>
            <p>
              <span>يجب التحقق من القيراط والمقاس.</span>
            </p>
            <h3>
              <a id="_plnjq5to6i83"></a><strong><span>هل يمكنني ارتداء خاتم الألماس كل يوم؟</span></strong>
            </h3>
            <p>
              <span>بالطبع! تقدم لازوردي مجموعة خواتم ألماس مصممة لتناسب مختلف إطلالاتكِ اليومية.</span>
            </p>
            <h3>
            ما الفرق بين خاتم الالماس وخاتم السوليتير؟
            </h3>
            <p>
              <span>الفرق بينهما يكمن في التصميم: خاتم الألماس يمكن أن يحتوي على حجر واحد أو أكثر بتصاميم متنوعة، بينما </span><a href="https://www.lazurde.com/ar-sa/love-engagement/solitaire-rings" style="text-decoration:none"><span class="Hyperlink" style="color:#1155cc">خاتم</span></a><a href="https://www.lazurde.com/ar-sa/love-engagement/solitaire-rings" style="text-decoration:none"><span class="Hyperlink" style="color:#1155cc">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/love-engagement/solitaire-rings" style="text-decoration:none"><span class="Hyperlink" style="color:#1155cc">السوليتير</span></a><span> يتميز بحجر ألماس واحد كبير في المركز بدون أحجار جانبية، وغالبًا ما يُستخدم كخاتم خطوبة.</span>
            </p>
            <p>
              <span style="font-weight:bold; color:#202124">&#xa0;</span>
            </p>
            <h3>
             كيف يتم شراء خاتم ألماس؟
            </h3>
            <p>
              <span>لشراء خاتم ألماس، اتبعي هذه الخطوات البسيطة:</span>
            </p>
              <p>
                <span dir="rtl"><span>●</span></span><span style="width:10.75pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>حددي الميزانية: قرري المبلغ الذي ترغبين في إنفاقه.</span>
              </p>
              <p>
                <span dir="rtl"><span>●</span></span><span style="width:10.75pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>تعلمي المزيد حول معايير الأربعة </span><span><span></span>C</span><span><span dir="rtl"></span> (القيراط، الوضوح، اللون، القطع) لتقييم جودة الألماس.</span>
              </p>
              <p>
                <span dir="rtl"><span>●</span></span><span style="width:10.75pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>اختاري التصميم: قرري نوع التصميم والمعدن للخاتم.</span>
              </p>
              <p>
                <span dir="rtl"><span>●</span></span><span style="width:10.75pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>ابحثي عن بائع موثوق: اختاري متجر مجوهرات ذو سمعة طيبة.</span>
              </p>
              <p>
                <span dir="rtl"><span>●</span></span><span style="width:10.75pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>اطلبي شهادة الألماس: تأكدي من حصولكِ على شهادة توثيق للألماس.</span>
              </p>
              <p>
                <span dir="rtl"><span>●</span></span><span style="width:10.75pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>فحص الخاتم بعناية: قبل الشراء، تأكدي من جودته.</span>
              </p>
              <p>
                <span dir="rtl"><span>●</span></span><span style="width:10.75pt; font:7pt 'Times New Roman'; display:inline-block">&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>اطلعي على سياسة الإرجاع والضمان: تأكدي من إمكانية الإرجاع أو وجود ضمان للخاتم.</span>
              </p>
            <p>
              <span style="font-weight:bold; color:#202124">&#xa0;</span>
            </p>
        <h3>كم يبلغ سعر خاتم الألماس؟</h3>
            <p>
              <span>يختلف سعر خاتم الألماس بناءً على عدة عوامل مثل وزن الألماس (القيراط) ودرجة نقاءه ولونه، وجودة القطع، بالإضافة إلى نوع المعدن المستخدم في الخاتم. تبدأ أسعار خواتم الماس من بضع مئات من الدولارات للقطع الصغيرة ذات النقاء والجودة الأقل، وتصل إلى عدة آلاف أو حتى ملايين الدولارات للقطع الكبيرة ذات الجودة العالية والنادرة.</span>
            </p>
            <p>
              <span>&#xa0;</span>
            </p>
            <h3>ما هي المجوهرات الأخرى التي يمكن ارتداؤها مع خاتم الألماس؟</h3>
             <p>يمكنكِ ارتداء ما يلي مع خاتم الألماس:</p>
            </p>
            <ol>
              <li>
                <a href="https://www.lazurde.com/ar-sa/diamond/earrings" style="text-decoration:none"><span class="Hyperlink">أقراط</span></a><a href="https://www.lazurde.com/ar-sa/diamond/earrings" style="text-decoration:none"><span class="Hyperlink">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/diamond/earrings" style="text-decoration:none"><span class="Hyperlink">ألماس</span></a>
              </li>
              <li>
                <a href="https://www.lazurde.com/ar-sa/diamond/necklaces-pendants" style="text-decoration:none"><span class="Hyperlink">قلادة</span></a><a href="https://www.lazurde.com/ar-sa/diamond/necklaces-pendants" style="text-decoration:none"><span class="Hyperlink">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/diamond/necklaces-pendants" style="text-decoration:none"><span class="Hyperlink">ألماس</span></a><span> رقيقة</span>
              </li>
              <li>
                <a href="https://www.lazurde.com/ar-sa/diamond/bracelets" style="text-decoration:none"><span class="Hyperlink">أساور</span></a><a href="https://www.lazurde.com/ar-sa/diamond/bracelets" style="text-decoration:none"><span class="Hyperlink">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/diamond/bracelets" style="text-decoration:none"><span class="Hyperlink">ألماس</span></a><span> أو </span><a href="https://www.lazurde.com/ar-sa/gold/bracelets-anklets" style="text-decoration:none"><span class="Hyperlink">أساور</span></a><a href="https://www.lazurde.com/ar-sa/gold/bracelets-anklets" style="text-decoration:none"><span class="Hyperlink">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/gold/bracelets-anklets" style="text-decoration:none"><span class="Hyperlink">ذهب</span></a><a href="https://www.lazurde.com/ar-sa/gold/bracelets-anklets" style="text-decoration:none"><span class="Hyperlink">&#xa0;</span></a>
              </li>
              <li>
                <a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><span class="Hyperlink">خواتم</span></a><a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><span class="Hyperlink">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><span class="Hyperlink">ذهب</span></a><span> بتصاميم بسيطة</span>
              </li>
            </ol>          
              `,
              },
            },
          ],
          schema: [
            {
              q: `ما هي مدة بقاء خاتم الألماس؟`,
              a: `إلى الأبد! وهذا ما يجعلها قطعة مميزة.`,
            },
            {
              q: `ما الذي يجب مراعاته عند شراء خاتم ألماس نسائي؟`,
              a: `يجب التحقق من القيراط و المقاس.`,
            },
            {
              q: `هل يمكنني ارتداء الخاتم الألماس كل يوم؟`,
              a: `بالطبع! تقدم لازوردي مجموعة خواتم الماس مصممة لتناسب مختلف إطلالاتك اليومية.`,
            },
          ],
        },
        bracelets: {
          seo: {
            title: `تسوقي أساور نسائية ألماس في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من أساور الالماس أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.bracelets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              category: ["bracelets"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>تسوقي أرقى تصاميم الأسوار الألماس للنساء في مصر</h2>
              استمتعي بجمال حلقان الألماس الصغيرة الكلاسيكية لتألق فاخر وإطلالاتك استثنائية. اختاري من بين الأنماط المختلفة للألماس البريليانت والباجيت وغيره بما يناسب ذوقك وشخصيتك. أن الأقراط الألماس من لازوردي تنضح بالأناقة البسيطة والسحر الراقي. سواء للمناسبات الخاصة أو الإطلالات اليومية، هذه المجموعة من الأقراط الألماس الصغيرة ستضيف لمسة من البهاء والجمال إلى مظهرك.
              `,
              },
              content: {
                value: `
                 
              <h2>تمتعي بالجمال الخالد مع أساور تنس ألماس من لازوردي</h2>

             <p>
	      			<span>تألقي باقتناء أسورة تنس ألماس من مجموعة لازوردي المميزة. توفر لازوردي تشكيلة متنوعة من أساور التنس الألماس بأحجام وقيراطات مختلفة وبقصات </span><a href="https://www.lazurde.com/ar-eg/diamond-jewelry" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">ألماس</span></u></a><span> متنوعة. يمكنك الاختيار من بين أساور التنس المزينة بالألماس المقطوع بقصة البريليانت أو الألماسات المقطوعة بنمط الماركيز على هيئة دمعة عين. تعتبر أساور التنس الألماس هذه قطعًا كلاسيكية لا تضاهى، حيث تعكس روعة الألماس وجماله بأسلوبها الفريد. تمتاز أساور التنس الألماس بأناقة خالدة وجمال الرائع مما يجعلها خيارًا رائعًا لأي مناسبة، سواء كانت مناسبة رسمية أو حدثًا خاصًا أو حتى للإطلالات اليومية.</span>
		        	</p>

              <h2>أساور ألماس عريضة وبحلقات لتتألقي دومً</h2>
           
              لدينا أيضًا مجموعة جميلة من الأساور الألماس العريضة والأساور الألماس بحلقات. تهدف الأساور الألماس العريضة والأساور الألماس بحلقات إلى إبراز جمال الألماس ولمعانه بطريقة فريدة وراقية؛ حيث تضفي هذه الأساور لمسة من التألق والأناقة على معصمك، سواء ارتديتها بمفردها أو قمت تنسيقها مع أساور أخرى لإضفاء مظهر عصري متعدد الطبقات. تضيف الأساور التنس الألماس لمسة من التألق والجمال إلى معصمك، وتعكس أسلوبًا راقيًا ينبض بالأنوثة والأناقة. مع لازوردي، يمكنك الاستمتاع بتجربة تسوق فاخرة للأساور الألماس عبر موقعنا الإلكتروني. تشتهر لازوردي بتقديم تشكيلات واسعة من الأساور الألماس المذهلة التي تلبي مختلف الأذواق والمناسبات. مهما كانت تفضيلاتك، يمكنك العثور على الأسورة الألماس المثالية بسهولة واستمتعي بتألق الألماس وروعة التصاميم واختاري الأسورة التي تعبر عن أناقتك وأسلوبك الفريد.

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>ما هو المقاس المناسب للأسورة؟.</h3>
              يعتمد هذا على تفضيلك وارتياحك ولكن مع الحرص على عدم إنزلاقها من يديك.
              
              <h3>هل يمكنني ارتداء الأسورة الألماس في جميع الأوقات؟</h3>
              نعم! بالتأكيد، الألماس من الأحجار القوية والمتينة ويمكن ارتدائه يوميًا.
              
              <h3>هل الأساور الألماس مرنة أو غير مرنة؟</h3>
              هناك انواع مختلفة من الاساور مثل الأساور الألماس العريضة الغير مرنة والأساور الألماس بحلقات المرنة

              <h3>ما هي القطع المجوهرات التي يمكن تنسيقها مع أساور الألماس؟</h3>

              <p>
	      			<span >يمكن تنسيق أساور الألماس مع قطع مجوهرات متنوعة مثل </span><a href="https://www.lazurde.com/ar-eg/jewelry/necklaces-pendants" style="text-decoration:none"><u><span style="line-height:200%; font-family:'Times New Roman'; font-size:11pt; color:#1155cc">العقود</span></u></a><span >، </span><a href="https://www.lazurde.com/ar-eg/jewelry/rings" style="text-decoration:none"><u><span style="line-height:200%; font-family:'Times New Roman'; font-size:11pt; color:#1155cc">الخواتم</span></u></a><span >، </span><a href="https://www.lazurde.com/ar-eg/jewelry/earrings" style="text-decoration:none"><u><span style="line-height:200%; font-family:'Times New Roman'; font-size:11pt; color:#1155cc">الأقراط</span></u></a><span >، </span><a href="https://www.lazurde.com/ar-eg/jewelry/bracelets-anklets" style="text-decoration:none"><u><span style="line-height:200%; font-family:'Times New Roman'; font-size:11pt; color:#1155cc">والأساور</span></u></a><span > الأخرى من </span><a href="https://www.lazurde.com/ar-eg/gold-jewelry" style="text-decoration:none"><u><span style="line-height:200%; font-family:'Times New Roman'; font-size:11pt; color:#1155cc">الذهب</span></u></a><span > أو الفضة</span><span style="line-height:200%; font-family:Roboto; font-size:11pt">. </span><span >يجب توافق القطع مع بعضها لتحقيق إطلالة أنيقة ومتناغمة</span><span style="line-height:200%; font-family:Roboto; font-size:11pt">.</span>
			        </p>
              `,
              },
            },
          ],
          schema: [
            {
              q: `ما هو المقاس المناسب للأسورة؟`,
              a: `يعتمد هذا على تفضيلك وارتياحك ولكن مع الحرص على عدم إنزلاقها من يديك.`,
            },
            {
              q: `هل يمكنني ارتداء الأسورة الألماس في جميع الأوقات؟`,
              a: `نعم! بالتأكيد، الألماس من الأحجار القوية والمتينة ويمكن ارتدائه يوميًا.`,
            },
            {
              q: `هل الأساور الألماس مرنة أو غير مرنة؟`,
              a: `تأتي الأساور الألماس عادة بقفل لتثبيتها بإحكام.`,
            },
          ],
        },
        earrings: {
          seo: {
            title: `تسوقي أقراط نسائية ألماس في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من أقراط الالماس أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.earrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              category: ["earrings"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>تسوقي أرقى تصاميم الأقراط الألماس مع لازوردي</h2>

              <p>
              <span>ندعوكِ إلى اكتشاف مجموعة أقراط لازوردي الألماس الرائعة والمتألقة للنساء. سيدهشك اهتمامنا بالتفاصيل إلى جانب بريق الألماس، وتنوع الخيارات المتاحة لك. إن مجموعة لازوردي الرائعة من أقراط الألماس للنساء تضم تصاميم مذهلة تلبي أذواق الجميع. تحظى الأقراط الألماسية بشعبية كبيرة في المناسبات الخاصة مثل الحفلات والزفاف والأعياد. إن لمعان </span><a href="https://www.lazurde.com/ar-eg/diamond-jewelry" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">الألماس</span></u></a><span> وبريقه يجذبان الأنظار ويضفيان لمسة من الأناقة والتألق على الحضور وخصوصًا الأقراط الألماس المتدلية. والآن، يمكنك الاختيار من بين مجموعة كبيرة من التصاميم الساحرة. كل تصميم ضمن مجموعة أقراط لازوردي جودة عالية وتفاصيل دقيقة ستضاعف بالتأكيد أناقتك وجمال إطلالاتك.</span>
            </p>

            `,
              },
              content: {
                value: `
              <h2>حلق الماس صغير بتصاميم أنيقة خالدة.</h2>
             استمتعي بجمال حلقان الألماس الصغيرة الكلاسيكية لتألق فاخر وإطلالاتك استثنائية. اختاري من بين الأنماط المختلفة للألماس البريليانت والباجيت وغيره بما يناسب ذوقك وشخصيتك. أن الأقراط الألماس من لازوردي تنضح بالأناقة البسيطة والسحر الراقي. سواء للمناسبات الخاصة أو الإطلالات اليومية، هذه المجموعة من الأقراط الألماس الصغيرة ستضيف لمسة من البهاء والجمال إلى مظهرك.

              <h2>حلق الماس دائري فخم</h2>
              لا شك أن الأقراط الذهب الدائرية الكلاسيكية هي الأفضل، ولكن عندما تأتي بلمسة من البريق واللمعان، تصبح أروع بكثير! تمثل الأقراط الألماس الدائرية لدينا تحديثًا عصريًا لتصميم الأقراط الدائرية التقليدي. فقد تم تصميمها بعناية لتتميزي أناقة وجمال الخالد، وفي الوقت نفسه تضيف لمسة عصرية ومعاصرة إلى مختلف إطلالاتك. سواء كنت تفضلين التصاميم الرقيقة أو القطع الجريئة والمزخرفة التي تجعلك محط الأنظار، فإننا نقدم مجموعة متنوعة تلبي مختلف التفضيلات الشخصية.

              <h2>أناقة ساحرة مع حلق الماس طويل متدلي من لازوردي</h2>
              اذا كنت تبحثين عن قطعة ملكية وأنيقة، فلا حاجة للبحث بعيدًا، فمجموعتنا من الأقراط الألماس المتدلية هي ما تحتاجينه. اجعلي الألماس يرقص برقة وسحر على أذنيك، ودعيه يعزز كل حركة لك بالجمال والأناقة. اكتشفي مجموعتنا الواسعة من التصاميم واختاري القطعة التي تعكس شخصيتك وتلبي ذوقك الخاص. ستجدين أن لدينا ما يناسب كل مناسبة وتجعل إطلالتك تبرز بأسلوب لا يُنسى

              <h2>بريق لافت مع أقراط الكليب الألماس من لازوردي</h2>

              أظهري جانبك الساحر دون الحاجة إلى ثقب في الأذن مع أقراط الكليب الألماس المميزة من لازوردي. صممت أقراط الألماس الكليب بعناية لضمان الراحة طوال اليوم. تستخدم تقنيات مبتكرة لجعل القفل المشبك قويًا وآمنًا، مما يضمن تثبيتها بإحكام على الأذن دون التسبب في أي إزعاج أو انزلاق. استمتعي بنفس القدر من الأناقة والتألق دون الحاجة إلى ثقب في الأذن مع هذه أقراط لازوردي الكليب المريحة والأنيقة. ستكون، بالتأكيد، إضافة رائعة لمجموعتك المجوهرات وستسمح لك بالتألق بأسلوبك الخاص دون أي قيود.

              <h2>أقراط ساحرة من لازوردي في مصر</h2>

              <p>
              <span>استمتعي بتجربة غامرة وفاخرة في عالم الأقراط الألماس مع لازوردي وتشكيلة رائعة من التصاميم التي صُنعت بعناية لتجسد الأناقة والبريق. اكتشف مجموعتنا الرائعة من الأقراط الألماس الصغيرة أو الأقراط الدائرية والأقراط المتدلية والأقراط الكليب المصاغة جميعها من </span><a href="https://www.lazurde.com/ar-eg/gold-jewelry" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">الذهب</span></u></a><span> عيار14 قيراط و 18 قيراط و 21 قيراط. لمسة من السحر تجعلك تتألقين بثقة.</span>
            </p>

              <h2>الأسئلة الشائعة:</h2>
             
              <h3>
              ما هي مدة بقاء حلق لألماس؟
			        </h3>
			<p>
			إلى الأبد! وهذا ما يجعلها قطعة مميزة.
			</p>

			<h3>
      ما الأمور التي يجب أخذها في الاعتبار عند شراء حلق ألماس؟
			</h3>

			<p>
			يجب التحقق من القيراط وقصة الألماس.
			</p>

			<h3>
	    	هل يمكن ارتداء الأقراط الألماس يوميًا؟ 
			</h3>
      
			<p>
			بالطبع! الألماس والذهب يدومان طويلًا وهما مناسبان للارتداء يوميًا.
			</p>

			<h3>
			ما هي القطع المجوهرات التي يمكن تنسيقها مع حلق الألماس؟
			</h3>

	      <p>
				<span>يمكن تنسيق حلق الألماس مع مجموعة متنوعة من القطع المجوهرات مثل </span><a href="https://www.lazurde.com/ar-eg/jewelry/necklaces-pendants" style="text-decoration:none"><u><span>الدلايات</span></u></a><span>، </span><a href="https://www.lazurde.com/ar-eg/jewelry/rings" style="text-decoration:none"><u><span>الخواتم</span></u></a><span>، </span><a href="https://www.lazurde.com/ar-eg/jewelry/bracelets-anklets" style="text-decoration:none"><u><span>والأساور</span></u></a><span>.</span>
		  	</p>
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `ما هي مدة بقاء الأقراط الألماس؟`,
              a: `إلى الأبد! وهذا ما يجعلها قطعة مميزة.`,
            },
            {
              q: `ما الأمور التي يجب أخذها في الاعتبار عند شراء أقراط ألماس؟`,
              a: `يجب التحقق من القيراط وقصة الألماس.`,
            },
            {
              q: `هل يمكن ارتداء الأقراط الألماس يوميًا؟`,
              a: `بالطبع! الألماس والذهب يدومان طويلًا وهما مناسبان للارتداء يوميًا.`,
            },
          ],
        },
        sets: {
          seo: {
            title: `تسوقي طقم مجوهرات ألماس في مصر | طقم مجوهرات ألماس | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من أطقم مجوهرات الالما أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.sets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              category: ["sets"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>كوني طقم ألماس كامل من لازوردي</h2>

              <p>
              <span>مع لازوردي، يمكنك اكتشاف العالم الساحر لأطقم الألماس حيث يمتزج الجمال والأناقة ليخلقا قطع مجوهرات مذهلة يصعب تجاهلها</span><span>. </span><span>مجموعة مميزة تضم أطقم </span><a href="https://www.lazurde.com/ar-eg/diamond/necklaces-pendants" style="text-decoration:none"><u><span>سلاسل الماس</span></u></a><span> </span><a href="https://www.lazurde.com/ar-eg/jewelry/rings" style="text-decoration:none"><u><span>وخواتم</span></u></a><span> زفاف الماس تأسر القلب وتعزز جمالك وتألقك في كل مناسبة</span><span>. </span><span>يمكنك الاختيار من بين أطقم الألماس المصاغة من </span><a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none"><u><span>الذهب الأصفر</span></u></a><span> الكلاسيكي أو </span><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none"><u><span>الذهب الأبيض</span></u></a><span> العصري أو </span><a href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none"><u><span>الذهب الوردي</span></u></a><span> الأنيق بعيارتهم 18 أو 21 قيراط.</span>
               </p>
              `,
              },
              content: {
                value: `
              <h2>أطقم سلاسل ألماس مبهرة في مصر</h2>
              
              <p>
		      		<span>زيني عنقك بسلاسل لازوردي الألماس، فإنه لا تتخلى أي أنثى عربية عن تصاميم المجوهرات الساحرة التي ترمز الى الأناقة والفخامة. تتميز مجموعاتنا بالدقة والعناية في الصنع، حيث يتم استخدام </span><a href="https://www.lazurde.com/ar-eg/diamond-jewelry" style="text-decoration:none"><u><span>الماس</span></u></a><span> الأصلي عالي الجودة ضمن تصميمات فريدة ولمسة نهائية راقية تبرز جمال الألماس بأفضل شكل ممكن. فقد تم صياغة كل قطعة بعناية فائقة، مما يجعلها إضافة فاخرة ولا تنسى لأي مجموعة من المجوهرات. تتوفر لدينا مجموعة واسعة من اطقم </span><a href="https://www.lazurde.com/ar-eg/diamond/necklaces-pendants" style="text-decoration:none"><u><span>عقد ألماس</span></u></a><span>، بما في ذلك التصاميم الرقيقة والأنيقة والسلاسل الجريئة والعصرية. سواء كنت تبحثين عن تصميم كلاسيكي أنيق أو قطعة جريئة ومميزة، فستجدين لدينا القطعة المثالية التي تناسب ذوقك وأسلوبك.</span>
		        	</p>

              <h2>التتويج الأمثل لقصة حبكما بخاتم زفاف رائع من لازوردي</h2>

              احتفلي بحبكما مع مجموعة خواتم زواج الماس وطقم الماس للعروس من لازوردي. فكل قطعة في هذه المجموعة هي شاهد على رابطة الحب الأبدية التي تجمع بينكما. تمثل أطقم الألماس لدينا رمزًا للحب الذي يجمع بين الأحباء، وتعكس بداية رحلة جميلة معًا. إن الألماس هو رمز للأبدية والقوة والجمال، ويتميز بالجودة العالية واللمعان الفريد، مما يجعل من هذه المجموعة إضافة فاخرة لمجوهراتك.

              <h2>مجموعة خواتم ألماس آسرة</h2>

              تتميز مجموعات خواتم الألماس من لازوردي بتصميمات فريدة تجمع بين الجمال الخالد والأناقة الحديثة. سواء كنتِ تبحثين عن خاتم مذهل أو هدية خاصة لنفسك أو لأحد أحبائك، فإن مجموعة الخواتم الألماس من لازوردي توفر لك باقة متنوعة من التصاميم التي تناسب كل الأذواق.

              <h2>احتفلي بأغلى لحظات حياتك مع طقم الماس للعروس من لازوردي</h2>
              أطقم ألماس فخمة و استثنائية من لازوردي صممت خصيصًا لتكون جزءًا من أهم لحظات حياتك. أيًا كانت المناسبة التي تحتفلين بها سواء خطوبة أو حفل زفاف أو ذكرى زواج أو غيرها من المناسبات الاحتفالية، أبدع مصممو لازوردي بمجموعة أطقم ألماس مذهلة لتكون جزءًا من تلك اللحظات الخاصة، حيث تتميز بتصميمات فريدة وجودة عالية وبريق رائع، لتضيف لمسة من الفخامة والجمال على إطلالتك في كل مناسبة. ندرك أن صناعة المجوهرات تتطلب الكثير من العناية والدقة، ولذلك، نحرص على استخدام ألماس عالي الجودة. تسوقي الآن من مجموعة أطقم ألماس لازوردي الفاخرة من الألماس، وتمتعي بإضافة فريدة ومبهرة لمجموعتك الخاصة

              <h2>الأسئلة الشائعة:</h2>
               <h3>هل يمكن ارتداء طقم ألماس ناعم كل يوم؟</h3>

               طقم من الأقراط الصغيرة الألماس وسلسلة بسيطة يمكنك ارتداؤه كل يوم وخصوصًا وأن الألماس أقوى الأحجار الكريمة ويتميز بأنه شديد التحمل.

              <h3>مما يتكون طقم الألماس؟</h3>

              في لازوردي، نوفر أطقم ألماس تتكون من عقد وزوج من الأقراط أو طقم كامل يتكون من عقد وزوج من الأقراط وخاتم وأسورة.
              
              <h3>كيف يمكنني اختيار مجموعة مجوهرات الماس؟.</h3>
              فكر في المكان الذي تخطط لارتداء المجموعة فيه. هل هو للارتداء اليومي أم للمناسبات الخاصة أم لكليهما؟ سيؤثر هذا على تصميم وحجم المجموعة.

              <h3>ما هي اسعار اطقم الالماس في مصر؟</h3>
              تختلف أسعار أطقم الألماس في مصر بناءً على عدة عوامل مثل جودة الألماس، ووزنه، وجودة المعدن الذي يتم استخدامه، وتصميم الطقم.
             
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل يمكن ارتداء طقم ألماس كل يوم؟`,
              a: `طقم من الأقراط الصغيرة الألماس وسلسلة بسيطة يمكنك ارتداؤه كل يوم وخصوصًا وأن الألماس أقوى الأحجار الكريمة ويتميز  بأنه شديد التحمل.`,
            },
            {
              q: `مما يتكون طقم الألماس؟`,
              a: `في لازوردي، نوفر أطقم ألماس تتكون من عقد وزوج من الأقراط أو طقم كامل  يتكون من عقد وزوج من الأقراط وخاتم وأسورة.`,
            },
            {
              q: `كيف يمكنني اختيار مجموعة مجوهرات الماس؟`,
              a: `فكر في المكان الذي تخطط لارتداء المجموعة فيه. هل هو للارتداء اليومي أم للمناسبات الخاصة أم لكليهما؟ سيؤثر هذا على تصميم وحجم المجموعة.`,
            },
          ],
        },
        "shop-all": {
          seo: {
            title: `تسوقي جميع المنتجات - مجوهرات ألماس | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعة رائعة من مجوهرات الالماس الفاخرة أونلاين في لازوردي مصر. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
            }),
          },
        },
        "best-sellers": {
          seo: {
            title: `تسوقي أفضل تشكيلة لدينا من مجوهرات الماس في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أفضل مجوهرات الالماس مبيعاً أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
            }),
          },
        },
        "new-in": {
          seo: {
            title: `تسوقي أحدث تصاميم مجوهرات الألماس | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الجديدة من تصميمات الالماس أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              newIn: ["newIn"],
            }),
          },
        },
        "special-price": {
          seo: {
            title: `احصلي على أفضل الأسعار على مجوهرات الالماس في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الالماس أونلاين في مصر، بقيمة رائعة وأفضل الأسعار. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
            }),
          },
        },
        "yellow-gold": {
          seo: {
            title: `تسوقي مجوهرات الماس ذهب أصفر في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس ذهب أصفر أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              metalColor: ["yellowGoldAr"],
            }),
          },
        },
        "white-gold": {
          seo: {
            title: `تسوقي مجوهرات الماس ذهب أبيض في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس ذهب أبيض أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              metalColor: ["whiteGoldAr"],
            }),
          },
        },
        "rose-gold": {
          seo: {
            title: `تسوقي مجوهرات الماس الذهب وردي في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس ذهب وردي أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              metalColor: ["roseGoldAr"],
            }),
          },
        },
        "multicolor-gold": {
          seo: {
            title: ``,
            description: ``,
          },
          banner: bannersDiamondAr?.mulitColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              metalColor: [
                "yellowWhiteGoldAr",
                "whiteRoseGoldAr",
                "yellowRoseGoldAr",
                "yellowWhiteRoseGoldAr",
              ],
            }),
          },
        },
        "under-4000": {
          seo: {
            title: `تسوقي مجوهرات الماس بأقل من 4000 جنيه مصري في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس بأسعار أقل 4000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              price: ["under4000"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cecece", text: "New In" },
            },
          },
        },
        "4000-8000": {
          seo: {
            title: `تسوقي مجوهرات الماس بأقل من 8000 جنيه في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس بأسعار أقل 8000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.under8000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              price: ["4000to8000"],
            }),
          },
        },
        "8000-10000": {
          seo: {
            title: `تسوقي مجوهرات الماس بأقل من 10,000 جنيه في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس بأسعار أقل 10,000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.under10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              price: ["8000to10000"],
            }),
          },
        },
        "10000-above": {
          seo: {
            title: `تسوقي مجوهرات الماس بأكثر من 10,000 جنيه في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس بأسعار تبدأ من 10,000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamondAr?.above10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              price: ["10000above"],
            }),
          },
        },
      },
    },
    gold: {
      seo: {
        title: `تسوقي مجوهرات من الذهب في مصر | تصاميم ذهب | Page <number> | لازوردي مص`,
        description: `اكتشفي مجموعتنا المذهلة من مجوهرات الذهب أونلاين في مصر، بما في ذلك الخواتم والقلائد والأساور وغيرها. استفد من التوصيل المجاني وإمكانية الإرجاع مع خيارات الشراء الفوري والدفع لاحقًا.`,
      },
      banner: null,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `تسوقي قلادات من الذهب في مصر | تصاميم قلادات سلاسل من الذهب | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا المذهلة من قلادات وعقود الذهب أونلاين في مصر، بتصاميم رائعة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.goldNecklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              category: ["necklace"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>اشتري تعليقات وسلاسل ذهب مميزة</h2>
              <p>
              <span>استمتعي بالعالم الساحر للسلاسل والدلايات الذهب حيث يلتقي الإبداع بالفخامة والرقي. في لازوردي نعتقد أن المجوهرات تعبيرًا حقيقًا عن شخصيتك وروحك وعليه فكل قطعة في مجموعة مجوهرات وذهب لازوردي مشبعة بالشغف والإبداع الاستثنائي الذي لا يضاهى. سواء كنتِ تبحثين عن سلسلة ذهب نسائية أو تعليقات ذهب أو عقد شوكر ذهب أو سلاسل</span><span>&#xa0; </span><span>ذهب رقيقة وناعمة أو عقود مميزة ... مجموعتنا تضم كل ما تريدين. يمكنك اختيار سلسلة أو دلاية ذهب تصميم كلاسيكي تعزز إطلالاتك اليومية أو شراء سلسلة أو دلاية مزينة </span><a href="https://www.lazurde.com/ar-eg/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">بالألماس</span></u></a><span> أو </span><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الأحجار</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الكريمة</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الملونة</span></u></a><span> لمثل هذه المناسبات الخاصة التي تحتاج إلى شيء استثنائي من عالم آخر.</span>
            </p>
          `,
              },
              content: {
                value: `
              <h2>موديلات وأشكال سلاسل ذهب بتصاميم متنوعة في مصر!</h2>
              اكتشفي تنوع تصاميم سلاسل وعقود ذهب لازوردي والتي تضم سلاسل الرقبة القصيرة (تشوكر) العصرية التي تمنحك طلة جريئة ومميزة تلفت إليكِ جميع الأنظار أو العقود المميزة التي تمنح عنقك بارتدائها سحرًا خلابًا وأناقة لا مثيل لها. يمكنك أيضًا اختيار السلاسل متعددة الطبقات التي تنضح بأناقة استثنائية تمزج بين الفخامة وروح العصر. هل ترغبين في طلة مدهشة يسألك عنها الجميع؟ ما عليك سوى اقتناء سلسلة من سلاسل لازوردي سواء تشوكر أو السلاسل الذهب القصيرة أو حتى عقد فخم لتحققي مرادك، وهذا ما ستجدينه ضمن مجموعة لازوردي التي تراعي مختلف الأذواق والتفضيلات.

              <h2>تألق مليئ بالسحر والأناقة مع دلايات ذهب لازوردي</h2>

              <p>
				      <span>الدلايات (التعاليق) </span><a href="https://www.lazurde.com/ar-eg/gold-jewelry" style="text-decoration:none"><u><span>الذهب</span></u></a><span> هي الاختيار الأمثل لتضيف جزء من شخصيتك إلى أي سلسلة. وإدراكًا منا لهذه الحقيقة، أبدعت لازوردي تصاميم دلايات (تعاليق) ذهب مميزة تعكس شخصيتك المميزة وأسلوبك الخاص وتحمل معها قيمة وجدانية مُتميزة. بإمكانك أن تختاري تزيين عنقك بدلاية مزينة بالأحجار الملونة الجذابة أو بدلاية مزينة بالألماس أو بتشارمز رقيقة تبرز جمال اختياراتك. من التصاميم البسيطة إلى الرموز المعقدة، تقدم مجموعة دلايات </span><span>و عقود الذهب من</span><span> لازوردي اختيارات لا حصر لها لتؤكدي تفردك ولتعززي معها سحرك الأنثوي.</span>
	        		</p>

              

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>هل يمكن ارتداء سلسلة ذهب طوال الوقت؟</h3>
              نعم! يمكنك ارتداء السلسلة الذهب طوال اليوم.
              
              <h3>ما الأمور التي يجب أخذها في الاعتبار عند شراء سلسلة ذهب؟</h3>
              عند شراء سلسلة ذهب، يجب التحقق من القيراط والدمغة.
              
              <h3>هل يتغير لون السلاسل الذهب؟</h3>
              لا، يمكن أن يتغير لون السلاسل المطلية بالذهب، ولكن سلاسل ذهب عيار 21 أو 18 لا يتغير لونها ابداً
              
              <h3>ما هي انواع سلاسل ذهب؟</h3>
              تتنوع أنواع سلاسل الذهب بين الكبيرة والصغيرة، حيث تتوفر سلاسل ذهب كبيرة، بينما تتميز السلاسل الذهب الصغيرة بتصاميمها الأنيقة والرقيقة.

              <h3>ما هو سعر سلاسل الذهب في مصر؟</h3>
              تختلف أسعار سلاسل الذهب في مصر بناءً على عدة عوامل مثل وزن الذهب، عيار الذهب، جودة التصنيع، وتصميم السلسلة.
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل يمكن ارتداء سلسلة ذهب طوال الوقت؟`,
              a: `نعم! يمكنك ارتداء السلسلة الذهب طول اليوم.`
            },
            {
              q: `ما الأمور التي يجب أخذها في الاعتبار عند شراء سلسلة ذهب؟`,
              a: ` عند شراء سلسلة ذهب، يجب التحقق من القيراط والدمغة.`
            },
            {
              q: `هل يتغير لون السلاسل الذهب؟`,
              a: `لا، يمكن أن يتغير لون السلاسل المطلية بالذهب، ولكن السلاسل المصاغة من الذهب سواء عيار 18 أو 21 قيراط لا يتغير لونها أبدًا.`
            },
          ]
        },
        rings: {
          seo: {
            title: `تسوقي خواتم ذهب نسائية في مصر | تصاميم خواتم ذهب | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا المذهلة من خواتم الذهب أونلاين في مصر، بتصاميم رائعة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.goldRings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              category: ["rings"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>خاتم ذهب نسائي مميز من لازوردي... اشتريه الآن!</h2>

              <p>انطلقي في رحلة إلى العالم الساحر للخواتم الذهب حيث تروي كل
              قطعة رواية خاصة وتحمل في طيات تصاميمها أناقة مذهلة وسحر آسر يحبس الأنفاس. إن
              مجموعتنا هي احتفاء حقيقي بجمال الذهب، فقد تم اختيار كل قطعة بعناية لتتزيني
              وتتألقي على الدوام. استكشفي مجموعة خواتم نسائية من لازوردي لتجدي ما تبحثين عنه
              فهي تضم تشكيلة من الخواتم الذهب والخواتم الستيتمنت و</span><span><a
              href="https://www.lazurde.com/ar-sa/love-engagement"><span lang=AR-SA
              style='color:#1155CC'>خواتم</span></a></span><span lang=EN style='color:black'><a
              href="https://www.lazurde.com/ar-sa/love-engagement"><span style='font-size:
              12.0pt;line-height:115%;color:#1155CC'> </span></a><a
              href="https://www.lazurde.com/ar-sa/love-engagement"><span lang=AR-SA
              style='font-size:12.0pt;line-height:115%;color:#1155CC'>الزفاف</span></a></span><span> وغيرها
              الكثير.</span></p>
              `,
              },
              content: {
                value: `
              <h2>تسوقي موديلات خواتم ذهب نسائية في مصر ببريق لافت وتصاميم استثنائية.</h2>
             
              <p><span> م لك مجموعة من الخواتم التي تنضح بسحر
              راقي يدهش العقول. إن كل خاتم ضمن مجموعة خواتم لازوردي الذهب هو قطعة فنية مميزة
              تبرز حرفة دقيقة وتصميم مبتكر ومتفرد. تتميز خواتم لازوردي بتفاصيل معقدة وعناصر
              بالغة الفخامة والرقي تشمل </span><span'><a
              href="https://www.lazurde.com/ar-sa/love-engagement/diamonds"><span><a
              href="https://www.lazurde.com/ar-sa/love-engagement/colored-stones"><span
              lang=AR-SA style='font-size:12.0pt;line-height:115%;color:#1155CC'>الأحجار</span></a><a
              href="https://www.lazurde.com/ar-sa/love-engagement/colored-stones"><span
              style='font-size:12.0pt;line-height:115%;color:#1155CC'> </span></a><a
              href="https://www.lazurde.com/ar-sa/love-engagement/colored-stones"><span
              lang=AR-SA style='font-size:12.0pt;line-height:115%;color:#1155CC'>الملونة</span></a></span><span> و</span><span
              lang=EN style='color:black'><a
              href="https://www.lazurde.com/ar-sa/love-engagement/pearls"><span lang=AR-SA
              style='font-size:12.0pt;line-height:115%;color:#1155CC'>اللؤلؤ</span></a></span><span>، مما يجعل من
              كل خاتم كنز غالٍ يستحضر إعجاب الجميع. يمكنك الاختيار من بين التصاميم المصاغة من
              خواتم ذهب عيار 21 أو عيار 18 قيراط، حسب تفضيلك.</span></p>

              <h2>اقتني خاتم ذهب مميز يرمز لقصة حبكما الأبدية!</h2>
              
              <p>
				<strong>خواتم من الذهب الأصفر</strong>: لدينا في متاجر لازوردي خواتم من الذهب الأصفر عيار 18 و عيار 21. اللون الأصفر هو اللون الطبيعي للذهب، ولكن الفرق بين عيار 18 و 21 هو نسبة تركيز الذهب. على سبيل المثال، يتكون خاتم الذهب عيار 21 من 87.5٪ من الذهب الخالص، بينما يحتوي الخاتم المصنوع من الذهب عيار 18 على 75٪ من الذهب الخالص.
			</p>
			<p>
				<strong>خواتم من الذهب الأبيض:</strong> خواتم الذهب الأبيض مصنوعة من سبيكة ذهب تحتوي على 87.5٪ من الذهب الخالص، لكن تركيز الروديوم أو الفضة في النسبة المتبقية&#xa0; يكون عالي، وعليه يظهر اللون الأبيض الملفت. تتميز خواتم الذهب الأبيض في لازوردي بمظهر فريد فهي أيضأ تبدو رائعة مع الألماس.
			</p>
			<p>
				<strong>خواتم من الذهب الوردي:</strong> لدينا تشكيلة خواتم ذهب وردي مميزة. بنفس طريقة انتاج الذهب الأبيض، في سبائك الذهب الوردي عيار 18 قيراط تكون نسبة الذهب الخالص 75٪. في حين أن الـ 25٪ المتبقية تحتوي على تركيز عالٍ من النحاس، ينتج لون مائل أكثر للحمرة. في بعض الأحيان، يكون اللون ورديًا أكثر، أو قد يشبه لونًا أفتح من النحاس. خواتم الذهب الوردي أنيقة، ويمكن أن تكون أيضًا متعددة الاستخدامات أي تناسب المناسبات و الارتداء اليومي.
			</p>
			<p>
				<strong>خواتم ذهب مختلطة:</strong> تضم مجموعة لازوردي تشكيلة من خواتم الذهب بألوانه. على سبيل المثال، يمكنكم شراء خاتم خطوبة بثلاثة ألوان ذهبية، أو خاتم ذهب مرصع بالأحجار الملونة. لستِ مضطرة لأن تتقيدي بمفهوم الخاتم ذو اللون الواحد، يمكنكِ ان تختاري خاتم ذهب بثلاثة ألوان متناسقة و متناغمة بشكل جذاب.
			</p>
			<h2>
				<a></a><strong>الأسئلة الشائعة حول خواتم الذهب:</strong>
			</h2>
			<h3>
				<a>هل يمكن ارتداء الخاتم الذهب يوميًا؟</span></strong>
			</h3>
			<p>
				نعم، بكل تأكيد. يمكنك اقتناء خاتم بسيط ليناسب مختلف إطلالاتك اليومية. تقدم لازوردي مجموعة خواتم الذهب مصممة لتناسب الاستخدام اليومي.
			</p>
			<h3>
				<a>ما هو نوع الذهب الأفضل في الخواتم؟</span></strong>
			</h3>
			<p>
				اختاري إما خاتم ذهب عيار 21 أو عيار 18 قيراط.
			</p>
			<h3>
				<a>هل الخواتم الذهب أفضل من الخواتم الألماس؟</span></strong>
			</h3>
			<p>
				ليس فعليًا، لكل منهما سحره الخاص. الأمر يعتمد على ما تريدين وعلى تفضيلاتك الشخصية.
			</p>
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل يمكن ارتداء الخاتم الذهب يوميًا؟`,
              a: `نعم، بكل تأكيد. يمكنك اقتناء خاتم بسيط ليناسب مختلف إطلالاتك اليومية. تقدم لازوردي مجموعة خواتم ذهب مصممة لتناسب الاستخدام اليومي.`,
            },
            {
              q: `ما هو نوع الذهب الأفضل في الخواتم؟`,
              a: `اختاري إما الخواتم المصاغة من الذهب عيار 18 أو 21 قيراط.`,
            },
            {
              q: `هل الخواتم الذهب أفضل من الخواتم الألماس؟`,
              a: `ليس فعليًا. لكل منهما سحره الخاص. الأمر يعتمد على ما تريدين وعلى تفضيلاتك الشخصية.`,
            },
          ],
        },
        "bracelets-anklets": {
          seo: {
            title: `تسوقي خلاخيل و أساور ذهب نسائية في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا المذهلة من الأساور وخلاخيل الذهب أونلاين في مصر، بتصاميم رائعة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.goldBraceletsAnklets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              category: ["bracelets"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>أساور ذهب تأخذك إلى عوالم التميز والسحر في مصر!</h2>

              !انطلقي إلى عالم السحر والجمال مع مجموعة أساور وخلاخيل ذهب لازوردي المتنوعة. كل قطعة في مجموعتنا تعكس فنًا رفيعًا وشغفًا حقيقيًا بصنع مجوهرات تعزز جمال روحك وبهاء إطلالاتك. إذا كنتِ تبحثين عن خلاخيل أو أساور ذهب رقيقة أو كليهما فلدينا مجموعة مميزة لكل منهما بالاضافة الى أساور تنس ذهب مميزة و الأساور بدلايات شارم، ستجدين في لازوردي كل ما تريدين. 

             `,
              },
              content: {
                value: `
              <h2>امنحي كاحليكِ لمسة من الفخامة مع خلخال ذهب من لازوردي</h2>
              
              الخلخال الذهب هو القطعة المثالية تحتاجينها لتحصلي على لمسة من الفخامة مع كل خطوة تخطينها. تقدم لازوردي مجموعة من الخلاخيل الذهب المصممة لتكمل جمال إطلالاتك بداية من الخلاخيل السلسلة ذات الحلقات إلى الخلاخيل المزينة بالخرزات إذا كنتِ من محبي التصاميم البوهيمية. اطلقي العنان لروحك وعززي سحرك الأنثوي، واختاري الخلخال المثالي لكِ الآن! 

              <h2>أناقة ساحرة مع أساور التنس الذهبية والأساور المزخرفة بالخرزات والأساور ذات الدلايات التشارم</h2>

              <p>
              <span>تمتعي بأناقة مذهلة عابرة للأزمنة مع مجموعة الأساور التنس والأساور ذات الخرزات وأساور الشارم التي أبدعها مصممو لازوردي. كل أسورة في مجموعتنا هي تجسيد لمعاني الجمال الخالد والحرفية الاستثنائية وهو ما يجعلها كنوزًا غالية وخالدة لا تتأثر بتغيرات الزمان. ستجدين </span><span>اساور ذهب عيار 21 و18</span><span> ولكِ إمكانية الاختيار ما بين </span><a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none"><u><span>الذهب</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none"><u><span>الأصفر</span></u></a><span> و</span><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none"><u><span>الذهب</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none"><u><span>الأبيض</span></u></a><span> أو ا</span><a href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none"><u><span>لذهب</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none"><u><span>الوردي</span></u></a><span>. من أساور التنس الكلاسيكية إلى السحر البوهيمية للأساور المزينة بالخرزات إلى الأساور ذات الدلايات الشارم الرقيقة، توفر مجموعة أساور لازوردي نطاق واسع من الاستايلات التي تناسب جميع الأذواق. !انطلقي وزيني معصمك وكاحلك بهذا الجمال المصنوع لك خصيصًا</span>
            </p>

              <h2>الأسئلة الشائعة:</h2>
              
              
              <h3>ما هو المقاس المناسب للأسورة؟</h3>
              لا يوجد مقاس مثالي، الأمر حسب تفضيلك.
              
              <h3>ما الأمور التي يجب أخذها في الاعتبار عند شراء اساور ذهب؟</h3>

              <p>
              <span>يجب التحقق من عيار الذهب المصاغ منها الأسورة فضلًا عن جودة </span><a href="https://www.lazurde.com/ar-eg/diamond-jewelry" style="text-decoration:none"><u><span>الألماس</span></u></a><span> أو </span><a href="https://www.lazurde.com/ar-eg/jewelry/pearls" style="text-decoration:none"><u><span>اللؤلؤ</span></u></a><span> أو </span><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none"><u><span>الأحجار الملونة</span></u></a><span> إذا كانت مزينة بأي منهم.</span>
              </p>

              <h3>هل يمكن ارتداء اساور الذهب يوميًا؟</h3>
              نعم، بكل تأكيد. في لازوردي، لدينا مجموعة واسعة من الأساور الذهب بتصاميم بسيطة مثالية لتكمل إطلالاتك اليومية.

              <h3>ما هي انواع واشكال أساور الذهب؟</h3>
              تشمل أشكال أساور وانسيالات الذهب مجموعة متنوعة من التصاميم، منها على سبيل المثال:

      <ul>
				<li>
					<span>أساور الذهب العريضة</span><span>.</span>
				</li>
				<li>
					<span>أساور الذهب الرفيعة</span><span>.</span>
				</li>
				<li>
					<span>الأساور المرصعة</span><span>.</span>
				</li>
				<li>
					<span>الأساور المزخرفة بالأحجار الكريمة</span><span>.</span>
				</li>
			</ul>   
              `,
              },
            },
          ],
          schema: [
            {
              q: `ما هو المقاس المناسب للأسوارة؟`,
              a: `لا يوجد مقاس مثالي، الأمر حسب تفضيلك.`,
            },
            {
              q: `ما الأمور التي يجب أخذها في الاعتبار عند شراء اساور ذهب؟`,
              a: `يجب التحقق من عيار الذهب المصاغ منها الأسوارة فضلًا عن جودة الألماس أو اللؤلؤ أو الأحجار الملونة إذا كانت مزينة بأي منهم.`,
            },
            {
              q: `هل يمكن ارتداء اساور الذهب يوميًا؟`,
              a: `نعم، بكل تأكيد. في لازوردي، لدينا مجموعة واسعة من الأساور الذهب بتصاميم بسيطة مثالية لتكمل إطلالاتك اليومية.`,
            },
          ],
        },
        earrings: {
          seo: {
            title: `تسوقي أقراط ذهب نسائية في مصر | تصاميم أقراط ذهب | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا المذهلة من أقراط الذهب أونلاين في مصر، بتصاميم رائعة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.goldEarrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              category: ["earrings"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>أطلقي العنان لشخصيتك الجامحة مع حلق ذهب من لازوردي</h2>

              <p>
              <span>شخصيتك تعبر عنها إكسسواراتك، فكل قطعة تختارينها تحكى فصلا من رواية حياتك اليومية، فإما أن تكون عنواناً على بساطتك، أو تكون مفتاحاً يدل الآخرين على شخصيتك الجريئة والقوية، ومع أقراط لازوردي الدائرية يمكنك إثبات جرأة اختباراتك وشخصيتك المميزة. ويمكنك مضاعفة بهاء وجاذبية إطلالات مع تصاميم الأقراط الدائرية الكلاسيكية ولاسيما وإن نسقتها مع أسورة وسلسلة و</span><a href="https://www.lazurde.com/ar-eg/gold/rings" style="text-decoration:none"><u><span>خاتم ذهب</span></u></a><span> من لازوردي. إذا كنتِ ترغبين في إطلاق العنان للنجمة التي بداخلك أو ترغبين في تعزيز مظهرك اليومي، ، فإذا اختارتي </span><span>حلق ذهب دائري من لازوردي</span><span> </span><span>&#xa0;</span><span>فهو الاختيار الأمثل لترتقي بمظهرك يوميًا دون عناء. أحجام وتصاميم وأشكال متنوعة مزينة </span><a href="https://www.lazurde.com/ar-eg/diamond-jewelry" style="text-decoration:none"><u><span>بالألماس</span></u></a><span> </span><a href="https://www.lazurde.com/ar-eg/jewelry/pearls" style="text-decoration:none"><u><span>واللؤلؤ</span></u></a><span> و</span><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none"><u><span>الأحجار الملونة</span></u></a><span>، يمكنك الاختيار من بينها.</span>
            </p>
              `,
              },
              content: {
                value: `
                
              <h2>تألقي مع حلق ذهب متدلي من لازوردي</h2>
              للأقراط المتدلية سحر خاص؛ فهي تعزز أنوثة ملامحك. قد أبدع مصممو لازوردي هذه القطع الفنية المميزة التي تتحرك بانسيابية ساحرة مع كل حركة لكِ. تعد الأقراط المتدلية إكسسوارًا مثاليًا للمناسبات الرسمية وغير الرسمية، ومجموعة الأقراط المتدلية من لازوردي هنا لتتمتعي بإطلالة بارزة تترك أثرًا جذابًا في الجميع. تشكل هذه الأقراط، بلا شك، إضافة مميزة إلى صندوق مجوهراتك وبالتأكيد ستكون جزءًا أساسيًا من إطلالاتك من الآن فصاعدًا.

              <h2>أقراط كليب ذهب تمنحك جمالًا استثنائيًا بكل سهولة</h2>
              تعتبر الأقراط عنصرًا مهمًا في إكمال إطلالة المرأة وإضفاء اللمسة الأخيرة على مظهرها وخصوصًا وإن كان يمكن تغيرها بسهولة دون عناء، ومن هنا نقدم مجموعة متنوعة من الأقراط الكليب الذهب لتضفي لمسة جمالية على وجهك وتسلط الضوء على ملامحه. يعتبر حلق الذهب الكبس خيارًا ممتازًا للنساء اللاتي لا يمتلكن ثقبًا في أذنيهن. فهي تمنحهن فرصة ارتداء الأقراط والاستمتاع بمزاياها دون الحاجة إلى إجراء عملية ثقب الأذن. توفر الأقراط الكليب من لازوردي الجمال والتنوع والراحة والأمان، دون أي قيود أو تعقيدات. 

              <h2>عززي سحرك مع حلق ذهب طويل متدلي من لازوردي</h2>
              الأقراط المتدلية الذهب تعد إضافة رائعة إلى مجموعة مجوهرات أي امرأة. ولأنك تستحقين الأفضل دائمًا، إليكِ مجموعة رائعة من الأقراط المتدلية تنضح بالسحر والجاذبية والفخامة التي تبحث عنهم كل امرأة. تقدم لازوردي مجموعة من الأقراط المتدلية التي تلائم إطلالات المناسبات الرسمية وغير الرسمية. تأتي الأقراط في مجموعة متنوعة من الأشكال والأحجام والتصاميم التي تناسب الإطلالات اليومية وتضفي لمسة من الأناقة البسيطة. وهناك حلق ذهب طويل وجريئ والذي يعبر عن الشخصية القوية والجريئة وتلفت الأنظار. تألقي مع سحر الأقراط الذهب المتدلية وكوني محط جميع الأنظار أينما خطت قدماك.

              <h2>أناقة كلاسيكية لا غنى عنها مع حلق ذهب صغير من لازوردي</h2>
              هل تبحثين عن حلق ذهب ناعم صغير بتصميم كلاسيكي تناسب كل الأوقات؟ مجموعة أقراط لازوردي الذهب الصغيرة تجسد كل معاني الجمال والأناقة. الأقراط الدبوسية تلفت الأنظار إلى منطقة الوجه بشكل خاص، فتساهم في إبراز ملامح الوجه وجماله. إن أقراط لازوردي الدبوسية مثالية للمناسبات الرسمية وغير الرسمية على حد سواء. إن اختيار الأقراط المناسبة يمكن أن يكون عاملاً حاسمًا في إبراز الجمال الطبيعي للوجه وتعزيز الثقة بالنفس. لا تترددي في اقتناء تصميمك المفضل من مجموعة أقراط لازوردي بمصر واستمتعي بتجربة أشكال وأنماط مختلفة لتجدي ما يناسبك ويبرز جمالك الفريد. يجب عليك دائمًا اختيار حلق ذهب نسائي يتناسب مع ذوقك الشخصي وتعكس شخصيتك.

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>هل حلق الذهب عيار 21 و عيار 18 جيد؟</h3>
              نعم، بكل تأكيد.
              
              <h3>هل يمكن ارتداء الأقراط الذهب يوميًا؟</h3>
              نعم، بكل تأكيد. تقدم لازوردي مجموعة واسعة من الأقراط الأنيقة التي تناسب مختلف إطلالاتك اليومية.
              
              <h3>لماذا يجب ارتداء أقراط ذهب؟</h3>
              تعتبر الأقراط أحد أهم الإكسسوارات التي تعزز إطلالة المرأة وتضفي عليها لمسة من الجمال والأناقة، فهي مثالية لتعكس جمالك في الأيام العادية وفي المناسبات الخاصة.

              <h3>ما هي اشكال حلقان الذهب؟</h3>

              تشمل أشكال حلقان الذهب مجموعة متنوعة من التصاميم والأشكال، منها على سبيل المثال:

     <ul>
				<li>
					<span>حلق ذهب دائري</span>
				</li>
				<li>
					<span>حلق مزخرف</span><span>.</span>
				</li>
				<li>
					<span>حلق مرصع بالأحجار</span><span>.</span>
				</li>
				<li>
					<span>حلق ذهب عريض</span>
				</li>
				<li>
					<span>حلق ذهب صغير</span>
				</li>
			</ul>      
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل الأقراط المصنوعة من الذهب عيار 18 قيراط جيدة؟`,
              a: `نعم، بكل تأكيد.`,
            },
            {
              q: `هل يمكن ارتداء الأقراط الذهب يوميًا؟`,
              a: `نعم، بكل تأكيد. تقدم لازوردي مجموعة واسعة من الأقراط الأنيقة التي تناسب مختلف إطلالاتك اليومية.`,
            },
            {
              q: `لماذا يجب ارتداء أقراط ذهب؟`,
              a: `تعتبر الأقراط أحد أهم الإكسسوارات التي تعزز إطلالة المرأة وتضفي عليها لمسة من الجمال والأناقة، فهي مثالية لتعكس جمالك في الأيام العادية وفي المناسبات الخاصة.`,
            },
          ],
        },
        sets: {
          seo: {
            title: `تسوقي طقم مجوهرات ذهب في مصر | أطقم ذهب | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا المذهلة من أطقم مجوهرات الذهب أونلاين في مصر، بتصاميم رائعة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.goldSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              category: ["sets"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>أطقم ذهب ببريق لافت وتصاميم استثنائية</h2>

              <p>
              أطقم الذهب هي الخيار الأمثل لابتكار إطلالات مميزة تعكس أناقتك وذوقك الرفيع في كل مناسبة. ومتى تكون الأطقم بهذا السحر الخلاب، ما عليكِ سوى اختيار الأنسب لك لتكون ضمن صندوق مجوهراتك. مع لازوردي، يمكنك الانطلاق في رحلة إلى عالم السحر والفخامة الذي تتلألأ فيه أطقم ذهب لازوردي بقطع مصممة بكل دقة ومصاغة بحرفية تعكس عمق شغفنا بابتكار الأفضل والأرقى لك دائمًا. تحتفي أطقم لازوردي بمعاني التناغم والاتساق المتحقق بين قطعها التي تعزز في النهاية إطلالاتك اليومية وإطلالات السهرة في المناسبات الخاصة. سواء كنت تبحثين عن طقم كامل أو طقم <a href="https://www.lazurde.com/ar-sa/gold/necklaces-pendants" style="text-decoration:none"><u><span style="color:#1155cc">سلاسل</span></u></a> أو <a href="https://www.lazurde.com/ar-sa/love-engagement/gold-sets" style="text-decoration:none"><u><span style="color:#1155cc">طقم</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/gold-sets" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/gold-sets" style="text-decoration:none"><u><span style="color:#1155cc">مجوهرات</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/gold-sets" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/gold-sets" style="text-decoration:none"><u><span style="color:#1155cc">للزفاف</span></u></a> أو طقم خواتم أو حتى أطقم خواتم للزفاف، فإن مجموعة أطقم لازوردي في المملكة هنا لتختاري من بينها قطعتك المفضلة التي تروي قصتك وتعكس تفرد شخصيتك. نحن على ثقة أنك ستجدين طقم الذهب الأفضل الذي سيشاركك أسعد الذكريات.
            </p>
              `,
              },
              content: {
                value: `
                  
              <h2>سحر آسر وبريق آخاذ مع أطقم لازوردي</h2>

              <p>
              تألقي بسحر آسر مع أطقم ذهب ناعمة من لازوردي تضم قطع مجوهرات مميزة تمنحك مظهرًا واثق مفعم بالأنوثة والرقة الممزوجة بالفخامة. سواء كنت تبحثين عن عقد فخم أو <a href="https://www.lazurde.com/ar-sa/gold/earrings" style="text-decoration:none"><u><span style="color:#1155cc">أقراط</span></u></a> رقيقة أو حتى <a href="https://www.lazurde.com/ar-sa/gold/bracelets-anklets" style="text-decoration:none"><u><span style="color:#1155cc">أساور</span></u></a> أو <a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><u><span style="color:#1155cc">خواتم</span></u></a> مميزة، فإن أطقم لازوردي هي اختيارك الأمثل. قطع متنوعة بتصاميم فخمة ومميزة تعزز أسلوبك خلال أي مناسبة دون تكلف أو عناء وتجعل منك محطًا لأنظار الجميع.
            </p>
              
              <h2>تألقي يوم زفافك مع أطقم لازوردي للعرائس</h2>
             
              <p>
				تحلم كل فتاة بأن تكون ملكة يوم زفافها، لذا تحرص دائمًا على اقتناء الأفخم والأجمل. وهو ما يتجلى في كل قطعة من قطع أطقم الزفاف والأعراس من لازوردي. فهي مصممة لتجعل من يوم زفافك ذكرى جميلة وسعيدة تمتد لسنوات عديدة ومديدة وخصوصًا مع سلاسل وعقود فخمة وجذابة أو أقراط أو أساور تضيف بهاءً لجمالك. تستحضر كل قطعة ضمن مجموعة مجوهرات وذهب لازوردي معاني الحب الأبدي وتشكل رمزًا للروابط الرومانسية التي تجمع بين قلبين.
			       </p>

              <h2>تسوقي طقم ذهب في مصر</h2>
             
              <p>
				يقدم مبدعو لازوردي مجموعة متنوعة من أطقم الذهب بألوانه <a href="https://www.lazurde.com/ar-sa/gold/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأصفر</span></u></a><span><span></span> </span><a href="https://www.lazurde.com/ar-sa/gold/white-gold" style="text-decoration:none"><u><span style="color:#1155cc"><span dir="rtl"></span></u>والأبيض</span></a><span><span></span> </span><a href="https://www.lazurde.com/ar-sa/gold/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc"><span dir="rtl"></span></u>والوردي</span></a> لتختاري من بينها الأنسب والأقرب إلى قلبك. ماذا أيضًا؟! تتزين قطع أطقم لازوردي <a href="https://www.lazurde.com/ar-sa/love-engagement/diamonds" style="text-decoration:none"><u><span style="color:#1155cc">بالألماس</span></u></a> و<a href="https://www.lazurde.com/ar-sa/love-engagement/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الأحجار</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الملونة</span></u></a> و<a href="https://www.lazurde.com/ar-sa/love-engagement/pearls" style="text-decoration:none"><u><span style="color:#1155cc">اللؤلؤ</span></u></a> وغير ذلك من الأحجار الكريمة التي تلمع وتتألق ببريق يضاهي بريقك الخاطف. تفضلوا بزيارة موقعنا للاطلاع على مجموعة أطقم ذهب ومجوهرات لازوردي. نحن على يقين أنك ستجدين ما تبحثين عنه.
			</p>

      <h2>ما الذي يجب وضعه في الاعتبار عند شراء طقم ذهب؟</h2>

				<p>
					<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>الميزانية: يجب التحقق من حد قيمة الشراء قبل التوجه لشراء طقم ذهب. وفقًا للميزانية، يتحدد طقم الذهب المناسب.
				</p>
				<p>
					<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>النمط والأسلوب: يُنصح دائمًا بعدم تجاهل أسلوبك الخاص. يجب معرفة ما يجعلك تشعرين بمزيد من الراحة والرضا قبل الشراء.
				</p>
				<p>
					<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>نوع طقم الذهب: هل تبحثين عن طقم ذهب كامل أم نصف طقم؟ هل تفضلين الحصول على طقم تعليقة؟ أم تفضلين أطقم مخصصة مصممة حسب تفضيلاتكِ؟
				</p>
				<p>
					<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>التصميم: تصميم طقم الذهب مهم أيضًا. من الجيد معرفة الاتجاهات الحالية في أطقم المجوهرات طالما أنها تناسبك، ومن ثم شراء طقم ذهب جديد وفقًا لذلك.
				</p>
			<h2>
				فهم أهمية أطقم الذهب
			</h2>
				<p>
					<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>توفر الجهد: ربما يكون أحد أهم الأسباب التي تدفع الناس لشراء أطقم الذهب هو توفير الجهد في مطابقة قطع مجوهرات مختلفة.
				</p>
				<p>
					<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اقتصادية: عادةً ما يكون شراء أربعة قطع مختلفة من المجوهرات بشكل منفصل أكثر تكلفة من شراء نفس الأنواع الأربعة في طقم كامل.
				</p>
				<p>
					<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>هدية مثالية: لطالما كانت الأطقم الذهب بمثابة الخيار الأفضل للهدايا. لأنها قيّمة وتحتوي على قطع مختلفة متناسقة معًا.
				</p>
				<p>
					<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>مجوهرات مناسبات للخطوبة والأعراس: يعتبر طقم الذهب جزءًا أساسيًا من مجوهرات الخطوبة والزفاف في مصر
				</p>
      

              <h2>الأسئلة الشائعة حول أطقم الذهب:</h2>
              
              <h3>هل المجوهرات المصنوعة من الذهب الأصفر جيدة؟</h3>
              
              نعم، بكل تأكيد. أن الذهب الأصفر معدن متين ومثالي للمجوهرات مثل الأقراط والخواتم والسلاسل وما إلى غير ذلك.
              
              <h3>هل يتغير لون الذهب الأصفر؟</h3>
             
              لا! يدوم الذهب الأصفر إلى الأبد وقد يحتاج فقط إلى تنظيفه من الأتربة والأوساخ كل فترة.

              <h3>هل يدوم الذهب الأصفر طويلًا؟</h3>
              
              نعم، بكل تأكيد. الذهب الأصفر معدن متين وثمين يدوم عمرًا طويلًا.

              <h3>كيف اعتني بالذهب الأصفر؟</h3>
              ببساطة، ما عليك سوى ترك مجوهراتك في ماء فاتر لبضع دقائق ثم مسحها بقطعة قماش جافة.

              <h3>ما هي عيارات اطقم الذهب؟</h3>
              أطقم الذهب تأتي بعيارات مختلفة تعكس نقاوة الذهب ومحتواه في الطقم. العيار هو مقياس لنقاء الذهب ويحدد نسبة الذهب الخالص الموجودة في القطعة. إليك أبرز عيارات الذهب المستخدمة في صناعة أطقم الذهب:

				<p>
					<span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><strong><span>طقم ذهب عيار 24:</span></strong><span> إنه الذهب الخالص، بنقاوة 100%. </span>
				</p>
				<p>
					<span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><strong><span>طقم ذهب عيار 22:</span></strong><span> يحتوي على 91.6% من الذهب الخالص، والنسبة الباقية عبارة عن مجموعة معادن أخرى. </span>
				</p>
				<p>
					<span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><strong><span>طقم ذهب عيار 21:</span></strong><span> يتكون من حوالي 87.5% ذهب. هو أحد العيارات الشائعة جدًا في الدول العربية ويُستخدم بكثرة في صناعة أطقم الذهب لمزيجه المتوازن بين النقاوة والمتانة.</span>
				</p>
				<p>
					<span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><strong><span>اطقم ذهب عيار 18:</span></strong><span> يحتوي على 75% ذهب و25% معادن أخرى مثل النحاس والفضة، مما يجعله أكثر صلابة ومناسب للاستخدام اليومي. </span>
				</p>

        <h3>ما هي أنواع اطقم الذهب المتوفرة لدى لازوردي مصر؟</h3>

        <p>
				ستجدين في لازوردي مجموعة أطقم ذهب ناعمة ومميزة، وتنقسم إلى عدة مجموعات. أولًا من حيث القيراط، ومنها:
			</p>
			<p>
				<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب عيار ٢١
			</p>
			<p>
				<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب عيار ١٨
			</p>
			<h4>
				حسب اللون الى:
			</h4>
			<p>
				<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب أبيض
			</p>
			<p>
				<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب اصفر
			</p>
			<p>
				<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب وردي
			</p>
			<p>
				<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب متعدد الألوان
			</p>
			<h4>
				واخيراً، حسب الأحجار المزين بها الطقم ومنها:
			</h4>
			<p>
				<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب باحجار ملونة
			</p>
			<p>
				<span dir="rtl"><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>أطقم ذهب بحجر الزركون
			</p>

              `,
              },
            },
          ],
          schema: [
            {
              q: `هأطقم ذهب ببريق لافت وتصاميم استثنائية؟`,
              a: `نعم، بكل تأكيد.`,
            },
            {
              q: `هل يمكن ارتداء الأقراط الذهب يوميًا؟`,
              a: `              أطقم الذهب هي الخيار الأمثل لابتكار إطلالات منسقة تعكس أناقتك وذوقك الرفيع في كل مناسبة. ومتى تكون الأطقم بهذا السحر الخلاب، ما عليكِ سوى اختيار الأنسب لك لتكون ضمن صندوق مجوهراتك مدى الحياة.
              مع لازوردي، يمكنك الانطلاق في رحلة إلى عالم السحر والفخامة الذي تتلألأ فيه أطقم ذهب لازوردي بقطع مصممة بكل دقة ومصاغة بحرفية تعكس عمق شغفنا بابتكار الأفضل والأرقى لك دائمًا. تحتفي أطقم لازوردي بمعاني التناغم والاتساق المتحقق بين قطعها التي تعزز في النهاية إطلالاتك اليومية وإطلالات السهرة في المناسبات الخاصة. سواء كنت تبحثين عن طقم كامل أو طقم سلاسل أو طقم مجوهرات للزفاف أو طقم خواتم أو حتى أطقم خواتم للزفاف، فإن مجموعة أطقم لازوردي في مصر هنا لتختاري من بينها قطعتك المفضلة التي تروي قصتك وتعكس تفرد شخصيتك. نحن على ثقة أنك ستجدين طقم الذهب الأفضل الذي سيشاركك أسعد الذكريات.`,
            },
            {
              q: `تألقي يوم زفافك مع أطقم لازوردي للعرائس؟`,
              a: `تحلم كل فتاة بأن تكون ملكة يوم زفافها، لذا تحرص دائمًا على اقتناء الأفخم والأجمل. وهو ما يتجلى في كل قطعة من قطع أطقم الزفاف والأعراس من لازوردي. فهي مصممة لتجعل من يوم زفافك ذكرى جميلة وسعيدة تمتد لسنوات عديدة ومديدة وخصوصًا مع سلاسل وعقود فخمة وجذابة أو أقراط أو أساور تضيف بهاءً لجمالك. تستحضر كل قطعة ضمن مجموعة مجوهرات وذهب لازوردي معاني الحب الأبدي وتشكل رمزًا للروابط الرومانسية التي تجمع بين قلبين.`,
            },
            {
              q: `تسوقي طقم ذهب في مصر؟`,
              a: `يقدم مبدعو لازوردي مجموعة متنوعة من أطقم الذهب بألوانه الأصفر والأبيض والوردي لتختاري من بينها الأنسب والأقرب إلى قلبك. ماذا أيضًا؟! تتزين قطع أطقم لازوردي بالألماس والأحجار الملونة واللؤلؤ وغير ذلك من الأحجار الكريمة التي تلمع وتتألق ببريق مثل بريقك الخاطف. تفضلوا بزيارة موقعنا للاطلاع على مجموعة أطقم ذهب ومجوهرات لازوردي. نحن على يقين أنك ستجدين ما تبحثين عنه!`,
            },
          ],
        },
        "wedding-bands": {
          seo: {
            title: ``,
            description: ``,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              type: ["weddingBandAr"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `تسوق جميع المنتجات - مجوهرات ذهب | Page <number> | لازوردي مصر`,
            description: `اكتشف مجموعة رائعة من مجوهرات الذهب أونلاين في لازوردي مصر. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.goldShopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
            }),
          },
        },
        "coins-bars": {
          seo: {
            title: ``,
            description: ``,
          },
          banner: bannersGoldAr?.goldCoinsBars,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              category: ["gold"],
              type: ["goldCoinAr", "goldBarAr"],
            }),
          },
        },
        "best-sellers": {
          seo: {
            title: `تسوقي مجموعتنا الأكثر مبيعًا من مجوهرات الذهب في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا المذهلة من مجوهرات الذهب الأكثر مبيعًا أونلاين في مصر، بتصاميم رائعة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.goldBestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
            }),
          },
        },
        "new-in": {
          seo: {
            title: `تسوقي أحدث تصاميم الأقراط والخواتم وقلادات الذهب | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا المذهلة من تصاميم الذهب الجديدة والفريدة أونلاين في مصر. تسوقي أحدث تصاميم خواتم الذهب مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.goldNewIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              newIn: ["newIn"],
            }),
          },
        },
        "special-price": {
          seo: {
            title: `احصل على أفضل الأسعار على مجوهرات الذهب في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا المذهلة من مجوهرات الذهب أونلاين في مصر، واستفيدي من القيمة العظيمة وأفضل الأسعار. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.goldSpecialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
            }),
          },
        },
        "yellow-gold": {
          seo: {
            title: `تسوقي مجوهرات ذهب أصفر نسائية في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب الأصفر أونلاين في مصر، بما في ذلك الخواتم والقلائد وأكثر. احصل على توصيل مجاني وإمكانية الإرجاع المجاني مع خيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.goldYellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              metalColor: ["yellowGoldAr"],
            }),
          },
        },
        "white-gold": {
          seo: {
            title: `تسوقي مجوهرات ذهب أبيض نسائية في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب الأبيض أونلاين في مصر، بما في ذلك الخواتم والقلائد وأكثر. احصل على توصيل مجاني وإمكانية الإرجاع المجاني مع خيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.goldWhiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              metalColor: ["whiteGoldAr"],
            }),
          },
        },
        "rose-gold": {
          seo: {
            title: `تسوقي مجوهرات ذهب وردي نسائية في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب الوردي أونلاين في مصر، بما في ذلك الخواتم والقلائد وأكثر. احصل على توصيل مجاني وإمكانية الإرجاع المجاني مع خيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.goldRoseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              metalColor: ["roseGoldAr"],
            }),
          },
        },
        "multicolor-gold": {
          seo: {
            title: `Buy Multicolor Gold Jewelry in Saudi Arabia | Page <number> | L'azurde KSA`,
            description: `Explore our collection of multicolor gold jewelry online in KSA, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGoldAr?.mulitColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              metalColor: [
                "yellowWhiteGoldAr",
                "whiteRoseGoldAr",
                "yellowWhiteRoseGoldAr",
                "yellowRoseGoldAr",
              ],
            }),
          },
        },
        "colored-stones": {
          seo: {
            title:
              "تسوقي مجوهرات ذهب مرصعة بأحجار ملونة في مصر | Page <number> | لازوردي مصر",
            description:
              "اكتشفي مجموعتنا الرائعة من مجوهرات الذهب بأحجار ملونة أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersGoldAr?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              stone: ["coloredStonesAr"],
            }),
          },
        },
        pearls: {
          seo: {
            title:
              "تسوقي مجوهرات ذهب مرصعة باللؤلؤ في مصر | Page <number> | لازوردي مصر",
            description:
              "اكتشفي مجموعتنا الرائعة من مجوهرات الذهب باللؤلؤ أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersGoldAr?.goldPearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              stone: ["pearlsAr"],
            }),
          },
        },
        "2000-4000": {
          seo: {
            title: `تسوقي مجوهرات ذهب بأقل من 4,000 جنيه مصري في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب بأسعار آقل من 4000 جنيه وأقل أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              price: ["2000to4000"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cecece", text: "New In" },
            },
          },
        },
        "4000-8000": {
          seo: {
            title: `تسوقي مجوهرات ذهب بأقل من 8,000 جنيه مصري في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب بأسعار آقل من 8000 جنيه وأقل أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.under8000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              price: ["4000to8000"],
            }),
          },
        },
        "8000-10000": {
          seo: {
            title: `تسوقي مجوهرات ذهب بأقل من 10,000 جنيه مصري في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب بأسعار آقل من 10,000 جنيه وأقل أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.under10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              price: ["8000to10000"],
            }),
          },
        },
        "10000-above": {
          seo: {
            title: `تسوقي مجوهرات ذهب بأكثر من 10,000 جنيه مصري في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من المجوهرات الذهبية بأسعار تبدأ من 10,000 جنيه وأعلى أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGoldAr?.above10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              price: ["10000above"],
            }),
          },
        },
      },
    },
    "fashion-jewelry": {
      seo: {
        title: `تسوقي مجوهرات نسائية في مصر | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا الرائعة من المجوهرات من الخواتم والقلائد والأساور وغيرها أونلاين في مصر. احصلي على توصيل وإرجاع مجاني مع خيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: null,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `تسوقي عقود ودلايات أزياء في مصر | تصاميم دلايات | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من قلائد ودلايات الأزياء أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.necklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              category: ["necklace"],
            }),
          },
        },
        rings: {
          seo: {
            title: `تسوقي خواتم أزياء نسائية في مصر | تصاميم خواتم | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من خواتم الأزياء وخواتم الزفاف أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.rings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              category: ["rings"],
            }),
          },
        },
        "bracelets-anklets": {
          seo: {
            title: `تسوقي أساور أزياء نسائية في مصر | أساور وخلاخيل  | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من أساور وخلاخيل الأزياء أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع، مع خيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.braceletsAnklets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              category: ["bracelets"],
            }),
          },
        },
        earrings: {
          seo: {
            title: `تسوقي أقراط أزياء نسائية في مصر | تصاميم الأقراط | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من أقراط الأزياء أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.earrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              category: ["earrings"],
            }),
          },
        },
        sets: {
          seo: {
            title: `تسوقي أطقم مجوهرات أزياء نسائية في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من أطقم مجوهرات الأزياء أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.sets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              category: ["sets"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `تسوقي جميع المنتجات - مجوهرات أزياء | Page <number> | لازوردي مصر`,
            description: `اكتشف مجموعة رائعة من مجوهرات الأزياء أونلاين في لازوردي مصر. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
            }),
          },
        },
        "best-sellers": {
          seo: {
            title: `تسوقي أفضل مجوهرات الأزياء مبيعاً في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أفضل ماركات مجوهرات الأزياء أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.bestSeller,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
            }),
          },
        },
        "new-in": {
          seo: {
            title: `تسوقي أحدث وأجدد تصميمات مجوهرات الأزياء في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أحدث تصاميم مجوهرات الأزياء الجديدة أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              newIn: ["newIn"],
            }),
          },
        },
        "special-price": {
          seo: {
            title: `احصلي على أفضل الأسعار على مجوهرات الأزياء في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء أونلاين في مصر، والتي تقدم قيمة رائعة بأفضل الأسعار. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
            }),
          },
        },
        "yellow-gold": {
          seo: {
            title: `تسوقي مجوهرات أزياء ذهب أصفر في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء من الذهب أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              metalColor: ["yellowGoldAr"],
            }),
          },
        },
        "white-gold": {
          seo: {
            title: `تسوقي مجوهرات أزياء ذهب أبيض في مصر العربية | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء من الذهب الآبيض أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              metalColor: ["whiteGoldAr"],
            }),
          },
        },
        "rose-gold": {
          seo: {
            title: `تسوقي مجوهرات أزياء ذهب وردي في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء من الذهب الوردي أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              metalColor: ["roseGoldAr"],
            }),
          },
        },
        "multicolor-gold": {
          seo: {
            title: `تسوقي مجوهرات أزياء ذهب متعدد الألوان في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات أزياء ذهب متعدد الألوان أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.multicolorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              metalColor: [
                "yellowWhiteGoldAr",
                "whiteRoseGoldAr",
                "yellowWhiteRoseGoldAr",
                "yellowRoseGoldAr",
              ],
            }),
          },
        },
        diamonds: {
          seo: {
            title: `تسوقي مجوهرات أزياء الماس في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء من الالماس أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.diamond,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              diamonds: ["diamondsAr"],
            }),
          },
        },
        "colored-stones": {
          seo: {
            title: `تسوقي مجوهرات أزياء بأحجار ملونة في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء من الأحجار الملونة أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              stone: ["coloredStonesAr"],
            }),
          },
        },
        pearls: {
          seo: {
            title: `تسوقي مجوهرات أزياء من اللؤلؤ في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء من اللؤلؤ أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              stone: ["pearlsAr"],
            }),
          },
        },
        "under-2000": {
          seo: {
            title: `تسوقي مجوهرات أزياء بأقل من 2,000 جنيه في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء بأسعار أقل من 2,000 جنيه أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              price: ["under2000"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cecece", text: "New In" },
            },
          },
        },
        "2000-4000": {
          seo: {
            title: `تسوقي مجوهرات أزياء بأقل من 4,000 جنيه في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء بأسعار أقل من 4,000 جنيه أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              price: ["2000-4000"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cecece", text: "New In" },
            },
          },
        },
        "4000-8000": {
          seo: {
            title: `تسوقي مجوهرات أزياء بأقل من 8,000 جنيه في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء بأسعار أقل من 8,000 جنيه أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.under8000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              price: ["2000to4000"],
            }),
          },
        },
        "8000-10000": {
          seo: {
            title: `تسوقي مجوهرات أزياء بأقل من 10,000 جنيه في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء بأسعار أقل من 10,000 جنيه أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.under10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              price: ["8000to10000"],
            }),
          },
        },
        "10000-above": {
          seo: {
            title: `تسوقي مجوهرات أزياء بأكثر من 10,000 جنيه في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء بأسعار تبدأ من 10,000 جنيه أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelryAr?.above10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr"],
              price: ["10000above"],
            }),
          },
        },
      },
    },
    "love-engagement": {
      seo: {
        title: "تسوقي مجوهرات زواج وخطوبة في مصر | Page <number> | لازوردي مصر",
        description:
          "اكتشفي مجموعتنا من مجوهرات الزواج أونلاين في مصر، بما في ذلك الخواتم والعقود والأساور وغيرها. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.",
      },
      banner: bannersLoveEngagementAr?.LoneCategory,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({}, [
          {
            type: ["weddingBandAr", "twinsAr", "eternityAr", "solitaireAr"],
          },
          {
            category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
            collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
          },
        ]),
      },
      contentSection: [
        {
          text: {
            value: `
           <h2>مجوهرات خطوبة بتصاميم أيقونية لا يمكن تفويتها</h2>

           انطلقي في عالم الحب والرومانسية مع مجموعة مجوهرات لازوردي المميزة للخطوبة والزفاف. سواء كنت مقبلًا على تقديم عرض للزواج، أو الاحتفال بيوم زفافك، أو الإفصاح عن حبك في يوم عيد الحب، أو كنتِ تبحثين عن القطعة الأمثل لزفافك، تصاميمنا الخالدة هل الأمثل لتعبرا بها عن قصة حبكما.
`,
          },
          content: {
            value: `
                  
            <h2>خواتم خطوبة رائعة في مصر</h2>
            يمكن أن يكون اختيار خاتم خطوبة من القرارات الصعبة لدى الكثير من الفتيات، ولكن مع خواتم الخطوبة من لازوردي ستجدين خاتم الأحلام الذي لطالما أردت امتلاكه. فكل خاتم في مجموعة لازوردي للخطوبة والزواج هو قطعة فنية تعكس معها معاني الحب والالتزام. يمكنك الآن الاختيار من بين مجموعة واسعة من التصاميم بداية من الخواتم السوليتر الكلاسيكية إلى الخواتم ذات التصاميم المعقدة المزينة بالألماس، ستجدي، من بينها، بالتأكيد الخاتم الذي يعكس قصة حبكما. جددوا حبكما على الدوام مع مجموعة لازوردي المذهلة لخواتم الخطوبة والزفاف.

          <h2>أناقة لا تنضب مع خواتم لازوردي للزفاف </h2>
          عندما يتعلق الأمر بالزفاف، فإن خاتم الزفاف يحمل دلالة خاصة ويعتبر رمزًا للحب والوفاء والارتباط الدائم. تعد خواتم الزفاف من لازوردي خيارًا رائعًا للأزواج الذين يبحثون عن قطعة فريدة من نوعها تعكس شخصيتهم وتجسد تفاصيل هذه البداية الجديدة. بالإضافة إلى التصميم الجمالي، تعتبر خواتم الزفاف من لازوردي أيضًا علامة على الجودة والمهارة الحرفية العالية. تمتاز لازوردي بتقديم مجوهرات من الدرجة الأولى تتميز بالتفاصيل الدقيقة واللمسة النهائية الفاخرة. سواء كنتِ تبحثين عن دبلة بسيطة وأنيقة أو تصميم مرصع بالألماس، فإن مجموعة خواتم الزفاف والخطوبة من لازوردي تضم خيارات لا حصر لها تعد رمزًا للحب الدائم والارتباط وستظل تذكارًا قيمًا طوال الحياة.

          <h2>تألقي بإطلالة العروس مع مجوهرات عروس من لازوردي في مصر</h2>
          يوم الزفاف هو يوم استثنائي في حياة العروس، وتسعى كل فتاة لأن تكون متألقة ومذهلة في هذا اليوم الخاص، لذا أبدع مصممو لازوردي مجموعة مجوهرات زفاف مذهلة لتبرز جمالك وأناقتك. تضم مجموعتنا كل ما تحتاجه كل عروس بداية من السلاسل والعقود الأنيقة من الذهب عياري 18 و21 قيراط إلى الأقراط المبهرة المرصعة بالألماس أو اللؤلؤ أو الأحجار الملونة. تم تصميم كل قطعة بعناية فائقة ممزوجة بلمسات من الحب لتحظي بطلة فريدة في يومك المميز.

          جاذبية لا تضاهى: خواتم الخطوبة الذهب.

          <h2>الأسئلة الشائعة:</h2>

          <h3>أي حجر هو الأمثل لخاتم خطوبة؟</h3>
           يعتمد ذلك على تفضيلك أنتِ وشريككِ.

          <h3>أي لون ذهب هو الأفضل لخاتم الخطوبة؟</h3>
          !أي لون ذهب تفضلينه

          <h3>ما أهمية خاتم الخطوبة؟</h3>
           إنه دليل حبكما ورمز الحب الذي يجمع بينكما

          <h3>ما هي أنواع خواتم الخطوبة؟</h3>
           ثمة 4 أنواع وهي الخواتم السوليتر والخواتم الألماس والخواتم الهالو التي تتميز بهالة تحتضن ألماسة مركزية أو حجر كريم محاط بدائرة أصغر من الماس أو الأحجار الكريمة والخواتم التي تضم ثلاثة أحجار.
                  `,
          },
        },
      ],
      schema: [
        {
          q: `أي حجر هو الأمثل لخاتم خطوبة؟`,
          a: `يعتمد ذلك على تفضيلك أنتِ وشريككِ.`,
        },
        {
          q: `أي لون ذهب هو الأفضل لخاتم الخطوبة؟`,
          a: `!أي لون ذهب تفضلينه`,
        },
        {
          q: `ما أهمية خاتم الخطوبة؟`,
          a: `إنه دليل حبكما ورمز الحب الذي يجمع بينكما`,
        },
        {
          q: `ما هي أنواع خواتم الخطوبة؟`,
          a: `ثمة 4 أنواع وهي الخواتم السوليتر والخواتم الألماس والخواتم الهالو التي تتميز بهالة تحتضن ألماسة مركزية أو حجر كريم محاط بدائرة أصغر من الماس أو الأحجار الكريمة والخواتم التي تضم ثلاثة أحجار.`,
        },
      ],
      children: {
        "shop-all": {
          seo: {
            title:
              "تسوق جميع المنتجات - مجوهرات خطوبة و زواج | Page <number> | لازوردي مصر",
            description:
              "اكتشف مجموعة فريدة من مجوهرات الزواج وخواتم الخطوبة أونلاين في لازوردي مصر. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersLoveEngagementAr?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({}, [
              {
                type: ["weddingBandAr", "twinsAr", "eternityAr", "solitaireAr"],
              },
              {
                category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
              },
            ]),
          },
        },
        "wedding-bands": {
          seo: {
            title: `تسوق خواتم زواج | خواتم زفاف في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم الزواج أونلاين في مصر، بتصميمات فاخرة. تسوقي خواتم الزفاف مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.weddingBands,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              type: ["weddingBandAr"],
            }),
          },
        },
        "twin-rings": {
          seo: {
            title: `تسوق خواتم توينز | خواتم خطوبة توينز في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم التوينز أونلاين في مصر، بتصميمات فاخرة. تسوقي الخواتم التوأم مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.twinRings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              type: ["twinsAr"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
               <h2>اكشفي مجموعة خواتم التوينز الألماس وتوينز الخطوبة في لازوردي</h2>
    
               احتفلي بحبكما كما لم تحتفلا به من قبل مع مجموعة خواتم التوينز الرائعة من لازوردي، فهي تجسد الطريقة المثالية للتعبير عن حبكِ والتزامكِ الأبدي.
    `,
              },
              content: {
                value: `
                      
                <h2>اكتشفي روعة خواتم التوينز الألماس التي تجسد معاني الوحدة والروابط القوية بين شخصين متحابين</h2>
    
                <p>
                <span>تعبر خواتم التوينز من لازوردي عن حبكما المشترك الذي لا حدود له وتجسد كل قطعة ألماس رابطة لا يمكن كسرها. انطلقي في رحلة إلى عالم الأناقة والسحر مع خواتم التوينز من لازوردي واحصلي على إطلالات متألقة بلا حدود. صُممت </span><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">خواتم</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">الخطوبة</span></u></a><span> لتحتفلا بلحظات الخطوبة المبهجة والتي تعتبر من أكثر اللحظات سعادة وسحرًا في حياة أي ثنائي. فهي اللحظة التي يعلن فيها الحبيبان عن تعهدهما المتبادل وقرارهما بمشاركة الحياة معًا. وبما أن هذه اللحظة فريدة وخاصة، فإن خاتم الخطوبة يكتسب أهمية كبيرة في رمزية الاحتفال. وفي الخطوة التالية من رحلتكما المشتركة، دعوا خواتم الخطوبة التوينز تكون تعبيرًا عن التزامكما وبداية لحياة تملأها الحب والسعادة، فهي تذكير لكما بروح المغامرة والوحدة والتفاني التي تشتركان فيها.</span>
              </p>
    
              <h2>تمتعي بجمال دبل التوينز الذهب من لازوردي</h2>
              <p>
              <span>زيني أصابعكِ دبل التوينز الرائعة التي تشهد على عمق حبكما، فمجموعة خواتم التوينز من لازوردي تتميز بتصاميمها الجذابة والمتنوعة، كما أننا نقدم لكِ خيارات متعددة من ألوان الذهب لتناسب جميع الأذواق. يمكنكِ الاختيار بين </span><a href="https://www.lazurde.com/ar-sa/diamond/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/diamond/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/diamond/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأصفر</span></u></a><span> التقليدي الذي يعتبر رمزًا للفخامة والتقاليد، أو </span><a href="https://www.lazurde.com/ar-sa/gold/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/gold/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/gold/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأبيض</span></u></a><span> العصري الذي يتميز بمظهره الأنيق والأنثوي، أو </span><a href="https://www.lazurde.com/ar-sa/gold/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/gold/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/gold/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الوردي</span></u></a><span> الجميل الذي يضفي لمسة من الرومانسية. اختاري خواتم التوينز التي تعبّر عن قصة حبكما وتجسد رمز الارتباط العميق الذي يجمعكما. دعي خواتم التوينز من لازوردي تضيء قصة حبكما بجمالٍ لا يعد ولا يحصى، فهي ليست مجرد قطع مجوهرات، بل هي تعبير عن الروح والمشاعر العميقة التي تجمعكما، وستبقى تحفة فنية تحمل قيمة عاطفية لا تقدر بثمن.</span>
            </p>
    
    
              <h2>الأسئلة الشائعة:</h2>
    
              <h3>
            <a id="_lp2ywcx9a62u"></a><strong><span>ما أهمية خواتم التوينز؟</span></strong>
          </h3>
          <p>
            <span>تشكل خواتم التوينز اختيارًا مثاليًا للشريكين اللذين يبحثان عن شيء للاحتفال بحبهما.</span>
          </p>
          <h3>
            <a id="_c2u7k6pjbg1e"></a><strong><span>مما تتكون خواتم التوينز؟</span></strong>
          </h3>
          <p>
            <span>تضم مجموعة لازوردي أطقم توينز مكونة من دبلة توينز ألماس و</span><a href="https://www.lazurde.com/ar-sa/love-engagement/eternity-rings" style="text-decoration:none"><u><span style="color:#1155cc">خاتم</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/eternity-rings" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/eternity-rings" style="text-decoration:none"><u><span style="color:#1155cc">إتيرنيتي</span></u></a><span> أو خاتم ستيتمنت مرصع بالألماس.</span>
          </p>
          <h3>
            <a id="_3npyxjuumoi6"></a><strong><span>هل يمكن أن أرتدي كل خاتم على حدة؟</span></strong>
          </h3>
          <p>
            <span>بالطبع، يمكنكِ ارتداء كل خاتم منفردًا.</span>
          </p>
    
              `,
              },
            },
          ],
          schema: [
            {
              q: `ما أهمية الخواتم التوينز؟`,
              a: `يشكل التوينز اختيارًا مثاليًا للشريكين اللذين يبحثان عن شيء للاحتفال بحبهما.`,
            },
            {
              q: `مما يتكون التوينز؟`,
              a: `تضم مجموعة لازوردي أطقم توينز من دبلة وخاتم إتيرنيتي أو خاتم ستيتمنت مرصع بالألماس.`,
            },
            {
              q: `هل يمكن ان ارتدي كل خاتم على حدا؟`,
              a: `بالطبع، يمكنك ارتداء كل خاتم منفردا  حيث يأتوا بتصميم رائع  `,
            },
          ],
        },
        "solitaire-rings": {
          seo: {
            title: `تسوق خواتم سوليتير | خواتم سوليتير للخطوبة في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم خطوبة سوليتير أونلاين في مصر، بتصميمات فاخرة. تسوقي خواتم الخطوبة بماسة واحدة مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.solitaireRings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              type: ["solitaireAr"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>تألقي بأبهى صورة مع خواتم سوليتير لازوردي</h2>
              استمتعي ببريق وأناقة خواتم السوليتير الخلابة التي تضيف لمسة ساحرة إلى مختلف إطلالاتكِ لتشعري بالثقة والتألق. إن تصميم الخواتم السوليتير يركز بشكلٍ كبير على الفص نفسه الموضوع في وسط الخاتم والذي يلفت بجماله جميع الأنظار. تُتيح الخواتم السوليتير لكِ التعبير عن ذوقكِ الفريد واختيار القَصّة التي تناسبكِ بشكلٍ مثالي. وسواء كنتي من محبي التصميم الدائري الكلاسيكي، أو التصميم الذي يتميز بزواياه المرصعة وجاذبيته المذهلة، ستجدين لدينا مجموعة واسعة من الخواتم التي تلبي جميع تفضيلاتكِ.

              
            `,
              },
              content: {
                value: `
              <h2>خواتم سوليتير للخطوبة</h2>
              تعتبر خواتم الخطوبة السوليتير رمزًا للحب والالتزام، وتعبّر عن الارتباط العاطفي بين شخصين والتزامهما بالبقاء معًا في رحلة الحياة. إنها الاختيار المثالي لطلب الزواج، حيث تجمع مفهوم البساطة والأناقة والجمال معًا في قطعة واحدة. تشكل هذه الخواتم بداية رائعة للحياة المشتركة وتجسد الحب الحقيقي والتواصل العميق. اختاري خاتم الخطوبة السوليتير الذي يجسد قصة حبكِ، لذا، فهو يعتبر الخطوة الأولى نحو ذكريات ثمينة لا تُقدر بثمن.


              <h2>عززي أناقتكِ مع مجوهرات سوليتير لازوردي في مصر</h2>

              <p>
				     <span>أضيفي لمسة من الأناقة إلى مظهركِ اليومي مع مجوهرات السوليتير من لازوردي والتي تحظى بشعبية كبيرة في المملكة. تحتوي مجموعتنا على تشكيلة متنوعة من تصاميم السوليتير التي تعزز أي إطلالة، إن مجوهرات السوليتير ليست مخصصة فقط للخطوبة وعروض الزواج، بل تطورت وتجاوزت الارتباط التقليدي بالالتزام، وأصبحت خيارًا متعدد الاستخدامات وعصريًا للارتداء اليومي. اغمري نفسكِ بمظهر مفعم بالبساطة المترفة مع مجوهرات السوليتير واعتبريها بمثابة تعبيرًا فعليًا عن ذوقكِ الراقي. تألقي بإطلالة ساحرة لا مثيل لها مع خواتم السوليتر من لازوردي والتي تناسب مختلف المناسبات، فعندما يتعلق الأمر بالمجوهرات، فإن خاتم السوليتير يعتبر الخيار الأمثل دائمًا، فهو يجسد قطعة فريدة من نوعها تتميز ببساطتها وجمالها الخالد. وسواء كنتِ ترتدي الخاتم في مناسبة خاصة مثل حفلات الزفاف أو حفلات الذكرى السنوية، أو لإضافة لمسة من الأناقة إلى إطلالتكِ اليومية. دعي بريق </span><a href="https://www.lazurde.com/ar-sa/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">السوليتير</span></u></a><span> يتألق بسطوع استثنائي كتعبير عن شخصيتكِ المميزة.</span>
			        </p>

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>
				<a id="_u9w2lbhh6dwo"></a><strong><span>ما الذي يجعل الخواتم السوليتير مميزة؟</span></strong>
			</h3>
			<p>
				<span>تحظى الخواتم السوليتير بمكانة خاصة لإحتوائها على فص ألماس فائق اللمعان موضوع في منتصف الخاتم.</span>
			</p>
			<h3>
				<a id="_r0si9zj0svgn"></a><strong><span>كيف يمكن الاعتناء بالخاتم السوليتير؟</span></strong>
			</h3>
			<p>
				<span>يمكنكِ ببساطة مسح الخاتم بقطعة قماش مبللة لإزالة الأوساخ.</span>
			</p>
			<h3>
				<a id="_2sbdml1tg7oh"></a><strong><span>ما شكل الخاتم السوليتير؟</span></strong>
			</h3>
			<p>
				<span>إن أكثر أشكال خواتم السوليتير شيوعًا هي الخواتم المزينة بفص ألماس دائري، إلا أنه يمكن الحصول على خاتم بفص ألماس شكل برنسيس أو أي تصميم آخر.</span>
			</p>
			<p>
				<strong><span>كم يبلغ سعر خاتم سوليتير؟</span></strong>
			</p>
			<p>
				<span>يختلف سعر خاتم السوليتير بناءً على عدة عوامل مثل وزن الألماس ودرجة نقاءه ولونه، بالإضافة إلى نوع المعدن (مثل </span><a href="https://www.lazurde.com/ar-sa/love-engagement/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأبيض</span></u></a><span><span></span>، </span><a href="https://www.lazurde.com/ar-sa/love-engagement/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc"><span dir="rtl"></span></u>الذهب</span></a><a href="https://www.lazurde.com/ar-sa/love-engagement/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأصفر</span></u></a><span>، البلاتين) وعياره، وتبدأ أسعار الخواتم من بضع مئات من الدولارات للألماس بحجم أصغر وجودة أقل، ويمكن أن تصل إلى عشرات الآلاف أو حتى مئات الآلاف من الدولارات للخواتم ذات الألماس الكبير الحجم والعالي الجودة.</span>
			</p>
			<p>
				<strong><span>ما هو الفرق بين الالماس والسوليتير؟</span></strong>
			</p>
			<p>
				<span>الألماس هو حجر كريم طبيعي يتكون من عنصر الكربون تحت ضغط عالٍ وحرارة شديدة في باطن الأرض، ويتميز بصلابته الفائقة وبريقه اللامع. يُعد الألماس من أكثر الأحجار الكريمة قيمة وجاذبية في مجال صناعة المجوهرات، ويُستخدم في تزيين </span><a href="https://www.lazurde.com/ar-sa/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">الخواتم</span></u></a><span><span></span>، </span><a href="https://www.lazurde.com/ar-sa/diamond/necklaces-pendants" style="text-decoration:none"><u><span style="color:#1155cc"><span dir="rtl"></span></u>القلائد</span></a><span><span></span>، </span><a href="https://www.lazurde.com/ar-sa/diamond/earrings" style="text-decoration:none"><u><span style="color:#1155cc"><span dir="rtl"></span></u>الأقراط</span></a><a href="https://www.lazurde.com/ar-sa/diamond/earrings" style="text-decoration:none"><u><span style="color:#1155cc">،</span></u></a><span> وغيرها من قطع المجوهرات.</span>
			</p>
			<p>
				<span>أما "السوليتير" فهو مصطلح يستخدم لوصف نوع معين من تصميم المجوهرات، وبشكل أكثر تحديدًا، الخواتم. يتميز خاتم السوليتير بأنه يحتوي على حجر كريم واحد، وغالبًا ما يكون هذا الحجر هو حجر ألماس. وإذا كنتِ تبحثين عن </span>خواتم ألماس سوليتير ، تقدم لكِ لازوردي مصر أفضل مجوهرات السوليتير التي ستضيف لمسة ساحرة لمظهركِ. 
			</p>
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `ما الذي يجعل الخواتم السوليتير مميزة؟`,
              a: `تحظى الخواتم السوليتير بمكانة خاصة لإحتوائها على فص ألماس لامع في مركز الحلقة المعدنية.`,
            },
            {
              q: `كيف يمكن الاعتناء بالخاتم السوليتير؟`,
              a: `يمكنك ببساطة، مسح الخاتم بقطعة قماش مبللة لإزالة الأوساخ أو البقع.`,
            },
            {
              q: `ما شكل الخاتم السوليتير؟`,
              a: `أشيع أشكال الخواتم السوليتير هو الذي يتزين بألماس مقطوع بقصة البريليانت، إلا أنه يمكن الحصول على خاتم بفص مقطوع بقصة البرنسيس أو أي قصة أخرى مناسبة.`,
            },
          ],
        },
        "eternity-rings": {
          seo: {
            title: `تسوق خواتم للابد | خواتم خطوبة للابد في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم خطوبة لا نهاية أونلاين في مصر، بتصميمات فاخرة. تسوقي خواتم الخطوبة الأبدية مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.eternityRings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              type: ["eternityAr"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>خواتم اتيرينتي من الألماس لتألق لا حدود له</h2>

              <p>
			      	<span>أصبح للأناقة والفخامة عنوانًا جديدًا مع خواتم و محابس اتيرنيتي </span><a href="https://www.lazurde.com/ar-eg/diamond-jewelry" style="text-decoration:none"><u><span>الألماس</span></u></a><span> من لازوردي. عندما نلقي نظرة على خاتم الإتيرنيتي، نرى دائرة لامتناهية ترمز إلى الروابط القوية والحب الأبدي. ترمز إلى استمرارية العلاقة والتزام الحب الذي لا ينتهي. وتعكس الألماسات اللامعة في الدائرة الجمال والتألق وتضيف لمسة من الرقي والفخامة إلى الخاتم. وقد تم اختيار كل ألماسة بعناية فائقة لضمان جودته ولمعانه الاستثنائي من جميع الزوايا. ببساطة، تعتبر خواتم الإتيرنيتي من لازوردي شاهدًا حقيقيًا على حبكما.</span>
		        	</p>
              `,
              },
              content: {
                value: `
              <h2>خواتم اتيرينتي ألماس لذكرى خاصة يوم زفافك</h2>

              <p>
				     <span>احتفلي بقصة حبكما الأبدية والروابط التي تجمع بينكما مع دبل الاتيرينتي الألماس من لازوردي. دبل مميزة صممت لتكون جزءًا من يوم زفافك الخاص مرصعة بألماسات لامعة لتمنحك طلة مثالية لا تنسى. تتوفر خواتم الإتيرنيتي بمختلف التصاميم والأشكال وخيارات الألماسات، مما يتيح لك اختيار الخاتم الذي يتناسب مع ذوقك ويعكس شخصيتك. يمكنك اختيار </span><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">الذهب الأبيض </span></u></a><span>الكلاسيكي أو </span><a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">الذهب الأصفر</span></u></a><span> الدافئ أو </span><a href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">الذهب الوردي</span></u></a><span> الرقيق، حسب تفضيلاتك الشخصية.</span>
			        </p>

              <h2>تسوقي خواتم اتيرنيتي المميزة للنساء الآن في مصر</h2>

              تشكيلة كبيرة من الخواتم الاتيرنيتي للنساء. فهي ليست مجرد قطعة مجوهرات، بل هي رمز للحب الدائم والوفاء، تحمل في طياتها الروابط القوية والعهود التي تستمر إلى الأبد. استمتعي بتنوع التصاميم والجمال اللافت في مجموعتنا، واختاري الخاتم الذي يعكس أسلوبك ويبرز جمال يومك الخاص من بين التصاميم الكلاسيكية أو التصاميم العصرية الانيقة. 

              <h2>خواتم اتيرنيتي لحب أبدي لا يضاهى</h2>
              
              إن الخواتم الإتيرنيتي هي هدية تحمل العاطفة والرومانسية والتعبير عن الحب الدائم. اختيارها كهدية تعكس احترامك وتقديرك للعلاقة القوية التي تجمعك بالآخر، وستبقى تذكيرًا دائمًا بالروابط العميقة والحب اللامتناهي. سواء كنت ترغب في إسعاد شخص عزيز عليك أو التعبير عن حبك، فلا شيء يضاهي خاتم الإتيرنيتي الكلاسيكي. فإنه الاختيار الأمثل اكتشفي مجموعة الخواتم الإتيرنيتي الألماس من لازوردي التي تجمع بين الجمال والأناقة والفخامة بتصاميمها الفريدة والمتنوعة التي تناسب جميع الأذواق والمناسبات. 

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>ما أهمية الخاتم الإتيرنيتي؟</h3>

             تعتبر خواتم الإتيرنيتي رمزًا جميلًا للحب الأبدي وتكون اختيارًا مثاليًا لمختلف المناسبات. سواء كانت طلبًا للزواج، خطوبة، ذكرى زواج أو أي لحظة خاصة أخرى، حيث تحمل خواتم الإتيرنيتي معنى هام وتعبر عن وعد صادق.

              <h3>هل يمكن ارتداء الخاتم الاتيرنيتي يوميًا؟</h3>
              نعم، بكل تأكيد.
              
              <h3>هل يمكن تنسيق خاتم اترنتي مع خاتم آخر؟</h3>
              بالطبع يمكنك تنسيقه مع خواتم آخرى بسبب تصميم البسيط و الراقي.
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `ما أهمية الخاتم الإتيرنيتي؟`,
              a: `تعتبر خواتم الإتيرنيتي رمزًا جميلًا للحب الأبدي وتكون اختيارًا مثاليًا لمختلف المناسبات. سواء كانت طلبًا للزواج، خطوبة، ذكرى سنوية أو أي لحظة خاصة أخرى، حيث تحمل خواتم الإتيرنيتي معنى هام وتعبر عن وعد صادق.`,
            },
            {
              q: `هل يمكن ارتداء الخاتم الاتيرنيتي يوميًا؟`,
              a: `نعم، بكل تأكيد.`,
            },
            {
              q: `هل يمكن تنسيق خاتم اترنتي مع خاتم آخر؟`,
              a: `بالطبع يمكنك تنسيقه مع خواتم آخرى بسبب تصميم البسيط و الراقي.`,
            },
          ],
        },
        "gold-sets": {
          seo: {
            title: `طقم ذهب للعروس | أطقم ذهب للزواج في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أطقم الذهب للعروس أونلاين في مصر، بتصميمات فاخرة. تسوقي طقم العروس الذهبي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.goldSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["jewelrySets"],
              collection: ["lazurdeGoldAr"],
            }),
          },
        },
        "diamond-sets": {
          seo: {
            title: `تسوق طقم زواج الماس | أطقم عروس في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أطقم الالماس للعروس أونلاين في مصر، بتصميمات فاخرة. تسوقي طقم العروس بالماس مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.diamondSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["jewelrySets"],
              collection: ["lazurdeDiamondsAr"],
            }),
          },
        },
        lazurde: {
          seo: {
            title: `تسوق مجوهرات لازوردي للزواج في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات العروس والخطوبة لدى لازوردي أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                brand: ["lazurdeAr"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        instyle: {
          seo: {
            title: ``,
            description: ``,
          },
          banner: bannersLoveEngagementAr?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                brand: ["instyleAr"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "miss-l": {
          seo: {
            title: `تسوقي مجوهرات الزفاف مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات "مس أل" للزفاف والخطوبة أونلاين في مصر، ووالتي تقدم تصاميم رائعة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
          },
          banner: bannersLoveEngagementAr?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                brand: ["misslAr"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "best-sellers": {
          seo: {
            title:
              "تسوق مجوهرات خطوبة الأكثر مبيعاً | Page <number> | لازوردي مصر",
            description:
              "اكتشفي مجموعتنا من مجوهرات الخطوبة الأكثر مبيعًا أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersLoveEngagementAr?.bestSeller,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({}, [
              {
                type: ["weddingBandAr", "twinsAr", "solitaireAr", "eternityAr"],
              },
              {
                category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
              },
            ]),
          },
        },
        "new-in": {
          seo: {
            title:
              "تسوق أحدث مجوهرات الخطوبة للنساء | Page <number> | لازوردي مصر",
            description:
              "اكتشفي مجموعتنا من أحدث مجوهرات الخطوبة والجديدة أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersLoveEngagementAr?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                newIn: ["newIn"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "special-price": {
          seo: {
            title:
              "أفضل أسعار مجوهرات الخطوبة للنساء | Page <number> | لازوردي مصر",
            description:
              "اكتشفي مجموعتنا من مجوهرات الخطوبة أونلاين في مصر، بقيمة ممتازة وأفضل الأسعار. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersLoveEngagementAr?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({}, [
              {
                type: ["weddingBandAr", "twinsAr", "solitaireAr", "eternityAr"],
              },
              {
                category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
              },
            ]),
          },
        },
        "yellow-gold": {
          seo: {
            title: `تسوق مجوهرات خطوبة ذهب أصفر في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة من الذهب الأصفر أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: ["yellowGoldAr"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "white-gold": {
          seo: {
            title: `تسوق مجوهرات خطوبة ذهب أبيض في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة من الذهب الأبيض أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: ["whiteGoldAr"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "rose-gold": {
          seo: {
            title: `تسوق مجوهرات خطوبة ذهب وردي في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة من الذهب الوردي أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: ["roseGoldAr"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "multicolor-gold": {
          seo: {
            title: ``,
            description: ``,
          },
          banner: bannersLoveEngagementAr?.multicolorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: [
                  "yellowWhiteGoldAr",
                  "yellowWhiteRoseGoldAr",
                  "whiteRoseGoldAr",
                  "yellowRoseGoldAr",
                ],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        diamonds: {
          seo: {
            title: `تسوق مجوهرات خطوبة الماس في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة المرصعة بالألماس أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.diamond,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                diamonds: ["diamondsAr"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "colored-stones": {
          seo: {
            title: `تسوق مجوهرات خطوبة حجر ملون في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة المرصعة بأحجار الألوان أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                stone: ["coloredStonesAr"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        pearls: {
          seo: {
            title: `تسوق مجوهرات الخطوبة اللؤلؤ في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة المرصعة باللؤلؤ أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                stone: ["pearlsAr"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "under-2000": {
          seo: {
            title: `مجوهرات زواج وخطوبة بأقل من 2,000 جنيه مصري في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات العروس والخطوبة بأسعار أقل من 2000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["under2000"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "2000-4000": {
          seo: {
            title: `مجوهرات زواج وخطوبة بأقل من 4,000 جنيه مصري في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات العروس والخطوبة بأسعار أقل من 4000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["2000to4000"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "4000-8000": {
          seo: {
            title: `مجوهرات زواج وخطوبة بأقل من 8,000 جنيه مصري في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات العروس والخطوبة بأسعار أقل من 8000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.under8000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["4000to8000"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "8000-10000": {
          seo: {
            title: `مجوهرات زواج وخطوبة بأقل من 10,000 جنيه مصري في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات العروس والخطوبة بأسعار أقل من 10,000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.under10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["8000to10000"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "10000-above": {
          seo: {
            title: `مجوهرات زواج وخطوبة بأكثر 10,000 جنيه مصري في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات العروس والخطوبة بأسعار تبدأ من 10,000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagementAr?.above10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["10000above"],
              },
              [
                {
                  type: [
                    "weddingBandAr",
                    "twinsAr",
                    "solitaireAr",
                    "eternityAr",
                  ],
                },
                {
                  category: [(categoryIdByRegion as any)?.["eg"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
      },
    },
    "gift-occasions": {
      seo: {
        title: `تسوقي هدايا مجوهرات نسائية | هدايا لها في مصر | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من هدايا المجوهرات النسائية في مصر، بما في ذلك الخواتم، الأساور، العقود وأكثر. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: null,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `تسوقي هدايا عقود و قلائد نسائية في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا القلادات والعقود أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.necklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["necklace"],
            }),
          },
        },
        rings: {
          seo: {
            title: `تسوقي هدايا خواتم نسائية في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا الخواتم أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.Rings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["rings"],
            }),
          },
        },
        "bracelets-anklets": {
          seo: {
            title: `تسوقي هدايا أساور نسائية في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا الأساور والخلاخيل أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.BraceletsAnklets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["bracelets"],
            }),
          },
        },
        earrings: {
          seo: {
            title: `تسوقي هدايا أقراط نسائية في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا الأقراط أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.Earrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["earrings"],
            }),
          },
        },
        sets: {
          seo: {
            title: `تسوقي أطقم هدايا مجوهرات نسائية في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أطقم هدايا مجوهرات أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.Sets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["sets"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `تسوق جميع المنتجات - هدايا مجوهرات | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعة متفردة من هدايا المجوهرات أونلاين في لازوردي مصر. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.ShopAll,
          bannerWithcards: null,
          plpComponent: {},
        },
        lazurde: {
          seo: {
            title:
              "تسوقي الهدية المثالية لأي مناسبة من مجوهرات لازوردي | Page <number> | لازوردي مصر",
            description: `اكتشفي مجموعتنا من هدايا لازوردي أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["lazurdeAr"] }),
          },
        },
        instyle: {
          seo: {
            title: `Buy Miss L' Jewelry in Saudi Arabia | Page <number> | L'azurde KSA`,
            description: `Explore our collection of Miss L' jewelry online in KSA, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: bannersGiftOccasionsAr?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["instyleAr"] }),
          },
        },
        "miss-l": {
          seo: {
            title: `تسوقي الهدية المثالية لأي مناسبة من مجوهرات مس أل | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا مس أل لازوردي أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["misslAr"] }),
          },
        },
        "coins-bars": {
          seo: {
            title: ``,
            description: ``,
          },
          banner: bannersGiftOccasionsAr?.CoinsBars,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["gold"],
              type: ["goldBarAr", "goldCoinAr"],
            }),
          },
        },
        "best-sellers": {
          seo: {
            title: `تسوقي أفضل المجموعة الأكثر مبيعاً لهدايا المجوهرات المثالية لكل مناسبة | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات الأكثر مبيعًا أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.BestSellers,
          bannerWithcards: null,
          plpComponent: {},
        },
        "new-in": {
          seo: {
            title: `تسوقي أحد هدايا المجوهرات النسائية | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أحدث هدايا المجوهرات أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.NewIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              newIn: ["newIn"],
            }),
          },
        },
        "special-price": {
          seo: {
            title: `أفضل أسعار هدايا المجوهرات النسائية | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات أونلاين في مصر، بقيمة رائعة وأفضل الأسعار. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.SpecialPrice,
          bannerWithcards: null,
          plpComponent: {},
        },
        "yellow-gold": {
          seo: {
            title: `تسوقي هدايا مجوهرات ذهب أصفر في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات من الذهب الأصفر أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.YellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["yellowGoldAr"] }),
          },
        },
        "white-gold": {
          seo: {
            title: `تسوقي هدايا مجوهرات ذهب أبيض في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات من الذهب الأبيض أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.WhiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["whiteGoldAr"] }),
          },
        },
        "rose-gold": {
          seo: {
            title: `تسوقي هدايا مجوهرات ذهب وردي في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات من الذهب الوردي أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.RoseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["roseGoldAr"] }),
          },
        },
        "multicolor-gold": {
          seo: {
            title: ``,
            description: ``,
          },
          banner: bannersGiftOccasionsAr?.MultiColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              metalColor: [
                "yellowWhiteGoldAr",
                "yellowWhiteRoseGoldAr",
                "whiteRoseGoldAr",
                "yellowRoseGoldAr",
              ],
            }),
          },
        },
        diamonds: {
          seo: {
            title: `تسوقي هدايا مجوهرات الماس في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات المرصعة بالألماس أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.Diamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              diamonds: ["diamondsAr"],
            }),
          },
        },
        "colored-stones": {
          seo: {
            title: `تسوقي هدايا مجوهرات أحجار ملونة في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات المرصعة بأحجار ملونة أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.ColoredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              stone: ["coloredStonesAr"],
            }),
          },
        },
        pearls: {
          seo: {
            title: `تسوقي هدايا مجوهرات لؤلؤ في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات المزينة باللؤلؤ أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.Pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              stone: ["pearlsAr"],
            }),
          },
        },
        "under-2000": {
          seo: {
            title: `هدايا المجوهرات بأقل من 2,000 جنيه مصري | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات بأسعار أقل من 2000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.Under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              price: ["under2000"],
            }),
          },
        },
        "2000-4000": {
          seo: {
            title: `هدايا المجوهرات بأقل من 4,000 جنيه مصري | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات بأسعار أقل من 4000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              price: ["2000to4000"],
            }),
          },
        },
        "4000-8000": {
          seo: {
            title: `هدايا المجوهرات بأقل من 8,000 جنيه مصري | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات بأسعار أقل من 8000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.under8000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              price: ["4000to8000"],
            }),
          },
        },
        "8000-10000": {
          seo: {
            title: `هدايا المجوهرات بأقل من 10,000 جنيه مصري | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات بأسعار أقل من 10,000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.under10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              price: ["8000to10000"],
            }),
          },
        },
        "10000-above": {
          seo: {
            title: `هدايا المجوهرات بأكثر من 10,000 جنيه مصري | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات بأسعار تبدأ من 10,000 جنيه أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftOccasionsAr?.Above10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              price: ["10000above"],
            }),
          },
        },
      },
    },
    "gifts-occasions": {
      banner: null,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        lazurde: {
          seo: {
            title:
              "تسوقي الهدية المثالية لأي مناسبة من مجوهرات لازوردي | Page <number> | لازوردي مصر",
            description: `اكتشفي مجموعتنا من هدايا لازوردي أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: giftsOccasionsAr?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["lazurdeAr"] }),
          },
        },
        instyle: {
          seo: {
            title: ``,
            description: ``,
          },
          banner: giftsOccasionsAr?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["instyleAr"] }),
          },
        },
        "miss-l": {
          seo: {
            title: `تسوقي مجوهرات مس أل كهدية مثالية لكل المناسبات | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من هدايا "مس أل" أونلاين في مصر، ووالتي تقدم تصاميم رائعة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
          },
          banner: giftsOccasionsAr?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["misslAr"] }),
          },
        },
      },
    },
    jewelry: {
      banner: null,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `تسوقي عقود وقلائد في مصر | تصميمات قلائد | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من القلائد والعقود أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelrynecklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["necklace"],
            }),
          },
        },
        rings: {
          seo: {
            title: `تسوقي خواتم نسائية | تصميمات خاتم في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من الخواتم والخواتم الزفاف أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryRings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["rings"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>خواتم آسرة لكل امرأة !</h2>

              لدينا في لازوردي، دائمًا ما يلتقي الرقي بالإبداع. كل خاتم في مجموعتنا هو تجسيد لمعاني الجمال الخالد والحرفية الاستثنائية وهو ما يجعلها كنوزًا غالية وخالدة لا تتأثر بتغيرات الزمان. سواء كنتِ تبحثين عن خواتم نسائية تناسب إطلالاتك اليومية أو تصميمات خواتم ملكية بارزة أو خاتم ذهب عصري ملفت أو أخر بتصميم انفنيتي يرمز إلى حبك الأبدي، فهذه دعوة منا لاكتشاف مجموعتنا واختيار الخاتم المثالي الذي ينسجم مع ذوقك وروحك المميزة. لقصص الحب الأبدية التي لا تتأثر بمرور الزمان، نقدم لكِ مجموعة مميزة من الدبل وخواتم الزفاف، التي تتزين بالألماس والسولتير والخواتم الكلاسيكية التي تأسر القلوب برقتها. إنها، بالتأكيد، هي كل ما تريدينه لتحتفلي بمناسباتك الرومانسية الخاصة.
            
              `,
              },
              content: {
                value: `
               
             
             <h2>اختاري تصميمات خواتم بنات وخواتم نسائية تبرز جمالك</h2>
             نقدم إليكِ أيضًا مجموعة من الخواتم الملكية التي تبرز جمالك الملكي الخاص بسحرها الفخم وأجوائها الآسرة. لأنك تستحقين الأفضل دائمًا، جاءت مجموعة خواتم لازوردي لتزيني أصابعك بتصاميم ملكية ساحرة تبرز جمالك وتلفت الانتباه. وللمسة من الأناقة الجريئة، ندعوك لاكتشاف مجموعتنا المميزة من خواتم الخنصر المصممة لتضفي إلى مظهرك لمسة من الرقي والذوق الرفيع. تضم مجموعتنا تشكيلة لا حصر لها من الخواتم الاستيتمنت والخواتم ذات الرأس المزدوجة وهذا من معرفتنا العميقة بحبك للاختيارات المتنوعة. تصاميم ساحرة بكل بساطة! تألقي على الدوام بكل ثقة وجرأة مع هذه المجموعة الرائعة من الخواتم التي تحتفي بفرادتك واستثنائيتك.


            <h2>مجموعة خواتم لازوردي المميزة في مصر</h2>
          
            <p><span
            style="color:#374151;">ألفتي أنظار الجميع وتألقي مع مجموعة خواتم لازوردي الرائعة. باهتمام فائق للتفاصيل،
            نقدم لكِ مجموعة من الخواتم بتصاميم جريئة و</span><a
            href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">أحجار</span></u></a><a
            href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">&nbsp;</span></u></a><a
            href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">كريمة</span></u></a><span style="color:#374151;">&nbsp;ملفتة تتألق ببريق خاص.
            يمكنك الاختيار من بين الخواتم المصاغة من&nbsp;</span><a
            href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">الذهب</span></u></a><a
            href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">&nbsp;</span></u></a><a
            href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">الأصفر</span></u></a><span style="color:#374151;">&nbsp;أو&nbsp;</span><a
            href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">الذهب</span></u></a><a
            href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">&nbsp;</span></u></a><a
            href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">الأبيض</span></u></a><span style="color:#374151;">&nbsp;الراقي أو الخواتم
            الأنيقة المصاغة من&nbsp;</span><a href="https://www.lazurde.com/ar-eg/jewelry/rose-gold"
            style="text-decoration:none;"><u><span style="color:#1155cc;">الذهب</span></u></a><a
            href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">&nbsp;</span></u></a><a
            href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">الوردي</span></u></a><span style="color:#374151;">. نهتم في لازوردي بابتكار
            تصاميم تناسب جميع الأذواق. وسواء كنتِ من محبي&nbsp;</span><a
            href="https://www.lazurde.com/ar-eg/diamond-jewelry" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">الألماس</span></u></a><span style="color:#374151;">&nbsp;أو&nbsp;</span><a
            href="https://www.lazurde.com/ar-eg/gold/pearls" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">اللؤلؤ</span></u></a><span style="color:#374151;">&nbsp;أو الأحجار الملونة
            التي تترك دائمًا انطباعًا مميزًا في النفوس، ستجدي بالتأكيد ما تريدين! اكتشفي قوة التعبير عن الذات من خلال
            مجموعتنا من الخواتم التي سترتقي بأسلوبك ومظهرك إلى أفاق جديدة.</span></p>

            <h2>الأسئلة الشائعة:</h2>
            
            <h3>كيف يمكن قياس الخاتم في المنزل؟</h3>
            استخدمي خيط ولفيه حول أصبعك. يمكنك إما تحديد نقطة بالقلم أو قطع الخيط من حيث يلتقي طرفاه، قومي بقياس الخيط بالمسطرة لتعرفي قطر الخاتم.

             <h3>على أي إصبع أرتدي الخاتم؟</h3>

             <p><span
            style="color:#374151;">عادة ما يتم ارتداء&nbsp;</span><a
            href="https://www.lazurde.com/ar-eg/love-engagement" style="text-decoration:none;">&nbsp;</a><a
            href="https://www.lazurde.com/ar-eg/love-engagement" style="text-decoration:none;">دبل او خ<u><span
                    style="color:#1155cc;">واتم</span></u></a><a href="https://www.lazurde.com/ar-eg/love-engagement"
            style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a
            href="https://www.lazurde.com/ar-eg/love-engagement" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">الخطوبة</span></u></a><a href="https://www.lazurde.com/ar-eg/love-engagement"
            style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a
            href="https://www.lazurde.com/ar-eg/love-engagement" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">أو</span></u></a><a href="https://www.lazurde.com/ar-eg/love-engagement"
            style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a
            href="https://www.lazurde.com/ar-eg/love-engagement" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">الزواج</span></u></a><span style="color:#374151;">&nbsp;إما على إصبع الخاتم
            الأيسر أو الأيمن حسب التقاليد والثقافة. بالنسبة لباقي أنواع الخواتم، فهذا يعتمد على أسلوبك أنتِ. يمكنك
            اختيار ارتدائه بأي إصبع تريدينه.</span></p>

            <h3>هل يمكنني ارتداء خاتم في إصبعي الأوسط؟</h3>
            نعم! حسب تفضيلك الشخصي.
            
            <h3>ما الأشكال المختلفة للخواتم؟</h3>

            <p><span
                style="color:#374151;">يمكنك الاختيار من بين الخواتم الاستيتمنت أو الخواتم ذات الرأس المزدوجة أو</span><span
                style="color:#374151;">&nbsp;</span><a href="https://www.lazurde.com/ar-eg/diamond/rings"
                style="text-decoration:none;">الخواتم</a><a href="https://www.lazurde.com/ar-eg/diamond/rings"
                style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a
                href="https://www.lazurde.com/ar-eg/diamond/rings" style="text-decoration:none;"><u><span
                        style="color:#1155cc;">الألماس</span></u></a><span style="color:#374151;">&nbsp;أو&nbsp;</span><a
                href="https://www.lazurde.com/ar-eg/love-engagement/eternity-rings" style="text-decoration:none;"><u><span
                        style="color:#1155cc;">المحبس</span></u></a><span style="color:#374151;">&nbsp;أو خواتم الخنصر أو
                الخواتم الملكية أو الدبل. ثمة الكثير والكثير.</span></p>

                <h3>كيف اعرف كم مقاس الخاتم؟</h3>
                يمكنك قياس مقاس الخاتم باستخدام شريط مرن أو شريط من الورق، ومن ثم قارن القياس بجدول مقاسات الخواتم لتحديد المقاس المناسب. أو يمكنك زيارة محل المجوهرات للحصول على مساعدة دقيقة.
              `,
              },
            },
          ],
          schema: [
            {
              q: `كيف يمكن قياس الخاتم في المنزل؟`,
              a: `استخدمي خيط ولفيه حول أصبعك. يمكنك إما تحديد نقطة بالقلم أو قطع الخيط من حيث يلتقي طرفاه، قومي بقياس الخيط بالمسطرة لتعرفي قطر الخاتم.`,
            },
            {
              q: `على أي إصبع أرتدي الخاتم؟`,
              a: `عادة ما يتم ارتداء خاتم الخطوبة أو الزواج إما على إصبع الخاتم الأيسر أو الأيمن حسب التقاليد والثقافة. بالنسبة لباقي أنواع الخواتم، فهذا يعتمد على أسلوبك أنتِ.  يمكنك اختيار ارتدائه بأي إصبع تريدينه.`,
            },
            {
              q: `هل يمكنني ارتداء خاتم في إصبعي الأوسط؟`,
              a: `نعم! حسب تفضيلك الشخصي.`,
            },
            {
              q: `ما الأشكال المختلفة للخواتم؟`,
              a: `يمكنك الاختيار من بين الخواتم الاستيتمنت أو الخواتم ذات الرأس المزدوجة أو الخواتم الألماس أو الاترنيتي أو المحبس أو خواتم الخنصر أو الخواتم الملكية أو الدبل. ثمة الكثير والكثير.`,
            },
          ],
        },
        "bracelets-anklets": {
          seo: {
            title: `تسوقي أساور نسائية | أساور وخلاخيل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من الأساور والخلاخيل أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع، مع خيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryBraceletsAnklets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["bracelets"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>أساور بنات واساور نسائية فاخرة لجمال آسر وعابر للأزمان</h2>

              زيني معصمك بتصاميم رائعة تجسد كل معاني الأناقة والرقي. إليكِ مجموعة مميزة من الأساور بتصاميم خلابة تجسد معاني الأناقة الفاخرة التي لا تفنى مع الزمان؛ والتي تحمل معها خيارات متنوعة تناسب مختلف الأذواق. ابتداءً من الأساور الرقيقة ذات الحلقات المتصلة التي تفيض بالأنوثة الرقيقة إلى أساور نسائية جريئة او رقيقة التي تعكس تفرد شخصيتك. نقدم لكِ مجموعة من الأساور المصممة بدقة وصنعة متناهية لتبرز جمالك وتعزز أناقتك. يمكنك الاختيار ما بين أساور التنس المميزة التي تجسد الأناقة التي لا يخفت توهجها أو الأساور ذات الحلقات التي لا تفشل أبدًا في جذب أنظار الجميع ونثر سحرها الخاص. كل ما عليكِ هو اختيار تصميمك المفضل الذي يناسب إطلالاتك لتكتمل أناقتك بشكل مثالي

              `,
              },
              content: {
                value: `
                  
              <h2>استمتعي باساور و خلاخيل ذهب من لازوردي فى مصر!</h2>

               <p>افتني الجميع باختياراتك الاستثنائية وخصوصًا مع تألق <a href="https://www.lazurde.com/ar-eg/diamond-jewelry" style="text-decoration:none;"><u><span style="color:#1155cc;">الألماس</span></u></a> ونقاء <a href="https://www.lazurde.com/ar-eg/jewelry/pearls" style="text-decoration:none;"><u><span style="color:#1155cc;">اللؤلؤ</span></u></a> و<a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none;"><u><span style="color:#1155cc;">الأحجار</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none;"><u><span style="color:#1155cc;">الملونة</span></u></a> التي تزين بانسيابية متناهية قطع لازوردي وتمتزج في نسق بالغ الرشاقة مع<a href="https://www.lazurde.com/ar-eg/diamond/white-gold" style="text-decoration:none;">&nbsp;</a><a href="https://www.lazurde.com/ar-eg/diamond/white-gold" style="text-decoration:none;">الذهب</a><a href="https://www.lazurde.com/ar-eg/diamond/white-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/diamond/white-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">الأبيض</span></u></a> أو <a href="https://www.lazurde.com/ar-eg/gold/yellow-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">الذهب</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/yellow-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/yellow-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">الأصفر</span></u></a> أو <a href="https://www.lazurde.com/ar-eg/gold/rose-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">الذهب</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/rose-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/rose-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">الوردي</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/rose-gold" style="text-decoration:none;">.</a><span dir="rtl">&nbsp;كل أسورة في مجموعتنا هي كنز خالد ليأسر القلوب والألباب معًا ويترك معه أثرًا ساحرًا لا ينسى. سواء كنتِ ترغبين في&nbsp;</span>اسورة نسائية لترتديها مع أساور أخرى أو حتى أسورة واحدة جريئة لتزين معصمك بذاتها، تأكدي أن ما تريدين سيكون ضمن مجموعتنا التي توفر اختيارات لا حصر لها تبرز شخصيتك وشعورك بالأناقة.</p>


               <h2>لمسة من الأناقة والجاذبية على كاحليك: اكتشفي سحر الخلاخيل لمظهر رائع وجذاب بشكل لا يصدق</h2>
               !دعي كاحليك يتألقان مع مجموعتنا الرائعة من الخلاخيل! تصاميم رقيقة ومبهجة تبرز احساسا فريدًا بالأناقة الجذابة. سواء كنت من محبي الخلخال البسيط أو الخلاخيل ذات الخرزات التي تضيف نفحة بوهيمية جذابة إلى إطلالاتك، فهنا ستجدين ما تبحثين عنه ضمن مجموعة خلابة من التصاميم الساحرة. أطلقي العنان لروحك وعززي سحرك الأنثوي، واختاري الخلخال المثالي لكِ الآن

              
              <h2>الأسئلة الشائعة:</h2>
              
              <h3>هل هناك أنواع مختلفة من الأساور؟</h3>
              نعم، هناك أشكال وأنواع مختلفة للأساور ومنها على سبيل المثال أساور التنس والأساور ذات الخرزات وأساور تشارم وأساور سلسلة (الانسيالات) والأساور العريضة البانجل وغيرها الكثير.
              
              <h3>كيف ارتدي الأسورة؟</h3>
              يمكنك ارتداء الأسورة وحدها أو تنسيقها مع أساور أخرى مناسبة لمظهر مميز واستثنائي.

              <h3>كيف اختار الأسورة المناسبة؟</h3>
              قد يكون من الصعب اختيار أسورة واحدة من مجموعتنا، ولكن يرتبط اختيارك بعدة عوامل منها المناسبة التي سترتدي فيها الأسورة وذوقك وشخصيتك وملابسك وشكل الحجر.
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل هناك أنواع مختلفة من الأساور؟ `,
              a: `نعم، هناك أشكال وأنواع مختلفة للأساور ومنها على سبيل المثال أساور التنس والأساور ذات الخرزات وأساور بتشارم وأساور سلسلة (الانسيالات) والأساور العريضة البانجل وغيرها الكثير.`,
            },
            {
              q: `كيف ارتدي الأسوارة؟`,
              a: `يمكنك ارتداء الأسورة وحدها أو تنسيقها مع أساور أخرى مناسبة لمظهر مميز واستثنائي.`,
            },
            {
              q: `كيف اختار الأسوارة المناسبة؟`,
              a: `قد يكون من الصعب اختيار أسورة واحدة من مجموعتنا، ولكن يرتبط اختيارك بعدة عوامل منها المناسبة التي سترتدي فيها الأسورة وذوقك وشخصيتك وملابسك وشكل الحجر.`,
            },
          ],
        },
        earrings: {
          seo: {
            title: `تسوقي أقراط نسائية | تصميمات الأقراط في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من الأقراط أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryEarrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["earrings"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>احظي بأروع الأقراط سواء كانت حلقان صغيرة أو الاقراط المتدلية أو الكليب أو حلقان الاذن الدائرية لتكون جزءًا أساسيًا من صندوق مجوهراتك</h2>
             
              <p><span style="color:#374151;">تشكيلة أقراط مميزة تساعدك على إبهار الجميع وإذهالهم! فهي تضم كل ما تحتاجه أي فتاة. بداية من الأقراط المصاغة&nbsp;</span><a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">بالذهب</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">الأصفر</span></u></a><span style="color:#374151;">&nbsp;</span><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold/jewelry/white-gold" style="text-decoration:none;">والأبيض</a><span style="color:#374151;">&nbsp;الراقي إلى&nbsp;</span><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold/jewelry/earrings" style="text-decoration:none;"><u><span style="color:#1155cc;">الأقراط</span></u></a><span style="color:#374151;">&nbsp;الراقية المصاغة من</span><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold/jewelry/rose-gold" style="text-decoration:none;">&nbsp;</a><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold/jewelry/rose-gold" style="text-decoration:none;">الذهب</a><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold/jewelry/rose-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold/jewelry/rose-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">الوردي</span></u></a><span style="color:#374151;">. وبالتأكيد، كلها مصاغة من الذهب عيارات 14 و 18 و21 قيراط.</span></p>

              `,
              },
              content: {
                value: `
              <h2>اختاري حلقان الاذن المناسبة لجمال اطلالتك</h2>

              <p><span style="color:#374151;">اختاري من بين حلق ذهب دائري ليضفي جمالًا على وجهك بأناقة، أو حلق متدلي والذي يتأرجح مع كل خطوة، أو الحلق النسائي الطويل المتدلي والذي يضيف سحرًا مضاعفًا لمظهرك عمومًا. وندعوكِ لاكتشاف الأناقة الخالدة للأقراط الصغيرة التي لا تتأثر بتغير الزمان وكذلك حلقان كبس عملية. تتنوع مجموعتنا لتلبي تفضيلاتكم المتنوعة والمختلفة، مما يضمن لكِ إيجاد زوج الأقراط المثالي الذي يتناسب مع أسلوبكِ وشخصيتكِ الفريدة. سواء كنتِ تفضلين&nbsp;</span><a href="https://www.lazurde.com/ar-eg/diamond-jewelry" style="text-decoration:none;"><u><span style="color:#1155cc;">الألماس</span></u></a><span style="color:#374151;">&nbsp;أو تفضلين الأشياء البسيطة مثل الذهب غير المشغول أو حتى إذا كنتِ من محبات القليل من الألوان وخصوصًا؛ فستجدي بالتأكيد ضمن مجموعة أقراط لازوردي ما تريدين. كما أنه لدينا مجموعة رائعة من الأقراط المزينة&nbsp;</span><a href="https://www.lazurde.com/ar-eg/jewelry/pearls" style="text-decoration:none;"><u><span style="color:#1155cc;">باللؤلؤ</span></u></a><span style="color:#374151;">&nbsp;التي تجمع بين الفخامة والعصرية في آن واحد.</span></p>
             
             <h2>أقراط نسائية مميزة من لازوردي... تسوقي حلق نسائي الآن فى مصر!</h2>
             نؤمن في لازوردي أن كل قطعة هي تعبير واضح عن شخصيتك وذوقك المتفرد. ومن هنا، نبتكر تصاميم جديدة ونصنعها بحرفية وصنعة متناهية لتعكس شغفنا الحقيقي بتقديم كل ما هو مميز وجديد لكِ. وعليه، نقدم مجموعة أقراط مميزة للنساء تؤكد معها معاني الأنوثة المفعمة بالأناقة والرقي وتخاطب القلوب بجمالها الآسر. ننصحك بشراء زواج الأقراط المناسب وكوني مجموعة مجوهرات رائعة لتضم كل الأشكال والأنواع حيث الأقراط الدائرية والأقراط المتدلية والأقراط الطويلة المتدلية والأقراط الصغيرة والأقراط الكليب وغير ذلك. اكتشفي مجموعتنا واستعدي لاحتضان سحر الإكسسوارات التي تعزّز جمالكِ الطبيعي.

             <h2>الأسئلة الشائعة:</h2>
             
             <h3>أي شكل من الأقراط تفضله الفتيات؟</h3>
            
             شكل الأقراط الذي تختارينه يعتمد حقًا على شخصيتك وتفضيلاتك، ولكن الأقراط الدائرية والأقراط الدبوسية الصغيرة هي القطع الأساسية التي يتعين على كل فتاة اقتنائها.
             
             <h3>ما هي الأقراط التي يمكن ارتداؤها يوميًا؟</h3>
             يمكنك الاختيار ما بين الأقراط الدائرية الكلاسيكية أو الأقراط الصغيرة الألماس أو الأقراط المتدلية البسيطة. تتضمن مجموعتنا تشكيلة متنوعة من الأقراط التي تناسب الإطلالات اليومية.

             <h3>كيف يمكنني اختيار حلق ذهب نسائي مناسب؟</h3>
             اختيار الأقراط المناسبة يعتمد بشكل أساسي على مظهرك والمناسبة والطلة التي تحاولين تكوينها.

              <h3>ما هو حجم الأقراط الذي يجب عليّ ارتداؤه؟</h3>
              أي حجم مريح لك عند ارتدائه هو الأمثل. الأمر يعتمد عليك كليًا وعلى تفضيلك الشخصي.
             
              `,
              },
            },
          ],
          schema: [
            {
              q: `أي شكل من الأقراط تفضله الفتيات؟`,
              a: `شكل الأقراط الذي تختارينه يعتمد حقًا على شخصيتك وتفضيلاتك، ولكن الأقراط الدائرية والأقراط الدبوسية الصغيرة هي القطع الأساسية التي يتعين على كل فتاة اقتنائها.`,
            },
            {
              q: `ما هي الأقراط التي يمكن ارتداؤها يوميًا؟`,
              a: `يمكنك الاختيار ما بين الأقراط الدائرية الكلاسيكية أو الأقراط الصغيرة الألماس أو الأقراط المتدلية البسيطة. تتضمن مجموعتنا تشكيلة متنوعة من الأقراط التي تناسب الإطلالات اليومية.`,
            },
            {
              q: `كيف يمكنني اختيار حلق ذهب نسائي مناسب؟`,
              a: `اختيار الأقراط المناسبة يعتمد بشكل أساسي على مظهرك والمناسبة والطلة التي تحاولين تكوينها.`,
            },
            {
              q: `ما هو حجم الأقراط الذي يجب عليّ ارتداؤه؟`,
              a: `أي حجم مريح لك عند ارتدائه هو الأمثل. الأمر يعتمد عليك كليًا وعلى تفضيلك الشخصي.`,
            },
          ],
        },
        sets: {
          seo: {
            title: `تسوقي أطقم مجوهرات نسائية في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من أطقم المجوهرات أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelrySets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["sets"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>أطقم مجوهرات لتتألقي في كل الأوقات</h2>

              <p>
			      	<span>اكتشفي عالم أطقم المجوهرات المميزة حيث يلتقي الجمال بالابتكار في انسيابية تخلق جمالًا ساحرًا يلفت كل الأنظار</span><span>. </span><span>أطقم مجوهرات تحتفي بمعاني التناغم والتناسق المتحقق بين قطعها التي تعزز في النهاية إطلالاتك اليومية وإطلالات السهرة في المناسبات الخاصة</span><span>. </span><span>سواء كنتِ تبحثين عن </span><a href="https://www.lazurde.com/ar-eg/jewelry/half-sets" style="text-decoration:none"><u><span style="line-height:108%; font-family:Arial; font-size:11pt; color:#1155cc">نصف طقم</span></u></a><span> أو طقم مجوهرات لعرسك أو طقم لؤلؤ مميز، فتأكدي أنك ستجدين ما تبحثين عنه بكل تأكيد</span><span>. </span><span>عبري عن تفردك وشخصيتك التي لا تتشابه مع أي شيء وأروي قصتك الخاصة مع طقم مجوهرات مميز يكون جزءًا من ذكريات تدوم مدى الحياة</span><span>.</span>
	        		</p>
            
              `,
              },
              content: {
                value: `
                
              <h2>تضم مجموعتنا تشكيلة من أطقم الزفاف التي تجسد روعة الارتباط الأبدي وتعكس فخامة وأناقة استثنائية</h2>

              <p>
	      			<span>اجعلي يوم زفافك يومًا مميزًا ليكون ذكرى لا تنسى مع مجموعة أطقم الزفاف من لازوردي</span><span>. </span><span>كل قطعة في هذه المجموعة مصنوعة بكل حب وبدقة متناهية</span><span>. </span><span>أطقم متنوعة تتزين </span><a href="https://www.lazurde.com/ar-eg/diamond-jewelry" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">بالألماس</span></u></a><span> </span><a href="https://www.lazurde.com/ar-eg/love-engagement/solitaire-rings" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">والسولتير</span></u></a><span> و التي تتألق ببريق خاص يعكس بريق حبكما الأسطوري</span><span>. </span><span>وللعرائس اللاتي تبحثن عن الكمال في يومها الخاص، توفرلازوردي مجموعة طقم مجوهرات عروس بمزيج ساحر بين السلاسل والأقراط والأساور بتصاميم مميزة تضمن تألقك بظهور مميز تبهر الجميع بطلتها الاستثنائية</span><span>. </span><span>سواء كنت من محبي</span><a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"></a><a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">&#xa0;</span></u><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">الذهب الأصفر</span></u></a><span> الكلاسيكي أو </span><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">الأبيض</span></u></a><span> اللامع أو </span><a href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">الذهب الوردي،</span></u></a><span> فإن مجموعة مجوهرات لازوردي ستترككِ على موعد مع الكثير من الخيارات المميزة.</span>
	        		</p>

              <h2>أناقة خالدة لا تتأثر بمرور الزمان مع أطقم المجوهرات ونصف الأطقم المزينة باللؤلؤ من لازوردي</h2>
              
              <p>
			      	<span>نقدم لكِ مجموعة مجوهرات يندمج فيها </span><a href="https://www.lazurde.com/ar-eg/jewelry/pearls" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">اللؤلؤ</span></u></a><span> مع </span><a href="https://www.lazurde.com/ar-eg/gold-jewelry" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">الذهب</span></u></a><span> عيارات 14 و 18 و21 قيراط ليخلقا معًا قطعًا ساحرة مفعمة بالأناقة والفخامة. تنضح أطقم السلاسل </span><a href="https://www.lazurde.com/ar-eg/jewelry/earrings" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">والأقراط</span></u></a><span> المزينة باللؤلؤ بالفخامة والسحر مما يجع منها قطع مثالية للمناسبات الرسمية والإطلالات اليومية. اغتنمي الفرصة واستكشفي نصف الأطقم من لازوردي التي تتميز بسلاسل مع أقراط أو أساور مميزة التي تضيف بريقًا لطيفًا على إطلالاتك دون تكلف أو عناء.</span>
			        </p>

              <h2>تسوقي تشكيلة خواتم وأطقم الزفاف في مصر</h2>

              <p>
              <span>أصبح استعدادك لأي مناسبة أمرًا سهلًا مع أطقم مجوهرات و </span><a href="https://www.lazurde.com/ar-eg/jewelry/rings" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">خواتم</span></u></a><span> الزفاف من لازوردي. انطلقي واستكشفي مجموعة أطقم مجوهرات لازوردي واحصلي على طقم المجوهرات الذي يعكس أسلوبك الخاص وشخصيتك المتفردة.</span>
              </p>

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>مما يتكون طقم مجوهرات لازوردي؟</h3>

             <p>
	    			<span>توفر لازوردي طقم كامل وهو ما يضم </span><a href="https://www.lazurde.com/ar-eg/jewelry/necklaces-pendants" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">سلسلة</span></u></a><span> </span><a href="https://www.lazurde.com/ar-eg/jewelry/bracelets-anklets" style="text-decoration:none"><u><span style="font-family:Arial; font-size:11pt; color:#1155cc">وأسوارة</span></u></a><span> وخاتم وزوج من الأقراط. ونصف طقم يضم أما سلسلة مع زوج من الأقراط أو سلسلة أو أقراط مع خاتم او طقم من اخواتم أو طقم اسوارة وخاتم.</span>
	      		</p>

               <h3>كيف ننسق قطع المجوهرات معًا لتكوين طقم؟</h3>

              يمكنك الاختيار بسهولة من بين أطقم مجوهرات لازوردي بدون تحمل عناء التنسيق والجمع بين القطع المختلفة، أو إذا كنت ترغبين في القيام بذلك بنفسك، يمكنك التحقق من مجموعات لازوردي المختلفة لتنسقي طقم مناسب لذوقك الخاص

              <h3>كيف يمكنني تنسيق طقم مجوهرات جريء دون أن يبدو مبالغًا فيه؟</h3>
              اختر قطعة مميزة من المجموعة، مثل قلادة جريئة، واحتفظ بالإكسسوارات الأخرى بشكل بسيط لتحقيق مظهر متوازن.
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `مما يتكون طقم مجوهرات لازوردي؟`,
              a: `توفر لازوردي طقم كامل وهو ما يضم سلسلة وأسوارة وخاتم وزوج من الأقراط. ونصف طقم يضم أما سلسلة مع زوج من الأقراط أو سلسلة أو أقراط مع خاتم او طقم من اخواتم أو طقم اسوارة وخاتم.`,
            },
            {
              q: `كيف ننسق قطع المجوهرات معًا لتكوين طقم؟`,
              a: `يمكنك الاختيار بسهولة من بين أطقم مجوهرات لازوردي بدون تحمل عناء التنسيق والجمع بين القطع المختلفة، أو إذا كنت ترغبين في القيام بذلك بنفسك، يمكنك التحقق من مجموعات لازوردي المختلفة لتنسقي طقم مناسب لذوقك الخاص.`,
            },
            {
              q: `كيف يمكنني تنسيق طقم مجوهرات جريء دون أن يبدو مبالغًا فيه؟`,
              a: `اختر قطعة مميزة من المجموعة، مثل قلادة جريئة، واحتفظ بالإكسسوارات الأخرى بشكل بسيط لتحقيق مظهر متوازن.`,
            },
          ],
        },
        "shop-all": {
          seo: {
            title: `تسوقي جميع المنتجات - مجوهرات | Page <number> | لازوردي مصر`,
            description: `اكتشف مجموعة رائعة من المجوهرات أونلاين في لازوردي مصر. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },

          banner: bannersJewelryAr?.jewelryShopAll,
          bannerWithcards: null,
          plpComponent: {},
        },
        lazurde: {
          seo: {
            title: "تسوقي مجوهرات لازوردي في مصر | Page <number> | لازوردي مصر",
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات لازوردي أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["lazurdeAr"] }),
          },
        },
        instyle: {
          seo: {
            title: ``,
            description: ``,
          },
          banner: bannersJewelryAr?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["instyleAr"] }),
          },
        },
        "miss-l": {
          seo: {
            title: `تسوقي مجوهرات مس أل لازوردي في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات مس أل لازوردي أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["misslAr"] }),
          },
        },
        "coins-bars": {
          seo: {
            title: ``,
            description: ``,
          },
          banner: bannersJewelryAr?.jewelryCoinsBars,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["gold"],
              type: ["goldBarAr", "goldCoinAr"],
            }),
          },
        },
        "best-sellers": {
          seo: {
            title: `تسوقي أفضل المجوهرات التي تتمتع بأعلى مبيعات في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أفضل ماركات المجوهرات أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryBestSellers,
          bannerWithcards: null,
          plpComponent: {},
        },
        "new-in": {
          seo: {
            title: `تسوقي أحدث وأجدد تصميمات المجوهرات في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أحدث تصاميم المجوهرات الجديدة أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryNewIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              newIn: ["newIn"],
            }),
          },
        },
        "special-price": {
          seo: {
            title: `احصلي على أفضل الأسعار على المجوهرات في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من المجوهرات أونلاين في مصر، والتي تقدم قيمة رائعة بأفضل الأسعار. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelrySpecialPrice,
          bannerWithcards: null,
          plpComponent: {},
        },
        "yellow-gold": {
          seo: {
            title: `تسوقي مجوهرات ذهب أصفر في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الذهب أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryYellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["yellowGoldAr"] }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>اشتري مجوهرات من الذهب الأصفر أونلاين في مصر</h2>.
              استعدي لاكتشاف مجموعة لازوردي الرائعة من تشكيلة متنوعة من مجوهرات ذهب اصفر واختيار القطعة التي تعكس أناقتك وتضيف لمسة من السحر والجمال إلى إطلالتك. عندما تشتري مجوهرات الذهب الأصفر، فإنكِ تستثمرين في قطعة تحمل قيمة عاطفية وثقافية. تشكيلة مميزة تجمع بين الأصالة والجمال والفن لخلق قطع فنية تستحق الاحتفاظ بها للأبد.
              `,
              },
              content: {
                value: `
              
              <h2>مجوهرات ذهب أصفر لكل مناسبة</h2>

              <p>
              <span>عززي أناقتك مع بريق الذهب الأصفر اللافت للأنظار. سواء كنتِ تبحثين عن سلسلة مميزة لإطلالة الخروجات مع الصديقات أو زوج رقيق من </span><a href="https://www.lazurde.com/ar-eg/jewelry/earrings" style="text-decoration:none"><u><span>الأقراط</span></u></a><span> ليوم العمل، تأكدي أنك ستجيدين ما تبحثين عنه في مجموعة مجوهرات الذهب الأصفر من لازوردي التي تضم تصاميم متنوعة تعزز مظهرك في مختلف المناسبات. تتوفر لدينا مجموعة متنوعة من المجوهرات المصنوعة من الذهب الأصفر، بعياريه 18 قيراط و21 قيراط، حتى تتمكنين من اختيار ما يناسبك بشكل أفضل. تقدم لازوردي مجموعة متنوعة من المجوهرات المصنوعة من الذهب الأصفر، بما في ذلك </span><a href="https://www.lazurde.com/ar-eg/gold/necklaces-pendants" style="text-decoration:none"><u><span>سلاسل</span></u></a><span> و </span><a href="https://www.lazurde.com/ar-eg/gold/rings" style="text-decoration:none"><u><span>خواتم</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/rings" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/rings" style="text-decoration:none"><u><span>ذهب</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/rings" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/rings" style="text-decoration:none"><u><span>اصفر</span></u></a><span> والأقراط والأساور الى جانب اقراط و</span><a href="https://www.lazurde.com/ar-eg/gold/bracelets-anklets" style="text-decoration:none"><u><span>اساور</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/bracelets-anklets" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/bracelets-anklets" style="text-decoration:none"><u><span>ذهب</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/bracelets-anklets" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/bracelets-anklets" style="text-decoration:none"><u><span>اصفر</span></u></a><span> بالإَضافة الى اطقم ذهب اصفر وغيرها الكثير. إذا كنتِ تبحثين عن قطعة مجوهرات تتميز بالبريق والفخامة، يمكنك اقتناء قطعة مجوهرات من الذهب الأصفر مرصعة </span><a href="https://www.lazurde.com/ar-eg/diamond-jewelry" style="text-decoration:none"><u><span>بالألماس</span></u></a><span> أو </span><a href="https://www.lazurde.com/ar-eg/gold/pearls" style="text-decoration:none"><u><span>اللؤلؤ</span></u></a><span> أو </span><a href="https://www.lazurde.com/ar-eg/gold/colored-stones" style="text-decoration:none"><u><span>الأحجار</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/colored-stones" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-eg/gold/colored-stones" style="text-decoration:none"><u><span>الملونة</span></u></a><span>. إن الجمع بين الذهب الأصفر الفاخر والأحجار الكريمة اللامعة يخلق تآزراً ساحراً يضفي على المجوهرات رونقاً خاصاً ويعزز جمالها بشكل لا يصدق. إن كل قطعة مجوهرات مصنوعة من الذهب الأصفر تحمل معها تاريخًا وإرثًا ثقافيًا غنيًا. إنها تشير إلى الرفاهية والأناقة والذوق الرفيع. تعتبر هذه القطع حقًا تحفًا فنية تجمع بين الجمال والقيمة والتاريخ. انغمسي في سحر مجوهرات الذهب الأصفر واسمحي لجاذبيتها المغرية أن تترك أثرًا دائمًا. استمتعي بالتألق والفخامة والأناقة التي توفرها هذه القطع الثمينة واجعليها جزءًا من إطلالتك الفريدة والساحرة.</span>
            </p>

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>ما الفرق بين الوان الذهب؟</h3>

              <p dir="rtl"
              style="margin-top:0pt; margin-bottom:15pt; line-height:115%; font-size:12pt; background-color:#ffffff;"><span
                 >الذهب</span><span
                 >&nbsp;</span><span
                 >بطبيعته</span><span
                 >&nbsp;</span><span
                 >معدن</span><span
                 >&nbsp;</span><span
                 >أصفر</span><span
                 >&nbsp;</span><span
                 >اللون، لكن</span><span
                 >&nbsp;</span><span
                 >يمكن</span><span
                 >&nbsp;</span><span
                 >تعديل</span><span
                 >&nbsp;</span><span
                 >لونه</span><span
                 >&nbsp;</span><span
                 >بخلطه</span><span
                 >&nbsp;</span><span
                 >مع</span><span
                 >&nbsp;</span><span
                 >معادن</span><span
                 >&nbsp;</span><span
                 >أخرى</span><span
                 >&nbsp;</span><span
                 >لإنتاج</span><span
                 >&nbsp;</span><span
                 >ألوان</span><span
                 >&nbsp;</span><span
                 >مختلفة</span><span
                 >.&nbsp;</span><span
                 >هذه</span><span
                 >&nbsp;</span><span
                 >الألوان</span><span
                 >&nbsp;</span><span
                 >تشمل</span><span
                 >&nbsp;</span><span
                 >الذهب</span><span
                 >&nbsp;</span><span
                 >الأصفر،&nbsp;</span><a
                  href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none;"><u><span
                          style="font-family:Roboto; color:#1155cc;">الذهب</span></u></a><a
                  href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none;"><u><span
                          style="font-family:Roboto; color:#1155cc;">&nbsp;</span></u></a><a
                  href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none;"><u><span
                          style="font-family:Roboto; color:#1155cc;">الأبيض</span></u></a><span
                 >، و</span><a
                  href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none;"><u><span
                          style="font-family:Roboto; color:#1155cc;">الذهب</span></u></a><a
                  href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none;"><u><span
                          style="font-family:Roboto; color:#1155cc;">&nbsp;</span></u></a><a
                  href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none;"><u><span
                          style="font-family:Roboto; color:#1155cc;">الوردي</span></u></a><span
                 >، وكل</span><span
                 >&nbsp;</span><span
                 >لون</span><span
                 >&nbsp;</span><span
                 >له</span><span
                 >&nbsp;</span><span
                 >خصائصه</span><span
                 >&nbsp;</span><span
                 >واستخداماته</span><span
                 >&nbsp;</span><span
                 >الخاصة</span><span
                 >:</span></p>
        
              <h3>ما هو لون الذهب الاصلي؟</h3>
          <p >
              <span >لون</span><span
                 >&nbsp;</span><span
                  >الذهب</span><span
                 >&nbsp;</span><span
                  >الأصلي</span><span
                 >&nbsp;</span><span
                  >هو</span><span
                 >&nbsp;</span><span
                  >الأصفر</span><span
                 >&nbsp;</span><span
                  >اللامع</span><span
                 >.&nbsp;</span><span
                  >هذا</span><span
                 >&nbsp;</span><span
                  >اللون</span><span
                 >&nbsp;</span><span
                  >الطبيعي</span><span
                 >&nbsp;</span><span
                  >والمميز</span><span
                 >&nbsp;</span><span
                  >للذهب</span><span
                 >&nbsp;</span><span
                  >ينتج</span><span
                 >&nbsp;</span><span
                  >عن</span><span
                 >&nbsp;</span><span
                  >خصائصه</span><span
                 >&nbsp;</span><span
                  >الكيميائية</span><span
                 >&nbsp;</span><span
                  >والفيزيائية</span><span
                 >&nbsp;</span><span
                  >الفريدة</span><span
                 >.&nbsp;</span><span
                  >الذهب</span><span
                 >&nbsp;</span><span
                  >في</span><span
                 >&nbsp;</span><span
                  >حالته</span><span
                 >&nbsp;</span><span
                  >الخام</span><span
                 >&nbsp;</span><span
                  >والنقية</span><span
                 >&nbsp;</span><span
                  >يظهر</span><span
                 >&nbsp;</span><span
                  >بهذا</span><span
                 >&nbsp;</span><span
                  >اللون</span><span
                 >&nbsp;</span><span
                  >الجذاب</span><span
                 >&nbsp;</span><span
                  >الذي</span><span
                 >&nbsp;</span><span
                  >يعد</span><span
                 >&nbsp;</span><span
                  >من</span><span
                 >&nbsp;</span><span
                  >السمات</span><span
                 >&nbsp;</span><span
                  >الأساسية</span><span
                 >&nbsp;</span><span
                  >لهذا</span><span
                 >&nbsp;</span><span
                  >المعدن</span><span
                 >&nbsp;</span><span
                  >الثمين</span><span
                 >.</span></p>


              <h3>هل المجوهرات المصنوعة من الذهب الأصفر جيدة؟</h3>
              نعم، بكل تأكيد. أن الذهب الأصفر معدن متين ومثالي للمجوهرات مثل الأقراط والخواتم والسلاسل وما إلى غير ذلك.
              
              <h3>هل يتغير لون الذهب الأصفر؟</h3>
              لا! يدوم الذهب الأصفر إلى الأبد وقد يحتاج فقط إلى تنظيفه من الأتربة والأوساخ كل فترة.
              
              <h3>هل يدون الذهب الأصفر طويلًا؟</h3>
              نعم، بكل تأكيد. الذهب الأصفر معدن متين وثمين يدوم عمرًا طويلًا.
               
              <h3>كيف اعتني بالذهب الأصفر؟</h3>
              ببساطة، ما عليك سوى ترك مجوهراتك في ماء فاتر لبضع دقائق ثم مسحها بقطعة قماش جافة.
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل المجوهرات المصنوعة من الذهب الأصفر جيدة؟`,
              a: `نعم، بكل تأكيد. أن الذهب الأصفر معدن متين ومثالي للمجوهرات مثل الأقراط والخواتم والسلاسل وما إلى غير ذلك.`,
            },
            {
              q: `هل يتغير لون الذهب الأصفر؟`,
              a: `لا! يدوم الذهب الأصفر إلى الأبد وقد يحتاج فقط إلى تنظيفه من الأتربة والأوساخ كل فترة.`,
            },
            {
              q: `هل يدون الذهب الأصفر طويلًا؟`,
              a: `نعم، بكل تأكيد. الذهب الأصفر معدن متين وثمين يدوم عمرًا طويلًا.`,
            },
            {
              q: `كيف اعتني بالذهب الأصفر؟`,
              a: `ببساطة، ما عليك سوى ترك مجوهراتك في ماء فاتر لبضع دقائق ثم مسحها بقطعة قماش جافة.`,
            },
          ],
        },
        "white-gold": {
          seo: {
            title: `تسوقي مجوهرات ذهب أبيض في مصر العربية | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الذهب الآبيض أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryWhiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["whiteGoldAr"] }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>استمتعي ببريق الذهب الأبيض!</h2>

              <p>
              <span>يعتبر الذهب الأبيض خيارًا رائعًا للمجوهرات، حيث يوفر تألقًا رائعًا وجمالًا فريدًا
                  من نوعه. ويتميز بلونه الأبيض الناصع وبريقه الذهبي الفاخر، مما يجعله مثاليًا للاستخدام في تصاميم المجوهرات
                  الراقية. تتميز مجموعة مجوهرات لازوردي بتشكيلة متنوعة من ذهب أبيض بتصاميم تجمع بين الأناقة الكلاسيكية
                  واللمسات الحديثة الراقية. فهي تجمع بين أفضل ما في التصاميم التقليدية والحديثة، مما يمنحها مظهرًا رائعًا
                  وفريدًا. سواء كنتِ تبحثين عن قطعة مجوهرات كلاسيكية وبسيطة من الذهب الأبيض، أو تفضلين شيئًا أكثر تألقًا
                  مع&nbsp;</span><a href="https://www.lazurde.com/ar-eg/diamond-jewelry"
                  style="text-decoration:none;"><u><span style="color:#1155cc;">الألماس</span></u></a><span
                 >&nbsp;أو&nbsp;</span><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones"
                  style="text-decoration:none;"><u><span style="color:#1155cc;">الأحجار</span></u></a><a
                  href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none;"><u><span
                          style="color:#1155cc;">&nbsp;</span></u></a><a
                  href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none;"><u><span
                          style="color:#1155cc;">الكريمة</span></u></a><a
                  href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none;"><u><span
                          style="color:#1155cc;">&nbsp;</span></u></a><a
                  href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none;"><u><span
                          style="color:#1155cc;">الملونة</span></u></a><span>&nbsp;أو&nbsp;</span><a
                  href="https://www.lazurde.com/ar-eg/jewelry/pearls" style="text-decoration:none;"><u><span
                          style="color:#1155cc;">اللؤلؤ</span></u></a><span>،</span><span
                 >&nbsp;فإن مجموعة مجوهرات لازوردي من الذهب الأبيض تضم كل ما سيضيف لمسة من البريق
                  اللافت إلى إطلالاتك.</span></p>
              `,
              },
              content: {
                value: `
               
              <h2>توجا حبكما بدبلة ذهب أبيض في مصر</h2>
          
              <p dir="rtl"
        style="margin-top:0pt; margin-bottom:30pt; line-height:175%; font-size:12pt; background-color:#ffffff;"><span
           >يمكنكما الاحتفال بروابط الحب الأبدية مع مجموعة</span><span
           >&nbsp;</span><span>خواتم ذهب ابيض من لازوردي</span><span
           >.&nbsp;</span><a href="https://www.lazurde.com/ar-eg/love-engagement"
            style="text-decoration:none;">خواتم</a><a href="https://www.lazurde.com/ar-eg/love-engagement"
            style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a
            href="https://www.lazurde.com/ar-eg/love-engagement" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">الزفاف</span></u></a><span
           >&nbsp;</span><span>هي رمز للارتباط القوي بين الأزواج، وتعد وعدًا بالبقاء
            معًا طوال العمر. وبهذا الشكل،&nbsp;</span><span>اشتري خاتم ذهب ابيض للزواج لأنه هو
            أكثر من مجرد مجوهرات، بل هو رمز للحب والالتزام القوي بين الأزواج. في مجموعتنا، تصنع&nbsp;</span><a
            href="https://www.lazurde.com/ar-eg/gold/rings?%D8%A7%D9%84%D9%86%D9%88%D8%B9=%D8%AF%D8%A8%D9%84%D8%A9+%D8%B2%D9%81%D8%A7%D9%81%3A%D8%AF%D8%A8%D9%84%D8%A9+%D8%B2%D9%81%D8%A7%D9%81&sort="
            style="text-decoration:none;"><u><span style="color:#0000ff;">دبل</span></u></a><span
           >&nbsp;الزفاف من الذهب الأبيض بأقصى درجات العناية والاهتمام، حيث تم تصميمها لتكون
            التعبير المثالي عن حبكما الأبدي في يومك الخاص. وبفضل جودة الذهب الأبيض، فإنها ستلمع ببريق مذهل وستبقى تذكرك
            بذكرى هذا اليوم الخاص.</span></p>

              <h2>خاتم الماس ذهب ابيض - رمز للحب الأبدي</h2>

             <p dir="rtl"
        style="margin-top:0pt; margin-bottom:30pt; line-height:175%; font-size:12pt; background-color:#ffffff;"><span
           >اكتشفي المزيج الساحر لبريق الذهب الأبيض والألماس مع مجموعة خواتم لازوردي من الذهب
            الأبيض المرصعة بالألماس. إن&nbsp;</span><a href="https://www.lazurde.com/ar-eg/diamond/rings"
            style="text-decoration:none;"><u><span style="color:#1155cc;">خواتم</span></u></a><a
            href="https://www.lazurde.com/ar-eg/diamond/rings" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/diamond/rings"
            style="text-decoration:none;"><u><span style="color:#1155cc;">الذهب</span></u></a><a
            href="https://www.lazurde.com/ar-eg/diamond/rings" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/diamond/rings"
            style="text-decoration:none;"><u><span style="color:#1155cc;">الأبيض</span></u></a><a
            href="https://www.lazurde.com/ar-eg/diamond/rings" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/diamond/rings"
            style="text-decoration:none;"><u><span style="color:#1155cc;">من</span></u></a><a
            href="https://www.lazurde.com/ar-eg/diamond/rings" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/diamond/rings"
            style="text-decoration:none;"><u><span style="color:#1155cc;">لازوردي</span></u></a><a
            href="https://www.lazurde.com/ar-eg/diamond/rings" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/diamond/rings"
            style="text-decoration:none;"><u><span style="color:#1155cc;">المرصعة</span></u></a><a
            href="https://www.lazurde.com/ar-eg/diamond/rings" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/diamond/rings"
            style="text-decoration:none;"><u><span style="color:#1155cc;">بالألماس</span></u></a><span
           >&nbsp;هي تجسيد حقيقي لمعاني الحب والفخامة. يتميز كل خاتم في مجموعتنا بتصميم فريد
            وجمال استثنائي، مما يجعله إضافة رائعة لأي مجموعة من المجوهرات.</span></p>
            
              <h2>اكتشفي الجاذبية الخالدة لكل من حلق وسلاسل الذهب الابيض من لازوردي</h2>
             
              <p><span
           >دللي نفسك بقطعة من مجموعة سلسال و حلق ذهب ابيض من لازوردي. إن&nbsp;</span><a
            href="https://www.lazurde.com/ar-eg/jewelry/earrings" style="text-decoration:none;"><u><span
                    style="color:#1155cc;">أقراط</span></u></a><span>&nbsp;</span><a
            href="https://www.lazurde.com/ar-eg/jewelry/necklaces-pendants"
            style="text-decoration:none;">وسلاسل</a><span>&nbsp;لازوردي من الذهب الأبيض تلائم
            مختلف الأنماط والأذواق، حيث تتميز بالأناقة والرقي والجمال الخالد. فهي تضفي لمسة من الأناقة والجمال على أي
            مظهر، سواء كنتِ بصدد حضور مناسبة خاصة أو إذا كنت ترغبين في الحصول على مظهر يومي متألق. بغض النظر عن
            المناسبة، فإن جمال الذهب الأبيض سيزيد من جاذبيتك بلا جهد، وسيجعلك تلفتين الأنظار وتشعرين بالثقة في كل
            الأوقات.</span></p>
            
              <h2>سلاسل وأساور ذهب أبيض</h2>

            <p><span
           >تألقي بسحر آخاذ مع مجموعة سلاسل وأساور لازوردي من الذهب الأبيض. ومع تشكيلتنا الواسعة
            من&nbsp;</span><a href="https://www.lazurde.com/ar-sa/jewelry/bracelets-anklets"
            style="text-decoration:none;"><u><span style="color:#1155cc;">أساور</span></u></a><span
           >&nbsp;وسلاسل الذهب الأبيض، يمكنك العثور بسهولة على القطعة التي تناسب ذوقك وتضيف لمسة
            من الأناقة والجمال إلى مظهرك. سواء كنتِ تفضلين</span><span
           >&nbsp;</span><span>عقد ذهب ابيض رفيع أو اساور ذهب ابيض جريئة</span><span
            style="text-decoration:line-through;">،</span><span>&nbsp;فإن
            تصميماتنا المتنوعة تُتيح لك الاختيار من بين العديد من القطع المميزة. انطلقي مع لازوردي في مصر إلى عالم
            مجوهرات الذهب الأبيض الراقية حيث يلتقي بسلاسة الترف والفخامة مع الجاذبية والأناقة. تصاميم فاتنة من الذهب
            الأبيض تأسر القلوب وتعزز إطلالاتك بل ستكون إرثًا رائعًا للأجيال من بعدك. لذا، اكتشفي مجموعة مجوهرات لازوردي
            الرائعة من الذهب الأبيض، واستمتعي بالترف والجاذبية البراقة التي ستضاعف جمال مظهرك وإطلالاتك.</span></p>

            <h2>تسوق توينز ذهب أبيض من لازوردي</h2>

            استمتعوا بتجربة فريدة مع تشكيلة خواتم توينز من الذهب الأبيض من لازوردي، حيث نقدم لكم مجموعة مختارة بعناية فائقة تجمع بين الجودة العالية والتصاميم الأنيقة. كل قطعة مصممة لتعكس جمالكم الخاص وتضيف لمسة من الرقي إلى إطلالتكم في كل المناسبات. مع لازوردي، ستجدي الدقة في التفاصيل والابتكار في التصميم، مما يجعل كل قطعة تحفة فنية تستحق الاقتناء. اختاروا توينز الذهب الأبيض لتكونوا دائمًا في قمة الأناقة والتميز.


              <h2>الأسئلة الشائعة:</h2>
              
              <h3>هل يوجد ذهب أبيض عيار ٢١؟</h3>
              نعم، يمكن العثور على الذهب الأبيض عيار 21، لكنه أقل شيوعًا مقارنة بالذهب الأصفر عيار 21. الذهب الأبيض يتم تصنيعه عن طريق خلط الذهب الأصفر مع معادن بيضاء أخرى لإعطائه لونه الأبيض اللامع 
              
              <h3>هل الذهب الابيض يعتبر ذهب؟</h3>
              نعم، الذهب الأبيض يعتبر ذهبًا. يتم تصنيعه بخلط الذهب الخالص، الذي يكون لونه أصفر بطبيعته، مع معادن أخرى بيضاء اللون. هذا الخليط يغير لون الذهب من الأصفر إلى الأبيض، مما ينتج عنه الذهب الأبيض

              <h3>كم نسبة الذهب في الذهب الابيض؟</h3>
              نسبة الذهب في الذهب الأبيض تعتمد على عيار الذهب المستخدم في صناعته. على سبيل المثال
              <p>
              <span>●</span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>الذهب الأبيض عيار ١٨ يحتوي على 75% ذهب خالص، أي أن ١٨ جزءًا من أصل 24 جزءًا هي ذهب خالص، والـ 6 أجزاء المتبقية هي معادن أخرى مثل البلاديوم أو النيكل أو الفضة.</span>
              </p>

              <h3>هل الذهب الابيض اغلى من الذهب الاصفر؟</h3>
              لا، الذهب الأبيض ليس بالضرورة أغلى من الذهب الأصفر. الفرق في السعر بين الذهب الأبيض والذهب الأصفر يعتمد على عدة عوامل، منها تكلفة المعالجة والتصنيع. 

              <h3>كم سعر جرام الذهب الابيض في مصر؟</h3>
              للحصول على سعر جرام الذهب الأبيض في مصر، يُنصح بمراجعة المواقع الإلكترونية المتخصصة في تتبع أسعار الذهب أو الاتصال بمحلات الجواهري المحلية. تجدر الإشارة إلى أن أسعار الذهب تتغير بشكل دوري بناءً على عوامل السوق العالمية والمحلية.

              <h3>ما الفرق بين الذهب الابيض والسوليتير؟</h3>
              الذهب الأبيض هو معدن يُستخدم في صناعة المجوهرات، يتميز بلونه الأبيض الناتج عن خلط الذهب مع معادن أخرى. أما السوليتير فهو تصميم للمجوهرات يركز على حجر كريم واحد كالالماس، وغالبًا ما يُستخدم في خواتم الخطوبة وبالتالي ممكن أن تجد خاتم سوليتر ذهب أبيض.

              
              <h3>هل للذهب الأبيض قيمة إعادة بيع؟</h3>
              نعم، للذهب الأبيض قيمة إعادة بيع، لكنها تعتمد على عوامل مثل نقاوة الذهب، وزنه، والطلب في السوق

              <h3>كيف تتعرف على الذهب الابيض؟</h3>
              للتعرف على الذهب الأبيض:

        <p>
            <span >●</span></span><span
               ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
               >ابحث</span><span
               >&nbsp;</span><span
               >عن</span><span
               >&nbsp;</span><span
               >العلامات</span><span
               >&nbsp;</span><span
               >الدمغية</span><span
               >&nbsp;</span><span
               >مثل</span><span
               >&nbsp;&quot;750&quot;&nbsp;</span><span
               >لعيار</span><span
               >&nbsp;18&nbsp;</span><span
               >قيراط</span><span
               >.</span></p>

        <p>
            <span >●</span></span><span
               ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
               >لاحظ</span><span
               >&nbsp;</span><span
               >اللون؛ الذهب</span><span
               >&nbsp;</span><span
               >الأبيض</span><span
               >&nbsp;</span><span
               >له</span><span
               >&nbsp;</span><span
               >لون</span><span
               >&nbsp;</span><span
               >فضي</span><span
               >-</span><span
               >أبيض</span><span
               >.</span></p>

        <p>
            <span >●</span></span><span
               ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span
               >اختبر</span><span
               >&nbsp;</span><span
               >المغناطيسية؛ الذهب</span><span
               >&nbsp;</span><span
               >غير</span><span
               >&nbsp;</span><span
               >مغناطيسي</span><span
               >.</span></p>
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل يدوم الذهب الأبيض طويلًا؟`,
              a: `إن الذهب الأبيض معدن متين ويدوم طويلًا ولكن قد تحتاجين إلى إعادة طلائه كل 10 سنوات أو أكثر.`,
            },
            {
              q: `هل من السهل المحافظة على الذهب الأبيض؟`,
              a: `نعم، بكل تأكيد. ببساطة ، ضعي مجوهراتك المصنوعة من الذهب الأبيض في ماء فاتر مع 2-3 قطرات من صابون الأطباق لبضع ساعات ثم جففيها.`,
            },
            {
              q: `هل يمكن ان ارتدي كل المجوهرات من الذهب الابيض؟`,
              a: `نعم، يمكنك  تنسيق  قطع مختلفة من الذهب الابيض من سلسلة و خاتم وحلق واسورة من مجموعتنا المميزة.`,
            },
          ],
        },
        "rose-gold": {
          seo: {
            title: `تسوقي مجوهرات ذهب وردي في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الذهب الوردي أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryRoseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["roseGoldAr"] }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>اشتري مجوهرات مميزة من الذهب الوردي أونلاين في مصر</h2>
              من خلال الموقع الإلكتروني للازوردي، استكشفي عالم مجوهرات الذهب الوردي الأنيقة واختاري الأنسب لكِ. بصفة عامة، عندما تشتري مجوهرات الذهب الوردي، فهي تجسد الأناقة والفخامة وتضيف لمسة من الجمال والتألق إلى حياتك. تتميز كل قطعة مجوهرات من مجوهرات لازوردي بالدقة في التصميم والصنع لتحقيق أعلى مستويات الجودة والتميز. تشكيلة مميزة تجمع بين الأصالة والجمال والفن لخلق قطع فنية تستحق الاحتفاظ بها للأبد.

              `,
              },
              content: {
                value: `
              <h2>مجوهرات ذهب وردي لكل مناسبة</h2>

              <p>أجذبي أنظار الجميع بسحرك الخالص
              مع مجوهرات لازوردي من الذهب الوردي. سواء كنتِ تبحثين عن سلسلة مميزة لإطلالة الخروجات مع الصديقات أو زوج رقيق من
              <a href="https://www.lazurde.com/ar-eg/jewelry/earrings" style="text-decoration:none;"><u><span
                          style="color:#1155cc;">الأقراط</span></u></a> ليوم العمل، تأكدي أنك ستجيدين ما تبحثين عنه في مجموعة
              <a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;"><u><span
                          style="color:#1155cc;">مجوهرات</span></u></a><a
                  href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;"><u><span
                          style="color:#1155cc;">&nbsp;</span></u></a><a
                  href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;"><u><span
                          style="color:#1155cc;">الذهب</span></u></a><a
                  href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;"><u><span
                          style="color:#1155cc;">&nbsp;</span></u></a><a
                  href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;"><u><span
                          style="color:#1155cc;">الأصفر</span></u></a> من لازوردي التي تضم تصاميم متنوعة تعزز مظهرك في مختلف
              المناسبات. تتوفر لدينا مجموعة متنوعة من المجوهرات المصنوعة من الذهب الوردي، بعياريه 18 قيراط و21 قيراط، حتى
              تتمكنين من اختيار ما يناسبك بشكل أفضل. اختاري من بين مجموعة من سلاسل الذهب الوردي أو <a
                  href="https://www.lazurde.com/ar-eg/jewelry/rings" style="text-decoration:none;"><u><span
                          style="color:#1155cc;">خواتم</span></u></a> ذهب وردي وأقراط ذهب وردي <a
                  href="https://www.lazurde.com/ar-eg/jewelry/bracelets-anklets" style="text-decoration:none;"><u><span
                          style="color:#1155cc;">والأساور</span></u></a> من الذهب الوردي والكثير والكثير. تعكس هذه القطع
              الأناقة الخالدة وتناسب مختلف المناسبات والإطلالات. يعتبر الذهب الوردي من أنواع الذهب المميزة التي تتميز بلونها
              الفريد والأنيق. واحدة من أهم مميزات الذهب الوردي هي قدرته على الاندماج بشكل رائع مع أي حجر كريم آخر. تعكس قطع
              المجوهرات من الذهب الوردي في مجموعة لازوردي قصة فنية متقنة وعناية فائقة بالتفاصيل. انغمسي في سحر مجوهرات الذهب
              الوردي واسمحي لجاذبيتها المغرية أن تترك أثرًا دائمًا. استمتعي بالتألق والفخامة والأناقة التي توفرها هذه القطع
              الثمينة واجعليها جزءًا من إطلالتك الفريدة والساحرة.</p>
              
              <h2>الأسئلة الشائعة:</h2>
              
              <h3>هل يليق الذهب الوردي بكل الإطلالات؟</h3>
              نعم، بكل تأكيد. الذهب الوردي يليق بأي ملابس وأي ستايل.
              
              <h3>هل يناسب الذهب الوردي كل ألوان البشرة؟</h3>
              نعم، بكل تأكيد. يبدو الذهب والذهب الوردي بشكل خاص مذهلين تمامًا على مختلف ألوان البشرة.
              
              <h3>هل يمكن ارتداء الذهب الوردي يوميًا؟</h3>
              نعم، بكل تأكيد. الذهب الوردي معدن متين وثمين يدوم عمرًا طويلًا.

              <h3>ما هو الذهب الوردي؟</h3>
              الذهب الوردي هو سبيكة من الذهب تمزج بين الذهب الخالص والنحاس وأحيانًا كمية صغيرة من الفضة، مما يعطيها لونها الوردي المميز.

              <h3>هل يدوم الذهب الوردي طويلاً؟</h3>
              نعم، يدوم الذهب الوردي طويلاً. بفضل تركيبته الفريدة التي تشمل الذهب الخالص والنحاس، يتمتع الذهب الوردي بمتانة وقوة تجعله مقاومًا للخدوش والتلف مع مرور الزمن.

              <h3>هل يتغير لون الذهب الوردي؟</h3>
              نعم، يمكن أن يتغير لون الذهب الوردي بمرور الوقت. 

              <h3>أيهما أفضل الذهب الوردي أم الذهب الأصفر؟</h3>
              الاختيار بين الذهب الوردي والذهب الأصفر يعتمد على الأذواق الشخصية والتفضيلات. 
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل يليق الذهب الوردي بكل الإطلالات؟`,
              a: `نعم، بكل تأكيد. الذهب الوردي يليق بأي ملابس وأي ستايل.`,
            },
            {
              q: `هل يناسب الذهب الوردي كل ألوان البشرة؟`,
              a: `نعم، بكل تأكيد. يبدو الذهب والذهب الوردي بشكل خاص مذهلين تمامًا على مختلف ألوان البشرة.`,
            },
            {
              q: `هل يمكن ارتداء الذهب الوردي يوميًا؟`,
              a: `نعم، بكل تأكيد. الذهب الوردي معدن متين وثمين يدوم عمرًا طويلًا.`,
            },
          ],
        },
        "multicolor-gold": {
          seo: {
            title: ``,
            description: ``,
          },
          banner: bannersJewelryAr?.jewelryMultiColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              metalColor: [
                "yellowWhiteGoldAr",
                "yellowWhiteRoseGoldAr",
                "whiteRoseGoldAr",
                "yellowRoseGoldAr",
              ],
            }),
          },
        },
        diamonds: {
          seo: {
            title: `تسوقي مجوهرات الماس في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الالماس أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryDiamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              diamonds: ["diamondsAr"],
            }),
          },
        },
        "colored-stones": {
          seo: {
            title: `تسوقي مجوهرات بأحجار ملونة في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات الأحجار الملونة أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryColoredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              stone: ["coloredStonesAr"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>وكأنك شمس مشرقة مع مجوهرات احجار كريمة صفراء اللون</h2>
              
              أبرزي إطلالاتك وتألقي وشعي ببريق لافت مع مجوهرات لازوردي المزينة بالأحجار الصفراء. يعكس هذا اللون المرح والإيجابية، فهو يضيف إلى إطلالاتك بدفء لونه ولمعته المبهجة. سواء كنتِ من محبي الياقوت الأصفر أو حجر السيترين المذهل، فلن تجدي أفضل من مجموعة مجوهرات لازوردي المزينة بالأحجار الصفراء لتتألقي كل يوم مع سحرها المتلألئ.

              `,
              },
              content: {
                value: `
               
              <h2>مجوهرات فاتنة بأحجار الجمشت والفيروز في مصر</h2>
              
              اكتشفي سحر الأحجار الكريمة الفاخرة حجر جمشت، حجر الكهرمان وغيرها من الأحجار الكريمة الملونة مع مجموعة مجوهرات لازوردي المزينة بالأحجار الكريمة التي تأسر الجميع بجمالها وفخامتها. تتميز هذه الأحجار الكريمة بجمالها الفريد وسحرها الخلاب، حيث تضيف لمسة من الأناقة والجمال إلى أي مجموعة مجوهرات. تتميز أحجار الفيروز بلونها الأزرق الفاتح والأخضر الزمردي، والذي يعتبر رمزًا للهدوء والسلام والسكينة. تستخدم أحجار الفيروز في تصنيع المجوهرات منذ القدم، حيث كانت تستخدم في صنع تحف وزينة الملوك والملكات. وإذا كنتِ ترغبين في الحصول على قطعة مجوهرات تحمل حجر فيروز ، فإنها قد تكون الخيار الأمثل لتضفي على إطلالتك لمسة من الهدوء والسلام والسكينة. من أقراط الجمشت الرقيقة إلى  خواتم الفيروز الرائعة ، مع مجموعة مجوهرات لازوردي المزينة بالأحجار الكريمة الملونة، يمكنك اكتشاف معاني الرقي والأناقة التي تثبتها هذه الأحجار الملكية.

              <h2>اكتشفي روعة الزمرد - الحجر الخلاب الذي ينقلك إلى عالم الطبيعة الخلابة</h2>
              
              <p><a href="https://www.lazurde.com/ar-eg/jewelry/rings" style="text-decoration:none;"><u><span style="color:#1155cc;">خواتم</span></u></a><span>&nbsp;</span><a href="https://www.lazurde.com/ar-eg/jewelry/necklaces-pendants" style="text-decoration:none;">و</a><u><span style="color:#1155cc;">سلاسل و</span></u><a href="https://www.lazurde.com/ar-eg/jewelry/necklaces-pendants" style="text-decoration:none;"><u><span style="color:#1155cc;">عقود</span></u></a><span>&nbsp;</span><span>ب</span><span>احجار كريمة فريدة مزينة بالزمرد؛ فإنها الخيار الأمثل لإضفاء لمسة من الجمال الطبيعي والأناقة على إطلالتك.&nbsp;</span><span>&nbsp;</span><span>يعتبر حجر الزمرد من الأحجار الكريمة الفاخرة التي تتميز بلونها الأخضر الزمردي النابض بالحياة والجمال، والذي يوحي بجمال الطبيعة الخلابة. وتتوفر أحجار الزمرد بتصاميم متعددة مثل خواتم احجار كريمة،&nbsp;</span><a href="https://www.lazurde.com/ar-sa/jewelry/bracelets-anklets" style="text-decoration:none;"><u><span style="color:#1155cc;">اساور</span></u></a><span>&nbsp;احجار كريمة</span><span>&nbsp;</span><a href="https://www.lazurde.com/ar-eg/jewelry/earrings" style="text-decoration:none;">والأقراط</a><span>&nbsp;وغيرها، مما يجعلها خيارًا رائعًا لإضافة لمسة من الأناقة والجمال إلى مجموعة مجوهراتك.</span></p>

              <h2>الياقوت الأحمر ملك الأحجار الكريمة</h2>

              يطلق على حجر الياقوت الأحمر اسم "ملك الأحجار الكريمة"، من أكثر الأحجار الكريمة جمالًا. اكتشفي مجموعة لازوردي الرائعة من خواتم وقلادات الياقوت الاحمر. بفضل جمالها الفريد ولونها الأحمر الشغوف، تجعل خواتم وسلاسل الياقوت الأحمر إطلالتك جريئة وجميلة ومفعمة بالحيوية. وتضفي على شخصيتك لمسة من الشغف والعاطفة والجاذبية، مما يجعلها الخيار الأمثل للمناسبات الخاص
              
              <h2>لا تفوتي الفرصة.. واقتني قطعتك المفضلة من مجموعة الأحجار الكريمة من لازوردي</h2>
              اختبري الجمال الخالد لمجموعة مجوهرات لازوردي المزينة بالأحجار الكريمة الملونة حيث تتفرد كل قطعة بذاتها وكأنها لوحة فنية تنضح بالسحر والفخامة. نفخر بتقديم مجموعة متنوعة من المجوهرات المزينة بالأحجار الكريمة تضمن أن تجدي القطعة المثالية التي تناسب شخصيتك وأسلوبك.

              <h2الأسئلة الشائعة</h2>
              
              <h3>ما هي انواع احجار كريمة؟</h3>
              توجد العديد من أنواع الأحجار الكريمة، وكل نوع له خصائصه الفريدة من حيث اللون، الصلابة، والندرة. إليك بعضًا من أشهر هذه الأحجار

              <p>الماس (Diamond): يعتبر من أكثر الأحجار قيمة وصلابة، وهو شفاف ويمكن أن يأتي بألوان مختلفة.</p>

              <p>الياقوت (Ruby): حجر كريم أحمر اللون، يتميز بصلابته ولمعانه</p>
              
              <p>الزمرد (Emerald): يتميز بلونه الأخضر الفريد وهو من الأحجار الكريمة النادرة.</p>

              <p>الزفير (Sapphire): يأتي بعدة ألوان، لكن الأكثر شهرة هو الزفير الأزرق.</p>

              <p>العقيق (Agate): يتميز بتنوعه الكبير في الألوان والأنماط.</p>

              <p>الفيروز (Turquoise): حجر كريم يتميز بلونه الأزرق أو الأخضر.</p>

              <h3>لماذا يرتدي الناس الأحجار الكريمة؟</h3>
              كل حجر كريم له طاقة وخصائص فريدة ، يرتديها البعض لهذا السبب؛ والبعض الأخر يحب ارتدائها لأنها جميلة.

              <h3>كيف يكون اختيار المجوهرات المزينة بالأحجار الكريمة؟</h3>
              يجب التحقق من اللون ودرجة نقاء الحجر ووزنه قبل الشراء
              
              <h3>كيف اتحقق من جودة الحجر الكريم؟</h3>
              تعتمد جودة أي حجر كريم على نقائه ولونه وقيراطه.

              <h3>ما هو أكثر الأحجار الكريمة المستخدمة في صناعة المجوهرات؟</h3>
              الألماس.. إنه أشهر الأحجار وأكثرها شيوعًا في تصاميم المجوهرات.
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `لماذا يرتدي الناس الأحجار الكريمة؟`,
              a: `كل حجر كريم له طاقة وخصائص فريدة ، يرتديها البعض لهذا السبب؛ والبعض الأخر يحب ارتدائها لأنها جميلة.`
            },
            {
              q: `كيف يكون اختيار المجوهرات المزينة بالأحجار الكريمة؟`,
              a: `يجب التحقق من اللون ودرجة نقاء الحجر ووزنه قبل الشراء.`
            },
            {
              q: `كيف اتحقق من جودة الحجر الكريم؟`,
              a: `تعتمد جودة أي حجر كريم على نقائه ولونه وقيراطه.`
            },
            {
              q: `ما هو أكثر الأحجار الكريمة المستخدمة في صناعة المجوهرات؟`,
              a: `الألماس.. إنه أشهر الأحجار وأكثرها شيوعًا في تصاميم المجوهرات.`
            },
          ]
        },
        pearls: {
          seo: {
            title: `تسوقي مجوهرات من اللؤلؤ في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات اللؤلؤ أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryPearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              stone: ["pearlsAr"],
            }),
          },
          contentSection: [
            {
              text: {
                value: `
              <h2>جواهر طبيعية ثمينة من تراث مصر</h2>
              اكتشفي عالم اللؤلؤ الساحر وأجعلي اللؤلؤ رمزًا لأناقتك ورقيك، واحتفظي به ككنز قيم يروي قصة الجمال الطبيعي. لذا، نقدم لكِ مجموعة ساحرة تعكس سحر اللؤلؤ الطبيعي وجماله الفريد. تضم مجوهرات متنوعة تشمل العديد من التصاميم الأنيقة والفريدة بداية من السلاسل المزينة باللؤلؤ التي تزين رقبتك بأناقة إلى الأقراط التي تبرز جمالك.

              
              `,
              },
              content: {
                value: `
              
              <h2>تسوقي أقراط وأساور وخواتم وعقد لؤلؤ </h2>
            
              <p><span>استمتعي بتجربة الأناقة الكلاسيكية مع مجموعتنا المختارة بعناية من عقد لؤلؤ طبيعي</span><span>&nbsp;</span><span>و</span><span>أقراط اللؤلؤ و أساور لؤلؤ، وخواتم لؤلؤ. اختاري القطع التي تعكس ذوقك الشخصي، واستمتعي بإطلالة رائعة تبرز جمالك الطبيعي وتجذب إليكِ كل الأنظار. تصاميم رائعة تحتفل بجمال اللؤلؤ الراقي وتجمع بين الأناقة والبساطة، ستساهم في إضفاء لمسة من الجمال والرقي على إطلالتك. يمكنك الاختيار من بين&nbsp;</span><a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;">&nbsp;</a><a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;">الذهب</a><a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/yellow-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">الأصفر</span></u></a><span>&nbsp;، و</span><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">الذهب</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/white-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">الأبيض</span></u></a><span>&nbsp;، و</span><a href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">الذهب</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none;"><u><span style="color:#1155cc;">الوردي</span></u></a><span>&nbsp;</span><span>الرومانسي. بغض النظر عن النمط الشخصي الذي تفضلينه، فإن مجوهرات لازوردي المزينة باللؤلؤ تضفي لمسة من الأناقة والفخامة وتبرز جمالك الطبيعي</span></p>

              
              <h2>تحف فنية رائعة تبرز إشراقة اللؤلؤ الطبيعي</h2>

              <p>
								<span>تألقي مع لازوردي </span><a href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">مع</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">سلاسل</span></u></a><span> لؤلؤ في تصاميم فاخرة مصممة بعناية فائقة لتبرز سحر اللؤلؤ وجماله؛ حيث تُعتبر كل سلسلة مزينة باللؤلؤ تحفة حرفية رائعة، تظهر الإشراق الطبيعي والجاذبية الساحرة هذه </span><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الأحجار</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-eg/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الكريمة</span></u></a><span>. تأتي السلاسل المزينة باللؤلؤ في مجموعة من التصاميم والأشكال، بما في ذلك السلاسل المزينة بلؤلؤة واحدة أو بعدة لآلئ لتناسب جميع الأذواق والاستايلات. اختاري السلسلة التي تعجبك من مجموعتنا المتنوعة، ودعي اللؤلؤ يضفي لمسة من السحر والجمال الخالدي على إطلالتك. وعندما يتعلق الأمر بالأقراط المزينة باللؤلؤ، تقدم لازوردي </span><a href="https://www.lazurde.com/ar-eg/jewelry/earrings" style="text-decoration:none"><u><span style="color:#1155cc">أقراط</span></u></a><span> مزينة باللؤلؤ في مجموعة متنوعة من الأحجام والأشكال، تضم الأقراط الصغيرة أو الأقراط الجريئة ذات التصاميم المعقدة، مما يتيح لك اختيار النمط الذي يناسب ذوقك ومناسبتك.</span>
							</p>

              <h2>تألقي وأضيفي لمسة من الجمال الخالد إلى إطلالتك مع مجوهرات لؤلؤ فاخرة و راقية</h2>
              
              <p><span>استمتعي بأناقة ورقة اللؤلؤ ودعيه يصبح جزءًا لا يتجزأ من أسلوبك الخاص. لا شك أن اللؤلؤ يحمل في طياته سحرًا لا يقاوم وجمالًا خالدًا. وعليه، هذه دعوة منا لاكتشاف مجموعة لازوردي من السلاسل المزينة باللؤلؤ واقراط اللؤلؤ&nbsp;</span><a href="https://www.lazurde.com/ar-sa/jewelry/bracelets-anklets" style="text-decoration:none;"><u><span style="color:#1155cc;">وأساور</span></u></a><span>&nbsp;اللؤلؤ&nbsp;</span><a href="https://www.lazurde.com/ar-eg/jewelry/rings" style="text-decoration:none;"><u><span style="color:#1155cc;">وخواتم</span></u></a><span>&nbsp;اللؤلؤ وعززي أناقتك الشخصية بلمسة راقية ورقيقة.</span></p>

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>كم تدوم المجوهرات المزينة باللؤ</h3>
              مع الاعتناء الجيد بها، يمكن أن تدوم المجوهرات المزينة باللؤلؤ طوال العمر. إن اللؤلؤ هو أكثر الأحجار الكريمة متانة وأطوالها عمرًا.
              
              <h3>هل يمكنني ارتداء المجوهرات المزينة باللؤلؤ كل يوم؟</h3>
              نعم، بكل تأكيد. سلسلة بسيطة مزينة باللؤلؤ أو أقراط صغيرة مزينة باللؤلؤ ستضيف الكثير إلى إطلالاتك اليومية.
              
              <h3>كيف يمكن الاعتناء باللؤلؤ؟</h3>
              يُنصح بمسح المجوهرات المزينة باللؤلؤ برفق بقطعة قماش للتخلص من أي أوساخ أو عطر أو عرق قبل تخزينه
              `,
              },
            },
          ],
          schema: [
            {
              q: `كم تدوم المجوهرات المزينة باللؤلؤ؟`,
              a: `مع الاعتناء الجيد بها، يمكن أن تدوم المجوهرات المزينة باللؤلؤ طوال العمر. إن اللؤلؤ هو أكثر الأحجار الكريمة متانة وأطوالها عمرًا.`
            },
            {
              q: `هل يمكنني ارتداء المجوهرات المزينة باللؤلؤ كل يوم؟`,
              a: `نعم، بكل تأكيد. سلسلة بسيطة مزينة باللؤلؤ أو أقراط صغيرة مزينة باللؤلؤ ستضيف الكثير إلى إطلالاتك اليومية.`
            },
            {
              q: `كيف يمكن الاعتناء باللؤلؤ؟`,
              a: `يُنصح بمسح المجوهرات المزينة باللؤلؤ برفق بقطعة قماش للتخلص من أي أوساخ أو عطر أو عرق قبل تخزينها.`
            },
          ]
        },
        "under-2000": {
          seo: {
            title: `تسوقي مجوهرات بأقل من 2,000 جنيه في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من المجوهرات بأسعار أقل من 2,000 جنيه أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryUnder2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              price: ["under2000"],
            }),
          },
        },
        "2000-4000": {
          seo: {
            title: `تسوقي مجوهرات بأقل من 4,000 جنيه في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من المجوهرات بأسعار أقل من 4,000 جنيه أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryunder4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              price: ["2000to4000"],
            }),
          },
        },
        "4000-8000": {
          seo: {
            title: `تسوقي مجوهرات بأقل من 8000 جنيه في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من المجوهرات بأسعار أقل من 8000 جنيه أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryunder8000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              price: ["4000to8000"],
            }),
          },
        },
        "8000-10000": {
          seo: {
            title: `تسوقي مجوهرات بأقل من 10,000 جنيه في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من المجوهرات بأسعار أقل من 10,000 جنيه أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryunder10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              price: ["8000to10000"],
            }),
          },
        },
        "10000-above": {
          seo: {
            title: `تسوقي مجوهرات بأكثر من 10,000 جنيه في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من المجوهرات بأسعار تبدأ من 10,000 جنيه أونلاين في مصر، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelryAr?.jewelryAbove10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              price: ["10000above"],
            }),
          },
        },
      },
    },
    "lab-grown-diamonds": {
      banner: null,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `تسوقي عقود ودلايات الماس صناعي من إتيرنا في مصر | Page <number> | لازوردي مصر`,
            description: `استكشفي مجموعتنا من عقود ودلايات الالماس الصناعي أونلاين في مصر وبتصاميم فاخرة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersLabGrownDiamondAr?.necklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
              category: ["necklace"],
            }),
          },
        },
        rings: {
          seo: {
            title: `تسوقي خواتم الماس صناعي من إتيرنا في مصر | Page <number> | لازوردي مصر`,
            description: `استكشفي مجموعتنا من خواتم الالماس الصناعي أونلاين في مصر، وبتصاميم فاخرة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersLabGrownDiamondAr?.rings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
              category: ["rings"],
            }),
          },
        },
        bracelets: {
          seo: {
            title: `تسوقي أساور الماس صناعي من إتيرنا في مصر | Page <number> | لازوردي مصر`,
            description: `استكشفي مجموعتنا من أساور الالماس الصناعي أونلاين في مصر، وبتصاميم فاخرة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersLabGrownDiamondAr?.bracelets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
              category: ["bracelets"],
            }),
          },
        },
        earrings: {
          seo: {
            title: `تسوقي أقراط الماس صناعي من إتيرنا في مصر | Page <number> | لازوردي مصر`,
            description: `استكشفي مجموعتنا من أقراط الالماس الصناعي أونلاين في مصر، وبتصاميم فاخرة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersLabGrownDiamondAr?.earrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
              category: ["earrings"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `تسوقي جميع مجوهرات الالماس الصناعي من إتيرنا | Page <number> | لازوردي مصر`,
            description: `اكتشف مجموعة فاخرة من مجوهرات الالماس الصناعي أونلاين في لازوردي مصر. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersLabGrownDiamondAr?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
            }),
          },
        },
        "best-sellers": {
          seo: {
            title: `تسوقي أفضل مجموعة مجوهرات الماس صناعي مبيعًا من إتيرنا في مصر | Page <number> | لازوردي مصر`,
            description: `استكشفي مجموعتنا من أفضل مجوهرات الالماس الصناعي مبيعاً أونلاين في مصر، وبتصاميم فاخرة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersLabGrownDiamondAr?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
            }),
          },
        },
        "new-in": {
          seo: {
            title: `تسوقي أحدث وأجدد تصاميم مجوهرات لالماس الصناعي من إتيرنا | Page <number> | لازوردي مصر`,
            description: `استكشفي مجموعتنا من أحدث تصاميم الالماس الصناعي أونلاين في مصر، وبتصاميم فاخرة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersLabGrownDiamondAr?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
              newIn: ["newIn"],
            }),
          },
        },
        "under-30000": {
          seo: {
            title: `تسوقي مجوهرات الماس صناعي بأقل من 30,000 جنيه من إتيرنا في مصر | Page <number> | لازوردي مصر`,
            description: `استكشفي مجموعتنا من مجوهرات الالماس الصناعي بأقل من 30,000 جنيه أونلاين في مصر، وبتصاميم فاخرة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersLabGrownDiamondAr?.under30000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
              price: ["under30000"],
            }),
          },
        },
        "30000-50000": {
          seo: {
            title: `تسوقي مجوهرات الماس صناعي بأقل من 50,000 جنيه من إتيرنا في مصر | Page <number> | لازوردي مصر`,
            description: `استكشفي مجموعتنا من مجوهرات الالماس الصناعي بأقل من 50,000 جنيه أونلاين في مصر، وبتصاميم فاخرة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersLabGrownDiamondAr?.under50000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
              price: ["30000to50000"],
            }),
          },
        },
        "50000-above": {
          seo: {
            title: `تسوقي مجوهرات الماس صناعي بأكثر من 50,000 جنيه من إتيرنا في مصر | Page <number> | لازوردي مصر`,
            description: `استكشفي مجموعتنا من مجوهرات الالماس الصناعي بأكثر من 50,000 جنيه أونلاين في مصر، وبتصاميم فاخرة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersLabGrownDiamondAr?.above50000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
              price: ["50000above"],
            }),
          },
        },
      },
    },
  },
  missl: {
    "shop-all": {
      seo: {
        title: "تسوقي جميع مجوهرات مس لازوردي | Page <number> | لازوردي مصر",
        description: `اكتشف مجموعة فاخرة من مجوهرات مس أل أونلاين في لوزوردي مصر. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMisslAr?.shopAll,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["misslAr"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "best-sellers": {
      seo: {
        title: `تسوقي أفضل مجوهرات مس لازوردي في مصر | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من أفضل مجوهرات مس أل أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMisslAr?.bestSellers,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["misslAr"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "new-in": {
      seo: {
        title: `تسوقي أحدث صاميم مس لازوردي في مصر | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من تصميمات مس أل الجديدة أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMisslAr?.newIn,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["misslAr"], newIn: ["newIn"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "special-price": {
      seo: {
        title: `احصلي على أفضل الأسعار على مجوهرات مس لازوردي في مصر | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل أونلاين في مصر، بقيمة رائعة وأفضل الأسعار. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },

      banner: bannersMisslAr?.specialPrice,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["misslAr"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "yellow-gold": {
      seo: {
        title: `تسوقي مجوهرات مس إل ذهب أصفر في مصر | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل من الذهب الأصفر أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMisslAr?.yellowGold,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          metalColor: ["yellowGoldAr"],
        }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "white-gold": {
      seo: {
        title: `تسوقي مجوهرات مس إل ذهب أبيض في مصر | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل من الذهب الأبيض أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMisslAr?.whiteGold,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          metalColor: ["whiteGoldAr"],
        }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "rose-gold": {
      seo: {
        title: `تسوقي مجوهرات مس إل ذهب وردي في مصر | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل من الذهب الوردي أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMisslAr?.roseGold,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          metalColor: ["roseGoldAr"],
        }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "multicolor-gold": {
      seo: {
        title: `تسوقي مجوهرات ذهب متعدد الألوان من مس أل في مصر | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من مجوهرات ذهب متعدد الألوان من مس أل أونلاين في مصر، ووالتي تقدم تصاميم فاخرة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
      },
      banner: bannersMisslAr?.multiColorGold,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          metalColor: [
            "yellowWhiteGoldAr",
            "yellowWhiteRoseGoldAr",
            "whiteRoseGoldAr",
            "yellowRoseGoldAr",
          ],
        }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    diamonds: {
      seo: {
        title: `تسوقي مجوهرات مس أل الألماس في مصر | Page <number> | لازوردي مصر`,
        description: `استمتعي بتصفح مجموعتنا من مجوهرات مس أل الماسية أونلاين في مصر، والتي تقدم تصاميم رائعة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
      },
      banner: bannersMisslAr?.diamond,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          diamonds: ["diamondsAr"],
        }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "colored-stones": {
      seo: {
        title: `تسوقي مجوهرات أحجار ملونة مس إل في مصر | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل من الأحجار الملونة أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMisslAr?.coloredStone,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          stone: ["coloredStonesAr"],
        }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    essentials: {
      seo: {
        title: `تسوقي مجوهرات مس إل لؤلؤ في مصر | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من مجوهرات مس لو من اللؤلؤ أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },

      banner: bannersMisslAr?.essentials,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["misslAr"], collection: ["essentialsAr"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "under-2000": {
      seo: {
        title: `مجوهرات مس أل تحت 2,000 جنيه | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل بمبلغ أقل من 2,000 جنيه أونلاين في مصر، ووالتي تقدم تصاميم رائعة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
      },
      banner: bannersMisslAr?.under2000,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          price: ["under2000"],
        }),
      },
    },
    "2000-4000": {
      seo: {
        title: `مجوهرات مس أل بين 2000-4000 جنيه | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من مجوهرات "مس أل" بمبلغ أقل من 4000 جنيه أونلاين في مصر، ووالتي تقدم تصاميم رائعة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
      },
      banner: bannersMisslAr?.under4000,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          price: ["2000to4000"],
        }),
      },
    },
    "4000-8000": {
      seo: {
        title: `مجوهرات مس أل بين 4000-8000 جنيه | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل بمبلغ أقل من 8000 جنيه أونلاين في مصر، ووالتي تقدم تصاميم رائعة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
      },
      banner: bannersMisslAr?.under8000,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          price: ["4000to8000"],
        }),
      },
    },
    "8000-10000": {
      seo: {
        title: `مجوهرات مس أل بين 8000-10000 جنيه | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل بمبلغ أقل من 10000 جنيه أونلاين في مصر، ووالتي تقدم تصاميم رائعة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
      },
      banner: bannersMisslAr?.under10000,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          price: ["8000to10000"],
        }),
      },
    },
    "10000-above": {
      seo: {
        title: `مجوهرات مس أل أعلى من 10,000 جنيه | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل بمبلغ أكثر من 4000 جنيه أونلاين في مصر، ووالتي تقدم تصاميم رائعة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
      },
      banner: bannersMisslAr?.above10000,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          price: ["10000above"],
        }),
      },
    },
    "necklaces-pendants": {
      seo: {
        title: `تسوقي عقود ودلايات مس أل | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من قلادات وعقود مس أل أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: null,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          category: ["necklace"],
        }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
      children: {
        "shop-all": {
          seo: {
            title: `تسوقي جميع العقود والدلايات من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من جميع العقود والدلايات اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "pendants-chain": {
          seo: {
            title: `تسوقي سلاسل دلايات مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من سلاسل دلايات اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.pendantsChain,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              type: ["pendantChainAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        pendants: {
          seo: {
            title: `تسوقي مجوهرات دلايات مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات دلايات اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.pendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              type: ["pendantAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        choker: {
          seo: {
            title: `تسوقي عقود ودلايات تشوكر من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات تشوكر اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.chokar,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              type: ["chokerAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        layered: {
          seo: {
            title: `تسوقي عقود ودلايات متعددة الطبقات من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات متعددة الطبقات اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.layered,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              type: ["layeredAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        chains: {
          seo: {
            title: `تسوقي سلاسل عقود ودلايات مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من سلاسل عقود ودلايات اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.chains,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              type: ["chainNecklaceAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        charms: {
          seo: {
            title: `تسوقي دلايات تشارم من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من دلايات تشارم اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.charms,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              type: ["charmsNecklaceAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "best-sellers": {
          seo: {
            title: `تسوقي أفضل العقود والدلايات مبيعاً من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أفضل العقود والدلايات مبيعاً اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "new-in": {
          seo: {
            title: `تسوقي أحدث وأجدد العقود والدلايات من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أحدث وأجدد العقود والدلايات اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              newIn: ["newIn"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "special-price": {
          seo: {
            title: `تسوقي عقود ودلايات بأسعار خاصة من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات بأسعار خاصة اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "yellow-gold": {
          seo: {
            title: `تسوقي عقود ودلايات من الذهب الأصفر من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات من الذهب الأصفر اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              metalColor: ["yellowGoldAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "white-gold": {
          seo: {
            title: `تسوقي عقود ودلايات من الذهب الأبيض من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات من الذهب الأبيض اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              metalColor: ["whiteGoldAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "rose-gold": {
          seo: {
            title: `تسوقي عقود ودلايات من الذهب الوردي من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات من الذهب الوردي اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              metalColor: ["roseGoldAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "multicolor-gold": {
          seo: {
            title: `تسوقي عقود ودلايات من الذهب متعدد الألوان من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات من الذهب متعدد الألوان اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.multiColoredGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              metalColor: [
                "yellowWhiteGoldAr",
                "yellowWhiteRoseGoldAr",
                "yellowRoseGoldAr",
                "whiteRoseGoldAr",
              ],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        diamonds: {
          seo: {
            title: `تسوقي عقود ودلايات ألماس من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات ألماس اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.diamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              diamonds: ["diamondsAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "colored-stones": {
          seo: {
            title: `تسوقي عقود ودلايات بالأحجار الملونة من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات بالأحجار الملونة اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              stone: ["coloredStonesAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        pearls: {
          seo: {
            title: `تسوقي عقود ودلايات لؤلؤ من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات لؤلؤ اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              stone: ["pearlsAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        essentials: {
          seo: {
            title: `تسوقي عقود ودلايات لؤلؤ من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات لؤلؤ اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.essentials,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              collection: ["essentialsAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "under-4000": {
          seo: {
            title: `تسوقي عقود ودلايات مس أل تحت 4000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات تحت 4000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              price: ["under4000"],
            }),
          },
        },
        "4000-6000": {
          seo: {
            title: `تسوقي عقود ودلايات مس أل بين 4000-6000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات بين 4000-6000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.under6000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              price: ["4000to6000"],
            }),
          },
        },
        "6000-8000": {
          seo: {
            title: `تسوقي عقود ودلايات مس أل بين 6000-8000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات بين 6000-8000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.under8000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              price: ["6000to8000"],
            }),
          },
        },
        "8000-10000": {
          seo: {
            title: `تسوقي عقود ودلايات مس أل بين 8000-10000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات بين 8000-10000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.under10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              price: ["8000to10000"],
            }),
          },
        },
        "10000-above": {
          seo: {
            title: `تسوقي عقود ودلايات مس أل أعلى من 10,000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من عقود ودلايات أعلى من 10,000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.neckPend?.above10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              price: ["10000above"],
            }),
          },
        },
      },
    },
    rings: {
      seo: {
        title: `تسوقي خواتم مس أل | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من خواتم مس أل أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMisslAr?.rings?.lOne,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["misslAr"], category: ["rings"] }),
        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
      children: {
        statement: {
          seo: {
            title: `تسوقي خواتم ستيتمنت من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم ستيتمنت اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.statement,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              type: ["statementAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "two-headed": {
          seo: {
            title: `تسوقي خواتم مس أل ذو رأسين في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم ذو رأسين اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.twoHeaded,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              type: ["twoHeadedAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        eternity: {
          seo: {
            title: `تسوقي خواتم إيترنيتي مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم إيترنيتي اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.eternity,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              type: ["eternityAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        band: {
          seo: {
            title: `تسوقي خواتم زواج من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم زواج اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.band,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              type: ["bandAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "shop-all": {
          seo: {
            title: `تسوقي جميع خواتم مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من جميع الخواتم اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "best-sellers": {
          seo: {
            title: `تسوقي أفضل خواتم مس أل مبيعاً في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أفضل الخواتم مبيعاً اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "new-in": {
          seo: {
            title: `تسوقي أحدث تصاميم خواتم مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أحدث تصاميم الخواتم اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              newIn: ["newIn"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "special-price": {
          seo: {
            title: `تسوقي خواتم مس أل بأسعار خاصة في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الخواتم بأسعار خاصة اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "yellow-gold": {
          seo: {
            title: `تسوقي خواتم ذهب أصفر من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم الذهب الأصفر اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              metalColor: ["yellowGoldAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "white-gold": {
          seo: {
            title: `تسوقي خواتم ذهب أبيض من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم الذهب الأبيض اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              metalColor: ["whiteGoldAr"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "rose-gold": {
          seo: {
            title: `تسوقي خواتم ذهب وردي من مس أل من في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم الذهب الوردي اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              metalColor: ["roseGoldAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "multicolor-gold": {
          seo: {
            title: `تسوقي خواتم مس أل من الذهب متعدد الألوان في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم من الذهب متعدد الألوان اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.multiColoredGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              metalColor: [
                "yellowWhiteGoldAr",
                "yellowWhiteRoseGoldAr",
                "yellowRoseGoldAr",
                "whiteRoseGoldAr",
              ],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        diamonds: {
          seo: {
            title: `تسوقي خواتم الماس من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم الالماس اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.diamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              diamonds: ["diamondsAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "colored-stones": {
          seo: {
            title: `تسوقي خواتم مس أل بالأحجار الملونة في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم الأحجار الملونة اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              stone: ["coloredStonesAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        pearls: {
          seo: {
            title: `تسوقي خواتم لؤلؤ من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم اللؤلؤ اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              stone: ["pearlsAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        essentials: {
          seo: {
            title: `تسوقي خواتم لؤلؤ من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من خواتم اللؤلؤ اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.essentials,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              collection: ["essentialsAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "under-4000": {
          seo: {
            title: `تسوقي خواتم مس أل تحت 4000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الخواتم تحت 4000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              price: ["under4000"],
            }),
          },
        },
        "4000-6000": {
          seo: {
            title: `تسوقي خواتم مس أل بين 4000-6000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الخواتم بين 4000-6000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.under6000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              price: ["4000to6000"],
            }),
          },
        },
        "6000-8000": {
          seo: {
            title: `تسوقي خواتم مس أل بين 6000-8000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الخواتم بين 6000-8000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.under8000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              price: ["6000to8000"],
            }),
          },
        },
        "8000-10000": {
          seo: {
            title: `تسوقي خواتم مس أل بين 8000-10000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الخواتم بين 8000-10000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.under10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              price: ["8000to10000"],
            }),
          },
        },
        "10000-above": {
          seo: {
            title: `تسوقي خواتم مس أل أعلى من 10,000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الخواتم أعلى من 10,000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.rings?.above10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              price: ["10000above"],
            }),
          },
        },
      },
    },
    "bracelets-anklets": {
      seo: {
        title: `تسوقي أساور وخلاخيل مس أل | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من أساور وخلاخيل مس أل أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMisslAr?.braceletsAnklets?.lOne,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          category: ["bracelets"],
        }),
        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
      children: {
        chain: {
          seo: {
            title: `تسوقي سلاسل أساور وخلاخيل من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من سلاسل الأساور والخلاخيل اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.chain,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              type: ["chainBraceletAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        cuff: {
          seo: {
            title: `تسوقي أساور وخلاخيل كوف من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل الكوف اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.cuff,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              type: ["cuffAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        bangle: {
          seo: {
            title: `تسوقي أساور وخلاخيل بنغل من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل البنغل اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.bangle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              type: ["bangleAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        charm: {
          seo: {
            title: `تسوقي أساور وخلاخيل تشارم من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل التشارم اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.charm,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              type: ["charmsBraceletsAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "shop-all": {
          seo: {
            title: `تسوقي جميع أساور وخلاخيل مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من جميع الأساور والخلاخيل اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "best-sellers": {
          seo: {
            title: `تسوقي أفضل أساور وخلاخيل مس أل مبيعاً في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أفضل الأساور والخلاخيل مبيعاً اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "new-in": {
          seo: {
            title: `تسوقي أحدث أساور وخلاخيل مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أحدث الأساور والخلاخيل اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              newIn: ["newIn"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "special-price": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل بأسعار خاصة في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الأساور والخلاخيل بأسعار خاصة اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "yellow-gold": {
          seo: {
            title: `تسوقي أساور وخلاخيل ذهب أصفر من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل الذهب الأصفر اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              metalColor: ["yellowGoldAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "white-gold": {
          seo: {
            title: `تسوقي أساور وخلاخيل ذهب أبيض من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل الذهب الأبيض اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              metalColor: ["whiteGoldAr"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "rose-gold": {
          seo: {
            title: `تسوقي أساور وخلاخيل ذهب وردي من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل الذهب الوردي اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              metalColor: ["roseGoldAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "multicolor-gold": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل من الذهب متعدد الألوان في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل الذهب متعدد الألوان اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.multiColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              metalColor: [
                "yellowWhiteGoldAr",
                "yellowWhiteRoseGoldAr",
                "yellowRoseGoldAr",
                "whiteRoseGoldAr",
              ],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        diamonds: {
          seo: {
            title: `تسوقي أساور وخلاخيل الماس من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `استمتعي بتصفح مجموعتنا من مجوهرات "مس أل" الماسية أونلاين في مصر، والتي تقدم تصاميم رائعة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.diamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              diamonds: ["diamondsAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "colored-stones": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل بالأحجار الملونة في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من مجوهرات مس أل من الأحجار الملونة أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              stone: ["coloredStonesAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        pearls: {
          seo: {
            title: `تسوقي أساور وخلاخيل لؤلؤ من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل اللؤلؤ اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              stone: ["pearlsAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        essentials: {
          seo: {
            title: `تسوقي أساور وخلاخيل لؤلؤ من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل اللؤلؤ اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.essentials,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              collection: ["essentialsAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "under-4000": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل تحت 4000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل تحت 4000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              price: ["under4000"],
            }),
          },
        },
        "4000-6000": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل بين 4000-6000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل بين 4000-6000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.under6000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              price: ["4000to6000"],
            }),
          },
        },
        "6000-8000": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل بين 6000-8000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل بين 6000-8000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.under8000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              price: ["6000to8000"],
            }),
          },
        },
        "8000-10000": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل بين 8000-10000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل بين 8000-10000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.under10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              price: ["8000to10000"],
            }),
          },
        },
        "10000-above": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل أعلى من 10,000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل أعلى من 10000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.braceletsAnklets?.above10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              price: ["10000above"],
            }),
          },
        },
      },
    },
    earrings: {
      seo: {
        title: `تسوقي أقراط مس أل | Page <number> | لازوردي مصر`,
        description: `اكتشفي مجموعتنا من أقراط مس أل أونلاين في مصر، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMisslAr?.earrings?.lOne,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          category: ["earrings"],
        }),
        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
      children: {
        stud: {
          seo: {
            title: `تسوقي أقراط صغيرة من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الأقراط الصغيرة اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.stud,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              type: ["studAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        chandelier: {
          seo: {
            title: `تسوقي أقراط شاندلير من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أقراط الشاندلير اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.chandelier,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              type: ["chandelierAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        hoop: {
          seo: {
            title: `تسوقي أقراط دائرية من مس في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الاقراط الدائرية اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.hoop,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              type: ["hoopAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        drop: {
          seo: {
            title: `تسوقي أقراط متدلية من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الأقراط المتدلية اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.drop,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              type: ["dropAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "clip-on": {
          seo: {
            title: `تسوقي أقراط كليب من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الأقراط الكليب اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.clipOn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              type: ["clipOnAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        cuff: {
          seo: {
            title: `تسوقي أقراط كوف من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الأقراط الكوف اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.cuff,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              type: ["cuffAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "shop-all": {
          seo: {
            title: `تسوقي جميع أقراط مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من جميع الأقراط اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "best-sellers": {
          seo: {
            title: `تسوقي أفضل أقراط مس أل مبيعاً في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أفضل الأقراط مبيعاً اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "new-in": {
          seo: {
            title: `تسوقي أحدث أقراط مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أحدث الأقراط اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              newIn: ["newIn"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "special-price": {
          seo: {
            title: `تسوقي أقراط مس أل بأسعار خاصة في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الأقراط بأسعار خاصة اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "yellow-gold": {
          seo: {
            title: `تسوقي أقراط ذهب أصفر من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أقراط الذهب الأصفر اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              metalColor: ["yellowGoldAr"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "white-gold": {
          seo: {
            title: `تسوقي أقراط ذهب أبيض من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أقراط الذهب الأبيض اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              metalColor: ["whiteGoldAr"],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "rose-gold": {
          seo: {
            title: `تسوقي أقراط ذهب وردي من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أقراط الذهب الوردي اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              metalColor: ["roseGoldAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "multicolor-gold": {
          seo: {
            title: `تسوقي أقراط مس أل من الذهب متعدد الألوان في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أقراط الذهب متعدد الألوان اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.multiColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              metalColor: [
                "yellowWhiteGoldAr",
                "yellowWhiteRoseGoldAr",
                "yellowRoseGoldAr",
                "whiteRoseGoldAr",
              ],
            }),
            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        diamonds: {
          seo: {
            title: `تسوقي أقراط الماس من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أقراط الالماس اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.diamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              diamonds: ["diamondsAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "colored-stones": {
          seo: {
            title: `تسوقي أقراط مس أل بالأحجار الملونة في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الأقراط بالأحجار الملونة اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              stone: ["coloredStonesAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        pearls: {
          seo: {
            title: `تسوقي أقراط لؤلؤ من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أقراط اللؤلؤ اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              stone: ["pearlsAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        essentials: {
          seo: {
            title: `تسوقي أقراط لؤلؤ من مس أل في مصر | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أقراط اللؤلؤ اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.essentials,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              collection: ["essentialsAr"],
            }),

            ribbons: {
              onlineExclusive: {
                color: "#cececece",
                text: "Online Exclusive",
              },
              newIn: { color: "#cececece", text: "New In" },
            },
          },
        },
        "under-4000": {
          seo: {
            title: `تسوقي أقراط مس أل تحت 4000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الأقراط تحت 4000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              price: ["under4000"],
            }),
          },
        },
        "4000-6000": {
          seo: {
            title: `تسوقي أقراط مس أل بين 4000-6000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الأقراط بين 4000-6000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.under6000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              price: ["4000to6000"],
            }),
          },
        },
        "6000-8000": {
          seo: {
            title: `تسوقي أقراط مس أل بين 6000-8000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الأقراط بين 6000-8000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.under8000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              price: ["6000to8000"],
            }),
          },
        },
        "8000-10000": {
          seo: {
            title: `تسوقي أقراط مس أل بين 8000-10000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من الأقراط بين 8000-10000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.under10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              price: ["8000to10000"],
            }),
          },
        },
        "10000-above": {
          seo: {
            title: `تسوقي أقراط مس أل أعلى من 10,000 جنيه | Page <number> | لازوردي مصر`,
            description: `اكتشفي مجموعتنا من أقراط أعلى من 10,000 جنيه اون لاين من مس أل في مصر، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMisslAr?.earrings?.above10000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              price: ["10000above"],
            }),
          },
        },
      },
    },
  },
};