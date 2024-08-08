import { SingleRegionPlpData } from "lib/types/common";
import { generateFacets } from "../functions";
import { categoryIdByRegion } from "general-config";
import {
  bannerBrands,
  bannersDiamond,
  bannersFashionJewelry,
  bannersGiftsOccasions,
  bannersGiftsOccasionsBrand,
  bannersGold,
  bannersJewelry,
  bannersLoveEngagement,
  bannersMissl,
} from "../banners-ar-ae";

export const arAe: SingleRegionPlpData = {
  lazurde: {
    lazurde: {
      seo: {
        title: `تسوقي مجوهرات لازوردي في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا الرائعة من مجوهرات لازوردي أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannerBrands?.lazurde,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["lazurdeAr"],
        }),
      },
    },
    waves: {
      seo: {
        title: `تسوقي مجوهرات ويفز في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا الرائعة من مجوهرات ويفز أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannerBrands?.waves,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["wavesAr"],
        }),
      },
    },
    instyle: {
      seo: {
        title: `تسوقي مجوهرات إنستايل في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا الرائعة من مجوهرات إنستايل أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannerBrands?.instyle,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["instyleAr"],
        }),
      },
    },
    "miss-l": {
      seo: {
        title: `تسوقي مجوهرات مس أل لازوردي في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا الرائعة من مجوهرات مس أل لازوردي أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannerBrands?.missl,
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
            title: `تسوقي مجوهرات لازوردي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات لازوردي أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannerBrands?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
            }),
          },
        },
        instyle: {
          seo: {
            title: `تسوقي مجوهرات إنستايل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات إنستايل أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannerBrands?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["instyleAr"] }),
          },
        },
        "miss-l": {
          seo: {
            title: `تسوقي جميع مجوهرات مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا مس أل اونلاين في الإمارات، التي تقدم تصاميم فاخرة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
          },
          banner: bannerBrands?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["misslAr"] }),
          },
        },
        waves: {
          seo: {
            title: `تسوقي مجوهرات ويفز في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات ويفز أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannerBrands?.waves,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["wavesAr"] }),
          },
        },
      },
    },
    diamond: {
      seo: {
        title:
          "تسوقي مجوهرات الماس في الإمارات | الماس | Page <number> | لازوردي الإمارات",
        description:
          "اكتشفي مجموعتنا الرائعة من المجوهرات الألماس بتصميمات فاخرة في الإمارات، بما في ذلك الخواتم والقلائد والأساور وغيرها. احصل على توصيل مجاني وإمكانية الإرجاع مع خيارات للشراء الفوري والدفع لاحقًا.",
      },
      banner: bannersDiamond?.diamondJewelry,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `اتسوقي قلادات وعقود ألماس في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من قلادات وعقود الألماس أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.necklacesPendants,
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
                value: `<h2>انطلقي معنا إلى عالم السحر والبريق للسلاسل والعقود الالماس</h2>

                <p>
				  &#xa0;يمكنك الآن الاختيار من بين العديد من القطع المذهلة، بما في ذلك السلاسل الألماس والدلايات <a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">الألماس</span></u></a> والسلاسل التنس الألماس وتشوكر ألماس التي تضيف لمسة من الجمال والأناقة على إطلالتك وكأنك نجمة تسحر الجميع بذوقها الرفيع وتألقها الاستثنائي.
		          	</p>

              `,
              },
              content: {
                value: `
              
              <h2>سلاسل وعقود الماس لكل مناسبة في الإمارات الإمارات</h2>
              
              مجموعة فريدة من العقود و القلائد الألماس تيتح لك التألق والظهور بمظهر رائع في أي مناسبة. تتميز مجموعاتنا بالدقة والعناية في الصنع، حيث يتم استخدام الماس الأصلي عالي الجودة ضمن تصميمات فريدة ولمسة نهائية راقية تبرز جمال الألماس بأفضل شكل ممكن. فقد تم صياغة كل قطعة بعناية فائقة، مما يجعلها إضافة فاخرة لا تنسى لأي مجموعة من المجوهرات. وإذا كنتِ ممن يفضلون البساطة والسحر الهادئ، فإننا نقدم لك عقد الماس كلاسيكي فاتن تلائم ذوقك بشكل مثالي. واحدة من قطعنا المفضلة هي مجموعتنا من سلاسل التنس الألماس التي تخلق دائرة لا تنقطع من الحب والجمال. يمكنك حتى اختيار سلسلة ألماس بسيطة لتبرز جمال إطلالاتك اليومية.

              <h2>دلايات عقود ألماس أنيقة ومتعددة الاشكال</h2>
              
              ويمكنك إضافة لمسة من السحر إلى السلسلة العادية التي تمتلكينها في مجموعتك من خلال ارتداء إحدى السلاسل الألماس المذهلة من لازوردي، ولا سيما وأن قطع هذه المجموعة تتميز بتصميم أنيق وجمال دائم، يجعل من السهل عليكِ التألق في أي مناسبة. دلايات الماس أنيقة ومتعددة الاستخدامات تتألق وتتوهج لتحكي قصة خاصة ساحرة ويمكن تنسيقها مع سلاسل مختلفة لابتكار طلة مميزة واستثنائية. 
              
              <h2>سلاسل ودلايات الماس لأناقة لا حدود لها</h2>
              
              اكتشفي جاذبية السلاسل والدلايات الالماس من لازوردي التي تضيف لمسة من الأناقة والجمال على إطلالتك اليومية بكل يسر وسهولة. إنها تجمع بين البساطة والتألق، مما يجعلها الخيار المثالي لكل مناسبة. الألماس هو رمز للجمال والقوة، ويعتبر أحد أثمن المواد التي تزين العالم. إنه لا يقتصر على المناسبات الخاصة فقط، بل يمكن ارتداؤه واستخدامه في حياتنا اليومية أيضًا. وعليه، ندعوك لاكتشاف مجموعتنا التي تضم كل شيء بداية من القطع اليومية التي ستسحر قلبك، وصولاً إلى القطع الرائعة التي ستجذب بالتأكيد كل الأنظار.

              <h2>الأسئلة الشائعة:</h2>


               <h3>كيف اعتني بالسلسلة أو الدلاية؟</h3>
               ما عليك سوى وضع السلسلة أو الدلاية في الماء والصابون لبضع دقائق ثم التجفيف بقطعة قماش جافة.
  
                <h3>ما الأمور التي يجب أخذها في الاعتبار عند شراء عقد الماس ناعم؟</h3>
                <p>عند شراء<a href="https://www.lazurde.com/ar-ae/gold/necklaces-pendants" style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/necklaces-pendants" style="text-decoration:none;"><u><span style="color:#1155cc;">سلسلة</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/necklaces-pendants" style="text-decoration:none;"><u><span style="color:#1155cc;">&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/necklaces-pendants" style="text-decoration:none;"><u><span style="color:#1155cc;">ذهب</span></u></a> بلاية مزينة بالألماس، يجب التحقق من القيراط والدمغة و الألماس.</p>
                
                <h3>هل يمكنني ارتداء طقم مجوهرات مكون من معادن أو أحجار كريمة أخرى؟</h3>

                <p>
				نعم، يمكن ارتداء <a href="https://www.lazurde.com/ar-ae/jewelry/sets" style="text-decoration:none"><u><span style="color:#1155cc">طقم</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/sets" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/sets" style="text-decoration:none"><u><span style="color:#1155cc">المجوهرات</span></u></a><span dir="ltr"><span dir="ltr"></span> </span><span>الماس مع</span><span dir="ltr"><span dir="ltr"></span> </span><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc"><span></span></u>أحجار</span></a><a href="https://www.lazurde.com/ar-sa/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">كريمة</span></u></a> أخرى. تأكدي من أن المجموعة تكمل التصميم العام لاطلالتك.
	          		</p>

              
              `,
              },
            },
          ],
          schema: [
            {
              q: `كيف اعتني  بالسلسلة أو الدلاية؟`,
              a: `ما عليك سوى وضع السلسلة أو الدلاية في الماء والصابون لبضع ساعات ثم التجفيف بقطعة قماش جافة`
            },
            {
              q: `ما الأمور التي يجب أخذها في الاعتبار عند شراء سلسلة بلاية مزينة بالألماس؟`,
              a: `عند شراء سلسلة ذهب بلاية مزينة بالألماس، يجب التحقق من القيراط والدمغة و الألماس`
            },
            {
              q: `هل يمكنني ارتداء طقم مجوهرات مكون من معادن أو أحجار كريمة أخرى؟`,
              a: `نعم، يمكن أن يضيف دمج طقم المجوهرات مع معادن أو أحجار كريمة أخرى بعدًا. تأكدي من أن المجموعة تكمل التصميم العام لاطلالتك`
            },
          ]
        },
        rings: {
          seo: {
            title: `تسوقي خواتم نسائية ألماس في الإمارات | تصاميم خواتم ألماس | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من خواتم الألماس أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.rings,
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
              <span>اكتشفي عالم خواتم لازوردي المميزة؛ حيثما يلتقي الجمال بالابتكار في انسيابية تخلق جمالًا ساحرًا يلفت الأنظار. تحتفي مجموعة خواتم ألماس لازوردي بمعاني التناغم والاتساق المتحقق بين قطعها والتي تعزز في النهاية إطلالاتكِ اليومية وإطلالات المناسبات الخاصة. فإذا كنتي في رحلة للبحث عن الخواتم الألماس أو </span><a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><span class="Hyperlink">خواتم</span></a><a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><span class="Hyperlink">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><span class="Hyperlink">الذهب</span></a><span> أو دبل الزفاف، تدعوكِ لازوردي لاكتشاف مجموعتها وبالتأكيد ستجدي الخاتم الأمثل الذي يناسب ذوقكِ وشخصيتكِ.</span>
            </p>

              `,
              },
              content: {
                value: `
                
              <h2>دبلة ألماس جذابة لتعبري عن حبكِ للعالم!</h2>
              
              <p>
              <span>إن </span><u><span>دبل </span></u><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><span class="Hyperlink">الزفاف</span></a><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><span class="Hyperlink">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><span class="Hyperlink">الألماس</span></a><span> من لازوردي تعتبر جزءًا من أهم لحظات حياتكِ، فهي تتسم بتصاميم عصرية ترمز للرابط الأبدي الذي يجمع بين قلبين كما أنها تعكس معاني الحب والالتزام. صُممت هذه الدبل بحرفية ودقة شديدة وتم إضافة فصوص الألماس لها لتتألقي في إطلالة تخطف الأنظار. إن دبل الألماس من لازوردي هي تجسيد حي لمعاني التفاني والجمال السرمدي الذي لا يتأثر بتغير الأزمان وتعدّ القطعة التي تربطكِ بكل حب بمن ستتزوجينه. لذا، فإن انتقاءها يجب ألا يكون عشوائيًا إذا كنتي ترغبين في إبراز مدى أناقة إطلالتكِ.</span>
            </p>

              <h2>تسوقي في مجموعة خواتم الألماس</h2>
              تضم مجموعة خواتم الألماس من لازوردي تشكيلة متنوعة من حيث التصميم ونمط الألماس وعيار الذهب، لتختاري الأنسب لكِ بكل سهولة. نهتم في لازوردي بطريقة تثبيت الألماس، بحيث نجعله يتألق ببريق لا يُضاهى عندما يُزين أصابعكِ. يمكنكِ أيضًا اكتشاف مجموعة خواتم ألماس لازوردي المزينة باللؤلؤ والأحجار الملونة والتي تنضح بالحيوية والفخامة في الوقت ذاته. اختيارات لا نهائية تناسب جميع الأذواق.

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>ما هي مدة بقاء خاتم الألماس؟</h3>
              إلى الأبد! وهذا ما يجعله قطعة مميز
              
              <h3>ما الذي يجب مراعاته عند شراء خاتم ألماس؟</h3>
              يجب التحقق من القيراط والمقاس.
              
              <h3>هل يمكنني ارتداء خاتم الألماس كل يوم؟</h3>
              بالطبع! تقدم لازوردي مجموعة خواتم ألماس مصممة لتناسب مختلف إطلالاتكِ اليومية.

              <h3>ما الفرق بين خاتم الالماس وخاتم السوليتير؟</h3>

              <p>
				<span>الفرق بينهما يكمن في التصميم: خاتم الألماس يمكن أن يحتوي على حجر واحد أو أكثر بتصاميم متنوعة، بينما </span><a href="https://www.lazurde.com/ar-sa/love-engagement/solitaire-rings" style="text-decoration:none"><span class="Hyperlink" style="color:#1155cc">خاتم</span></a><a href="https://www.lazurde.com/ar-sa/love-engagement/solitaire-rings" style="text-decoration:none"><span class="Hyperlink" style="color:#1155cc">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/love-engagement/solitaire-rings" style="text-decoration:none"><span class="Hyperlink" style="color:#1155cc">السوليتير</span></a><span> يتميز بحجر ألماس واحد كبير في المركز بدون أحجار جانبية، وغالبًا ما يُستخدم كخاتم خطوبة.</span>
			</p>

      <h3>كيف يتم شراء خاتم ألماس؟</h3>


      <p>
			لشراء خاتم ألماس، اتبعي هذه الخطوات البسيطة:
			</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>حددي الميزانية: قرري المبلغ الذي ترغبين في إنفاقه.</span>
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>تعلمي المزيد حول معايير الأربعة </span><span><span></span>C</span><span><spa></span> (القيراط، الوضوح، اللون، القطع) لتقييم جودة الألماس.</span>
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>اختاري التصميم: قرري نوع التصميم والمعدن للخاتم.</span>
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>ابحثي عن بائع موثوق: اختاري متجر مجوهرات ذو سمعة طيبة.</span>
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>اطلبي شهادة الألماس: تأكدي من حصولكِ على شهادة توثيق للألماس.</span>
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>فحص الخاتم بعناية: قبل الشراء، تأكدي من جودته.</span>
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>اطلعي على سياسة الإرجاع والضمان: تأكدي من إمكانية الإرجاع أو وجود ضمان للخاتم.</span>
				</p>

        <h3> كم يبلغ سعر خاتم الألماس؟</h3>
        يختلف سعر خاتم الألماس بناءً على عدة عوامل مثل وزن الألماس (القيراط) ودرجة نقاءه ولونه، وجودة القطع، بالإضافة إلى نوع المعدن المستخدم في الخاتم. تبدأ أسعار خواتم الماس من بضع مئات من الدولارات للقطع الصغيرة ذات النقاء والجودة الأقل، وتصل إلى عدة آلاف أو حتى ملايين الدولارات للقطع الكبيرة ذات الجودة العالية والنادرة.

        <h3>ما هي المجوهرات الأخرى التي يمكن ارتداؤها مع خاتم الألماس؟</h3>
        يمكنكِ ارتداء ما يلي مع خاتم الألماس:
        <ol>
				<li>
					<a href="https://www.lazurde.com/ar-sa/diamond/earrings" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">أقراط</span></a><a href="https://www.lazurde.com/ar-sa/diamond/earrings" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/diamond/earrings" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">ألماس</span></a>
				</li>
				<li>
					<a href="https://www.lazurde.com/ar-sa/diamond/necklaces-pendants" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">قلادة</span></a><a href="https://www.lazurde.com/ar-sa/diamond/necklaces-pendants" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/diamond/necklaces-pendants" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">ألماس</span></a><span style="font-family:Arial"> رقيقة</span>
				</li>
				<li>
					<a href="https://www.lazurde.com/ar-sa/diamond/bracelets" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">أساور</span></a><a href="https://www.lazurde.com/ar-sa/diamond/bracelets" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/diamond/bracelets" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">ألماس</span></a><span style="font-family:Arial"> أو </span><a href="https://www.lazurde.com/ar-sa/gold/bracelets-anklets" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">أساور</span></a><a href="https://www.lazurde.com/ar-sa/gold/bracelets-anklets" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/gold/bracelets-anklets" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">ذهب</span></a><a href="https://www.lazurde.com/ar-sa/gold/bracelets-anklets" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">&#xa0;</span></a>
				</li>
				<li>
					<a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">خواتم</span></a><a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">&#xa0;</span></a><a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><span class="Hyperlink" style="font-family:Arial; color:#1155cc">ذهب</span></a><span style="font-family:Arial"> بتصاميم بسيطة</span>
				</li>
			</ol>
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `ما هي مدة بقاء خاتم الألماس؟`,
              a: `إلى الأبد! وهذا ما يجعلها قطعة مميزة.`
            },
            {
              q: `ما الذي يجب مراعاته عند شراء خاتم ألماس نسائي؟`,
              a: `يجب التحقق من القيراط و المقاس.`
            },
            {
              q: `هل يمكنني ارتداء الخاتم الألماس كل يوم؟`,
              a: `بالطبع! تقدم لازوردي مجموعة خواتم الماس مصممة لتناسب مختلف إطلالاتك اليومية.`
            },
          ]
        },
        bracelets: {
          seo: {
            title: `تسوقي أساور نسائية ألماس في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من أساور الألماس أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.bracelets,
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
              <h2>تسوقي أرقى تصاميم الأساور الالماس للنساء في الإمارات</h2>

              تألقي وكوني متميزة مع مجموعتنا الساحرة من أساور الماس المصممة خصيصًا للنساء. إن الأساور الألماس هي قطع فريدة من نوعها تضيف لمسة من السحر والفخامة إلى أي إطلالة. تمثل الأساور الألماس للنساء من لازوردي احتفالًا بالأنوثة والجمال الطبيعي للمرأة. إذا كنت تستعدين لحضور حفلة أو مناسبة رسمية، فإن الأسورة الألماس العريضة يمكن أن تكون اختيارًا رائعًا، حيث تمنحك الاساور الألماس لمسة من الأناقة والفخامة، أما إذا كنتِ تبحثين عن لمسة من الأناقة اليومية، فإن الأساور الألماس الناعمة يمكن أن تكون هي الاختيار المثالي لتضفي لمسة من الأناقة البسيطة إلى مظهرك.

              `,
              },
              content: {
                value: `
                 
              <h2>تمتعي بالجمال الخالد مع أساور تنس الماس من لازوردي</h2>

             <p>
			      	تألقي باقتناء أسورة تنس ألماس من مجموعة لازوردي المميزة. توفر لازوردي تشكيلة متنوعة من أساور التنس الألماس بأحجام وقيراطات مختلفة وبقصات <a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">ألماس</span></u></a> متنوعة. يمكنك الاختيار من بين أساور التنس المزينة بالألماس المقطوع بقصة البريليانت أو الألماسات المقطوعة بنمط الماركيز. تعتبر أساور التنس الألماس هذه قطعًا كلاسيكية لا تضاهى، حيث تعكس روعة الألماس وجماله بأسلوبها الفريد. تمتاز أساور التنس الألماس بأناقة خالدة وجمال الرائع مما يجعلها خيارًا رائعًا لأي مناسبة، سواء كانت مناسبة رسمية أو حدثًا خاصًا أو حتى للإطلالات اليومية.
		      	</p>

              <h2>أساور الماس عريضة وبحلقات لتتألقي دومًا</h2>
             
              لدينا أيضًا مجموعة جميلة من الأساور الألماس العريضة والأساور الألماس بحلقات. تهدف الأساور الألماس العريضة والأساور الألماس بحلقات إلى إبراز جمال الألماس ولمعانه بطريقة فريدة وراقية؛ حيث تضفي هذه الأساور لمسة من التألق والأناقة على معصمك، سواء ارتديتها بمفردها أو قمت تنسيقها مع أساور أخرى لإضفاء مظهر عصري متعدد الطبقات. مع لازوردي، يمكنك الاستمتاع بتجربة تسوق فاخرة للأساور الألماس عبر موقعنا الإلكتروني. تشتهر لازوردي بتقديم تشكيلات واسعة من الأساور الألماس المذهلة التي تلبي مختلف الأذواق والمناسبات. مهما كانت تفضيلاتك، يمكنك العثور على الأسورة الألماس المثالية بسهولة واستمتعي بتألق الألماس وروعة التصاميم واختاري الأسورة التي تعبر عن أناقتك وأسلوبك الفريد.

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>ما هو المقاس المناسب للأسوارة؟.</h3>
              يعتمد هذا على تفضيلك وارتياحك ولكن مع الحرص على عدم إنزلاقها من يديك.
              
              <h3>هل يمكنني ارتداء الأسوارة الألماس في جميع الأوقات؟</h3>
              نعم! بالتأكيد، الألماس من الأحجار القوية والمتينة ويمكن ارتدائه يوميًا.
            
              <h3>هل الأساور الألماس مرنة أو غير مرنة؟</h3>
              هناك انواع مختلفة من الاساور مثل الأساور الألماس العريضة الغير مرنة والأساور الألماس بحلقات المرنة

              <h3>ما هي القطع المجوهرات التي يمكن تنسيقها مع أساور الألماس؟</h3>
              <p><span>يمكن تنسيق أساور الألماس مع قطع مجوهرات متنوعة مثل&nbsp;</span><a href="https://www.lazurde.com/ar-ae/jewelry/necklaces-pendants" style="text-decoration:none;"><u><span>العقود</span></u></a><span dir="ltr">،&nbsp;</span><a href="https://www.lazurde.com/ar-ae/jewelry/rings" style="text-decoration:none;">الخواتم</a><span dir="ltr">،&nbsp;</span><a href="https://www.lazurde.com/ar-ae/jewelry/earrings" style="text-decoration:none;">الأقراط</a><span dir="ltr">،&nbsp;</span><a href="https://www.lazurde.com/ar-ae/jewelry/bracelets-anklets" style="text-decoration:none;">والأساور</a><span>&nbsp;الأخرى من&nbsp;</span><a href="https://www.lazurde.com/ar-ae/gold-jewelry" style="text-decoration:none;"><u><span>الذهب</span></u></a><span>&nbsp;أو الفضة. يجب توافق القطع مع بعضها لتحقيق إطلالة أنيقة ومتناغمة.</span></p>

              
              `,
              },
            },
          ],
          schema: [
            {
              q: `ما هو المقاس المناسب للأسورة؟`,
              a: `يعتمد هذا على تفضيلك وارتياحك ولكن مع الحرص على عدم إنزلاقها من يديك.`
            },
            {
              q: `هل يمكنني ارتداء الأسورة الألماس في جميع الأوقات؟`,
              a: `نعم! بالتأكيد، الألماس من الأحجار القوية والمتينة ويمكن ارتدائه يوميًا.`
            },
            {
              q: `هل الأساور الألماس مرنة أو غير مرنة؟`,
              a: `تأتي الأساور الألماس عادة بقفل لتثبيتها بإحكام.`
            },
          ]
        },
        earrings: {
          seo: {
            title: `تسوقي أقراط نسائية ألماس في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من أقراط الألماس أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.earrings,
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
              <h2>تسوقي أرقى تصاميم الاقراط الالماس مع لازوردي</h2>

              <p>
              ندعوكِ إلى اكتشاف مجموعة أقراط لازوردي الالماس الرائعة والمتألقة للنساء. سيدهشك اهتمامنا بالتفاصيل إلى جانب بريق الألماس، وتنوع الخيارات المتاحة لك. إن مجموعة لازوردي الرائعة من أقراط الألماس للنساء تضم تصاميم مذهلة تلبي أذواق الجميع. تحظى الأقراط الألماسية بشعبية كبيرة في المناسبات الخاصة مثل الحفلات والزفاف والأعياد. إن لمعان <a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">الألماس</span></u></a> وبريقه يجذبان الأنظار ويضفيان لمسة من الأناقة والتألق على الحضور وخصوصًا الأقراط الألماس المتدلية. والآن، يمكنك الاختيار من بين مجموعة كبيرة من التصاميم الساحرة. كل تصميم ضمن مجموعة أقراط لازوردي جودة عالية وتفاصيل دقيقة ستضاعف بالتأكيد أناقتك وجمال إطلالاتك.
            </p>
          
              `,
              },
              content: {
                value: `
                
              <h2>حلق الماس صغير بتصاميم أنيقة خالدة.</h2>

              استمتعي بجمال الأقراط الألماس الصغيرة الكلاسيكية لتألق فاخر وإطلالاتك الاستثنائية. اختاري من بين الأنماط المختلفة للألماس البريليانت والباجيت وغيره بما يناسب ذوقك وشخصيتك. ان الأقراط الألماس من لازوردي تنضح بالأناقة البسيطة والسحر الراقي. سواء للمناسبات الخاصة أو الإطلالات اليومية، هذه المجموعة من الأقراط الألماس الصغيرة ستضيف لمسة من البهاء والجمال إلى مظهرك.

              <h2>اقراط ألماس دائرية ساحرة</h2>
             
              <p>
			      	لا شك أن الأقراط <a href="https://www.lazurde.com/ar-ae/gold-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a> الدائرية الكلاسيكية هي الأفضل، ولكن عندما تأتي بلمسة من البريق واللمعان، تصبح أروع بكثير! تمثل الأقراط الألماس الدائرية لدينا تحديثًا عصريًا لتصميم الأقراط الدائرية التقليدي. فقد تم تصميمها بعناية لتتميزي بأناقة والجمال الخالد، وفي الوقت نفسه تضيف لمسة عصرية ومعاصرة إلى مختلف إطلالاتك. سواء كنت تفضلين التصاميم الرقيقة أو القطع الجريئة والمزخرفة التي تجعلك محط الأنظار، فإننا نقدم مجموعة متنوعة تلبي مختلف التفضيلات الشخصية.
		        	</p>

              <h2>أناقة ساحرة مع أقراط ألماس متدلية من لازوردي</h2>

              اذا كنت تبحثين عن قطعة ملكية وأنيقة، فلا حاجة للبحث بعيدًا، فمجموعتنا من الأقراط الألماس المتدلية هي ما تحتاجينه. اجعلي الألماس يرقص برقة وسحر على أذنيك، ودعيه يعزز كل حركة لك بالجمال والأناقة. اكتشفي مجموعتنا الواسعة من التصاميم واختاري القطعة التي تعكس شخصيتك وتلبي ذوقك الخاص. ستجدين أن لدينا ما يناسب كل مناسبة وتجعل إطلالتك تبرز بأسلوب لا يُنسى

              <h2>بريق لافت مع أقراط الكليب الألماس من لازوردي</h2>
             
              أظهري جانبك الساحر دون الحاجة إلى ثقب في الأذن مع أقراط الكليب الألماس المميزة من لازوردي. صممت أقراط الألماس الكليب بعناية لضمان الراحة طوال اليوم. تستخدم تقنيات مبتكرة لجعل القفل المشبك قويًا وآمنًا، مما يضمن تثبيتها بإحكام على الأذن دون التسبب في أي إزعاج أو انزلاق. استمتعي بنفس القدر من الأناقة والتألق دون الحاجة إلى ثقب في الأذن مع هذه أقراط لازوردي الكليب المريحة والأنيقة. ستكون، بالتأكيد، إضافة رائعة لمجموعتك المجوهرات وستسمح لك بالتألق بأسلوبك الخاص دون أي قيود.

              <h2>أقراط ساحرة من لازوردي في الإمارات</h2>

              استمتعي بتجربة غامرة وفاخرة في عالم الأقراط الألماس مع لازوردي وتشكيلة رائعة من التصاميم التي صُنعت بعناية لتجسد الأناقة والبريق. اكتشفي مجموعتنا الرائعة من الأقراط الألماس الصغيرة أو الأقراط الدائرية والأقراط المتدلية والأقراط الكليب المصاغة جميعها من الذهب عيار 18 قيراط و 21 قيراط. لمسة من السحر تجعلك تتألقين بثق


              <h2>الأسئلة الشائعة:</h2>
              
              <h3>ما هي مدة بقاء حلق الالماس؟</h3>
              إلى الأبد! وهذا ما يجعلها قطعة مميزة.

              
              <h3>ما الأمور التي يجب أخذها في الاعتبار عند شراء حلق ألماس؟</h3>
              يجب التحقق من القيراط وقصة الألماس.
              
              <h3>هل يمكن ارتداء الأقراط الألماس يوميًا؟</h3>
              بالطبع! الألماس والذهب يدومان طويلًا وهما مناسبان للارتداء يوميًا.
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `ما هي مدة بقاء الأقراط الألماس؟`,
              a: `إلى الأبد! وهذا ما يجعلها قطعة مميزة.`
            },
            {
              q: `ما الأمور التي يجب أخذها في الاعتبار عند شراء أقراط ألماس؟`,
              a: `يجب التحقق من القيراط وقصة الألماس.`
            },
            {
              q: `هل يمكن ارتداء الأقراط الألماس يوميًا؟`,
              a: `بالطبع! الألماس والذهب يدومان طويلًا وهما مناسبان للارتداء يوميًا.`
            },
          ]
        },
        sets: {
          seo: {
            title: `تسوقي طقم مجوهرات ألماس في الإمارات | طقم مجوهرات ألماس | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من أطقم مجوهرات الألماس أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.sets,
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
              <h2>تسوقي طقم ألماس كامل من لازوردي</h2>

              <p>
              <a><span>مع لازوردي، يمكنك اكتشاف العالم الساحر لأطقم الألماس حيث يمتزج الجمال والأناقة ليخلقا قطع مجوهرات مذهلة يصعب تجاهلها. مجموعة مميزة تضم أطقم </span></a><a href="https://www.lazurde.com/ar-ae/diamond/necklaces-pendants" style="text-decoration:none"><u><span style="color:#1155cc">سلاسل</span></u></a><a href="https://www.lazurde.com/ar-sa/diamond/necklaces-pendants" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/necklaces-pendants" style="text-decoration:none"><u><span style="color:#1155cc">الماس</span></u></a><span dir="ltr"><span dir="ltr"></span> </span><a href="https://www.lazurde.com/ar-ae/jewelry/rings" style="text-decoration:none"><u><span style="color:#1155cc"><span></span></u>وخواتم</span></a><span> </span><a name="_Hlk164862283"><span>زفاف الماس تأسر القلب وتعزز جمالك وتألقك في كل مناسبة. يمكنك الاختيار من بين أطقم الألماس المصاغة من</span></a><span> </span><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأصفر</span></u></a><span> الكلاسيكي أو </span><a href="https://www.lazurde.com/ar-ae/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأبيض</span></u></a><span> العصري أو</span><span dir="ltr"><span dir="ltr"></span> </span><a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc"><span></span></u>الذهب</span></a><a href="https://www.lazurde.com/ar-sa/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الوردي</span></u></a><span> الأنيق بعياراتهم 18 أو 21 قيراط.</span>
              </p>

              `,
              },
              content: {
                value: `
                
              <h2>أطقم سلاسل ألماس مبهرة في الإمارات الإمارات</h2>
             
              <p>
		      		<span>زيني عنقك بسلاسل لازوردي الألماس، فإنه لا تتخلى أي أنثى عربية عن تصاميم المجوهرات الساحرة التي </span><a name="_Hlk164862309"><span>ترمز </span></a><span>الى الأناقة والفخامة. تتميز مجموعاتنا بالدقة والعناية في الصنع، حيث يتم استخدام </span><a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">الماس</span></u></a><span> عالي الجودة ضمن تصميمات فريدة ولمسة راقية تبرز جمال الألماس بأفضل شكل ممكن. فقد تم صياغة كل قطعة بعناية فائقة، مما يجعلها إضافة فاخرة ولا تنسى لأي مجموعة من المجوهرات. تتوفر لدينا مجموعة واسعة من اطقم عقد ألماس، بما في ذلك التصاميم الرقيقة والأنيقة والسلاسل الجريئة والعصرية. سواء كنت تبحثين عن تصميم كلاسيكي أنيق أو قطعة جريئة ومميزة، فستجدين لدينا القطعة المثالية التي تناسب ذوقك وأسلوبك.</span>
		        	</p>

              <h2><التعبير الأمثل عن قصة حبكما بخاتم زفاف رائع من لازوردي</h2>
              
              احتفلي بحبكما مع مجموعة خواتم زواج الماس وطقم الماس للعروس من لازوردي. فكل قطعة في هذه المجموعة هي شاهد على رابطة الحب الأبدية التي تجمع بينكما. تمثل أطقم الألماس لدينا رمزًا للحب الذي يجمع بين الأحباء، وتعكس بداية رحلة جميلة معًا. إن الألماس هو رمز للأبدية والقوة والجمال، ويتميز بالجودة العالية واللمعان الفريد، مما يجعل من هذه المجموعة إضافة فاخرة لمجوهراتك.

              <h2>مجموعة خواتم الماس آسرة</h2>

              تتميز مجموعات خواتم الألماس من لازوردي بتصميمات فريدة تجمع بين الجمال الخالد والأناقة الحديثة. سواء كنتِ تبحثين عن خاتم مذهل أو هدية خاصة لنفسك أو لأحد أحبائك، فإن مجموعة الخواتم الألماس من لازوردي توفر لك تشكيلة متنوعة من التصاميم التي تناسب كل الأذواق.

              <h2>احتفلي بأغلى لحظات حياتك مع طقم الماس للعروس من لازوردي</h2>
              
              أطقم ألماس فخمة و استثنائية من لازوردي صممت خصيصًا لتكون جزءًا من أهم لحظات حياتك. أيًا كانت المناسبة التي تحتفلين بها سواء خطوبة أو حفل زفاف أو ذكرى زواج أو غيرها من المناسبات الاحتفالية، أبدع مصممو لازوردي بمجموعة أطقم ألماس مذهلة لتكون جزءًا من تلك اللحظات الخاصة، حيث تتميز بتصميمات فريدة وجودة عالية وبريق رائع، لتضيف لمسة من الفخامة والجمال على إطلالتك في كل مناسبة. ندرك أن صناعة المجوهرات تتطلب الكثير من العناية والدقة، ولذلك، نحرص على استخدام ألماس عالي الجودة. تسوقي الآن من مجموعة أطقم ألماس لازوردي الفاخرة من الألماس، وتمتعي بإضافة فريدة ومبهرة لمجموعتك الخاصة.

              <h2>الأسئلة الشائعة:</h2>

               <h3>هل يمكن ارتداء طقم ألماس كل يوم؟</h3>
               طقم من الأقراط الصغيرة الألماس وسلسلة بسيطة يمكنك ارتداؤه كل يوم وخصوصًا وأن الألماس الناعم أقوى الأحجار الكريمة ويتميز بأنه شديد التحمل.
              
              <h3>مما يتكون طقم الألماس؟</h3>
              في لازوردي، نوفر أطقم ألماس تتكون من عقد وزوج من الأقراط أو طقم كامل  يتكون من عقد وزوج من الأقراط وخاتم وأسورة.
              
              <h3>كيف يمكنني اختيار مجموعة مجوهرات الماس؟</h3>
              فكر في المكان الذي تخطط لارتداء المجموعة فيه. هل هو للارتداء اليومي أم للمناسبات الخاصة أم لكليهما؟ سيؤثر هذا على تصميم وحجم المجموعة.
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل يمكن ارتداء طقم ألماس كل يوم؟`,
              a: `طقم من الأقراط الصغيرة الألماس وسلسلة بسيطة يمكنك ارتداؤه كل يوم وخصوصًا وأن الألماس أقوى الأحجار الكريمة ويتميز  بأنه شديد التحمل.`
            },
            {
              q: `مما يتكون طقم الألماس؟`,
              a: `في لازوردي، نوفر أطقم ألماس تتكون من عقد وزوج من الأقراط أو طقم كامل  يتكون من عقد وزوج من الأقراط وخاتم وأسورة.`
            },
            {
              q: `كيف يمكنني اختيار مجموعة مجوهرات الماس؟`,
              a: `فكر في المكان الذي تخطط لارتداء المجموعة فيه. هل هو للارتداء اليومي أم للمناسبات الخاصة أم لكليهما؟ سيؤثر هذا على تصميم وحجم المجموعة.`
            },
          ]
        },
        "shop-all": {
          seo: {
            title: `تسوقي جميع المنتجات - مجوهرات ألماس | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعة رائعة من مجوهرات الألماس الفاخرة أونلاين في لازوردي الإمارات. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.shopAll,
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
            title: `تسوقي أفضل تشكيلة لدينا من مجوهرات الماس في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أفضل مجوهرات الألماس مبيعاً أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.bestSellers,
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
            title: `تسوقي أحدث تصاميم مجوهرات الألماس | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الجديدة من تصميمات الألماس أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.newIn,
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
            title:
              "احصلي على أفضل الأسعار على مجوهرات الالماس في الإمارات | Page <number> | لازوردي الإمارات",
            description:
              "اكتشفي مجموعتنا من مجوهرات الالماس أونلاين في الإمارات، بقيمة رائعة وأفضل الأسعار. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersDiamond?.specialPrice,
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
            title: `تسوقي مجوهرات الماس ذهب أصفر في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس ذهب أصفر أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.yellowGold,
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
            title: `تسوقي مجوهرات الماس ذهب أبيض في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس ذهب أبيض أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.whiteGold,
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
            title: `تسوقي مجوهرات الماس الذهب وردي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس ذهب وردي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.roseGold,
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
            title:
              "تسوقي هدايا مجوهرات ذهب متعددة الألوان أونلاين في الإمارات | Page <number> | لازوردي الإمارات",
            description: `استكشفي مجموعتنا من هدايا مجوهرات ذهب متعددة الألوان أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.mulitColorGold,
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
        "under-1000": {
          seo: {
            title: `تسوقي مجوهرات الماس بأقل من 1,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس بأسعار أقل 1,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              price: ["under1000"],
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
        "1000-2000": {
          seo: {
            title: `تسوقي مجوهرات الماس بأقل من 2,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس بأسعار أقل 2,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              price: ["1000to2000"],
            }),
          },
        },
        "2000-4000": {
          seo: {
            title: `تسوقي مجوهرات الماس بأقل من 4,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس بأسعار أقل 4,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              price: ["2000to4000"],
            }),
          },
        },
        "4000-above": {
          seo: {
            title: `تسوقي مجوهرات الماس بأكثر من 4,000 درهم إماراتي في الإمارات العربية | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الماس بأسعار تبدأ من 4,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersDiamond?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeDiamondsAr"],
              price: ["4000above"],
            }),
          },
        },
      },
    },
    gold: {
      seo: {
        title:
          "تسوقي مجوهرات من الذهب في الإمارات | تصاميم ذهب | Page <number> | لازوردي الإمارات",
        description:
          "اكتشفي مجموعتنا المذهلة من مجوهرات الذهب أونلاين في الإمارات، بما في ذلك الخواتم والقلائد والأساور وغيرها. استفد من التوصيل المجاني وإمكانية الإرجاع مع خيارات الشراء الفوري والدفع لاحقًا.",
      },
      banner: bannersGold?.lOne,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `تسوقي قلادات من الذهب في الإمارات | تصاميم قلادات سلاسل من الذهب | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا المذهلة من قلادات وعقود الذهب أونلاين في الإمارات، بتصاميم رائعة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldNecklacesPendants,
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
                <h2>اشتري تعليقات وعقود ذهب مميزة</h2>
                <p><span>استمتعي بالعالم الساحر للسلاسل والدلايات الذهب حيث يلتقي الإبداع بالفخامة والرقي. في لازوردي نعتقد أن المجوهرات تعبيرًا حقيقًا عن شخصيتك وروحك وعليه فكل قطعة في مجموعة مجوهرات وذهب لازوردي مشبعة بالشغف والإبداع الاستثنائي الذي لا يضاهى. سواء كنتِ تبحثين عن سلسلة ذهب نسائية أو تعليقات ذهب أو عقد شوكر ذهب أو سلاسل</span><span>&nbsp;&nbsp;</span><span>و عقود ذهب ناعمة أو عقود مميزة ... مجموعتنا تضم كل ما تريدين. يمكنك اختيار سلسلة أو دلاية ذهب تصميم كلاسيكي تعزز إطلالاتك اليومية أو شراء سلسلة أو دلاية مزينة&nbsp;</span><a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none;"><u><span>بالألماس</span></u></a><span>&nbsp;أو&nbsp;</span><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none;"><u><span>الأحجار</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none;"><u><span>&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none;"><u><span>الكريمة</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none;"><u><span>&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none;"><u><span>الملونة</span></u></a><span>&nbsp;لمثل هذه المناسبات الخاصة التي تحتاج إلى شيء استثنائي من عالم آخر.</span></p>   
              `,
              },
              content: {
                value: `
                
              <h2>أشكال سلاسل ذهب بتصاميم متنوعة في الإمارات!</h2>
              
              اكتشفي تنوع تصاميم سلاسل وعقود ذهب لازوردي والتي تضم سلاسل الرقبة القصيرة (تشوكر) العصرية التي تمنحك طلة جريئة ومميزة تلفت إليكِ جميع الأنظار أو العقود المميزة التي تمنح عنقك بارتدائها سحرًا خلابًا وأناقة لا مثيل لها. يمكنك أيضًا اختيار السلاسل متعددة الطبقات التي تنضح بأناقة استثنائية تمزج بين الفخامة وروح العصر. هل ترغبين في طلة مدهشة يسألك عنها الجميع؟ ما عليك سوى اقتناء سلسلة من سلاسل لازوردي سواء تشوكر أو السلاسل الذهب القصيرة أو حتى عقد فخم لتحققي مرادك، وهذا ما ستجدينه ضمن مجموعة لازوردي التي تراعي مختلف الأذواق والتفضيلات.

              <h2>تألق مليئ بالسحر والأناقة مع تعليقات ذهب لازوردي</h2>

              <p>
              <span>الدلايات (التعاليق) </span><a href="https://www.lazurde.com/ar-ae/gold-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><span> هي الاختيار الأمثل لتضيف جزء من شخصيتك إلى أي سلسلة. وإدراكًا منا لهذه الحقيقة، أبدعت لازوردي تصاميم دلايات (تعاليق) ذهب مميزة تعكس شخصيتك المميزة وأسلوبك الخاص وتحمل معها قيمة مُتميزة. بإمكانك أن تختاري تزيين عنقك بدلاية مزينة بالأحجار الملونة الجذابة أو بدلاية مزينة بالألماس أو بتشارمز رقيقة تبرز جمال روحك قبل جمال اختياراتك. من التصاميم البسيطة إلى المعقدة، تقدم مجموعة دلايات</span><span> وعقود الذهب من</span><span> لازوردي اختيارات لا حصر لها لتؤكدي تفردك ولتعززي معها سحرك الأنثوي.</span>
             </p>

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>هل يمكن ارتداء سلسلة ذهب طوال الوقت؟</h3>
              نعم! يمكنك ارتداء السلسلة الذهب طوال اليوم.
              
              <h3>ما الأمور التي يجب أخذها في الاعتبار عند شراء سلسلة ذهب؟</h3>
              عند شراء سلسلة ذهب، يجب التحقق من القيراط والدمغة.
              
              <h3>هل يتغير لون السلاسل الذهب؟</h3>
              لا، يمكن أن يتغير لون السلاسل المطلية بالذهب، ولكن سلاسل ذهب عيار 21 أو 18 لا يتغير لونها ابداً

              <h3>ما هي انواع سلاسل ذهب؟</h3>
              تتنوع أنواع سلاسل الذهب بين الكبيرة والصغيرة، حيث تتوفر سلاسل ذهب كبيرة ذات تصاميم بارزة وبنية سميكة، بينما تتميز السلاسل الذهب الصغيرة بتصاميمها الأنيقة والرقيقة.

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
              a: `عند شراء سلسلة ذهب، يجب التحقق من القيراط والدمغة.`
            },
            {
              q: `هل يتغير لون السلاسل الذهب؟`,
              a: `لا، يمكن أن يتغير لون السلاسل المطلية بالذهب، ولكن السلاسل المصاغة من الذهب سواء عيار 18 أو 21 قيراط لا يتغير لونها أبدًا.`
            },
          ]
        },
        rings: {
          seo: {
            title: `تسوقي خواتم ذهب نسائية في الإمارات | تصاميم خواتم ذهب | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا المذهلة من خواتم الذهب أونلاين في الإمارات، بتصاميم رائعة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldRings,
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

              <p>
              انطلقي في رحلة إلى العالم الساحر للخواتم الذهب حيث تروي كل قطعة رواية خاصة وتحمل في طيات تصاميمها أناقة مذهلة وسحر آسر يحبس الأنفاس. إن مجموعتنا هي احتفاء حقيقي بجمال الذهب، فقد تم اختيار كل قطعة بعناية لتتزيني وتتألقي على الدوام. استكشفي مجموعة خواتم نسائية من لازوردي لتجدي ما تبحثين عنه فهي تضم تشكيلة من الخواتم الذهب والخواتم الستيتمنت و<a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><u><span>خواتم</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><u><span>الزفاف</span></u></a> وغيرها الكثير.
            </p>

              `,
              },
              content: {
                value: `
                 
             <h2>تسوقي موديلات خواتم ذهب نسائية في الإمارات ببريق لافت وتصاميم استثنائية.</h2>
             
             <p>
             <span>لأنك تستحقين الأفضل والأرقي على الدوام، نقد</span><span> الإمارات العربية المتحدة</span><span> م لك مجموعة من الخواتم التي تنضح بسحر راقي يدهش العقول. إن كل خاتم ضمن مجموعة خواتم لازوردي الذهب هو قطعة فنية مميزة تبرز حرفة دقيقة وتصميم مبتكر ومتفرد. تتميز خواتم لازوردي بتفاصيل معقدة وعناصر بالغة الفخامة والرقي تشمل </span><a href="https://www.lazurde.com/ar-sa/love-engagement/diamonds" style="text-decoration:none"><u><span style="line-height:115%; font-size:12pt; color:#1155cc">الألماس</span></u></a><span> و</span><a href="https://www.lazurde.com/ar-sa/love-engagement/colored-stones" style="text-decoration:none"><u><span style="line-height:115%; font-size:12pt; color:#1155cc">الأحجار</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/colored-stones" style="text-decoration:none"><u><span style="line-height:115%; font-size:12pt; color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/colored-stones" style="text-decoration:none"><u><span style="line-height:115%; font-size:12pt; color:#1155cc">الملونة</span></u></a><span> و</span><a href="https://www.lazurde.com/ar-sa/love-engagement/pearls" style="text-decoration:none"><u><span style="line-height:115%; font-size:12pt; color:#1155cc">اللؤلؤ</span></u></a><span>، مما يجعل من كل خاتم كنز غالٍ يستحضر إعجاب الجميع. يمكنك الاختيار من بين التصاميم المصاغة من خواتم ذهب عيار 21 أو عيار 18 قيراط، حسب تفضيلك.</span>
           </p>
             
             <h2>اقتني خاتم ذهب مميز يرمز لقصة حبكما الأبدية!</h2>
             
             <p>
				احتفي بحبكما مع مجموعة خواتم الزواج المميزة من لازوردي المصممة لتشكل الرابطة الوثيقة بين كل قلبين يجمعها القدر معًا. كل خاتم ودبلة زفاف في مجموعة لازوردي دليل على الالتزام والروابط النابعة من قصص الحب التي ليس لها نهاية. ولأنك ملكة الأناقة، نقدم لك مجموعة من الخواتم الملكية المبهرة التي تفيض بالسحر الملكي الخاطف لتشعري وكأنك ملكة حقيقية في أي مناسبة. تضم مجموعة خواتم لازوردي <a href="https://www.lazurde.com/ar-sa/love-engagement/eternity-rings" style="text-decoration:none"><u><span>خواتم</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/eternity-rings" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/eternity-rings" style="text-decoration:none"><u><span>ذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/eternity-rings" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/eternity-rings" style="text-decoration:none"><u><span>اتيرنتي</span></u></a> وانفينتي تعيد معاها تعريف معاني الحب وتشكل رمزًا للالتزام والروابط العميقة بين أي حبيبين. كما يمكنك مع مجموعة خواتم ذهب ناعمة وفخمة من لازوردي، التعبير عن شخصيتك الجامحة الجريئة باختيار أي من الخواتم الستيتمنت المذهلة المزينة بالألماس أو الأحجار الملونة أو اللؤلؤ التي تضمن لكِ إطلالات تدير الرؤوس نحوك في جميع الأوقات. تتنوع الخواتم بين الذهب <a href="https://www.lazurde.com/ar-sa/gold/white-gold" style="text-decoration:none"><u><span>الأبيض</span></u></a> و<a href="https://www.lazurde.com/ar-sa/gold/yellow-gold" style="text-decoration:none"><u><span>الأصفر</span></u></a> و<a href="https://www.lazurde.com/ar-sa/gold/rose-gold" style="text-decoration:none"><u><span>الوردي</span></u></a>، لتختاري الشكل واللون المفضل والمناسب لك.
			</p>

             <h2>تسوقي الخواتم من بين ألوان الذهب المختلفة لدى لازوردي الإمارات العربية المتحدة</h2>

             <p>
				خواتم من الذهب الأصفر: لدينا في متاجر لازوردي خواتم من الذهب الأصفر عيار 18 و عيار 21. اللون الأصفر هو اللون الطبيعي للذهب، ولكن الفرق بين عيار 18 و 21 هو نسبة تركيز الذهب. على سبيل المثال، يتكون خاتم الذهب عيار 21 من 87.5٪ من الذهب الخالص، بينما يحتوي الخاتم المصنوع من الذهب عيار 18 على 75٪ من الذهب الخالص.
			</p>
			<p>
				خواتم من الذهب الأبيض: خواتم الذهب الأبيض مصنوعة من سبيكة ذهب تحتوي على 87.5٪ من الذهب الخالص، لكن تركيز الروديوم أو الفضة في النسبة المتبقية&#xa0; يكون عالي، وعليه يظهر اللون الأبيض الملفت. تتميز خواتم الذهب الأبيض في لازوردي بمظهر فريد فهي أيضأ تبدو رائعة مع الألماس.
			</p>
			<p>
				خواتم من الذهب الوردي: لدينا تشكيلة خواتم ذهب وردي مميزة. بنفس طريقة انتاج الذهب الأبيض، في سبائك الذهب الوردي عيار 18 قيراط تكون نسبة الذهب الخالص 75٪. في حين أن الـ 25٪ المتبقية تحتوي على تركيز عالٍ من النحاس، ينتج لون مائل أكثر للحمرة. في بعض الأحيان، يكون اللون ورديًا أكثر، أو قد يشبه لونًا أفتح من النحاس. خواتم الذهب الوردي أنيقة، ويمكن أن تكون أيضًا متعددة الاستخدامات أي تناسب المناسبات و الارتداء اليومي.
			</p>
			<p>
				خواتم ذهب مختلطة: تضم مجموعة لازوردي تشكيلة من خواتم الذهب بألوانه. على سبيل المثال، يمكنكم شراء خاتم خطوبة بثلاثة ألوان ذهبية، أو خاتم ذهب مرصع بالأحجار الملونة. لستِ مضطرة لأن تتقيدي بمفهوم الخاتم ذو اللون الواحد، يمكنكِ ان تختاري خاتم ذهب بثلاثة ألوان متناسقة و متناغمة بشكل جذاب.
			</p>

      <h2>الأسئلة الشائعة حول خواتم الذهب:</h2>
             
             <h3>هل يمكن ارتداء الخاتم الذهب يوميًا؟</h3>
             
             نعم، بكل تأكيد. يمكنك اقتناء خاتم بسيط ليناسب مختلف إطلالاتك اليومية. تقدم لازوردي مجموعة خواتم الذهب مصممة لتناسب الاستخدام اليومي.

             <h3>ما هو نوع الذهب الأفضل في الخواتم؟</h3>
             اختاري إما خاتم ذهب عيار 21 أو عيار 18 قيراط.
             
             <h3>هل الخواتم الذهب أفضل من الخواتم الألماس؟</h3>
             ليس فعليًا، لكل منهما سحره الخاص. الأمر يعتمد على ما تريدين وعلى تفضيلاتك الشخصية.
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل يمكن ارتداء الخاتم الذهب يوميًا؟`,
              a: `نعم، بكل تأكيد. يمكنك اقتناء خاتم بسيط ليناسب مختلف إطلالاتك اليومية. تقدم لازوردي مجموعة خواتم ذهب مصممة لتناسب الاستخدام اليومي.`
            },
            {
              q: `ما هو نوع الذهب الأفضل في الخواتم؟`,
              a: `اختاري إما الخواتم المصاغة من الذهب عيار 18 أو 21 قيراط.`
            },
            {
              q: `هل الخواتم الذهب أفضل من الخواتم الألماس؟`,
              a: `ليس فعليًا. لكل منهما سحره الخاص. الأمر يعتمد على ما تريدين وعلى تفضيلاتك الشخصية.`
            },
          ]
        },
        "bracelets-anklets": {
          seo: {
            title: `تسوقي خلاخيل و أساور ذهب نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا المذهلة من الأساور وخلاخيل الذهب أونلاين في الإمارات، بتصاميم رائعة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldBraceletsAnklets,
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
              <h2>أساور ذهب تأخذك إلى عوالم التميز والسحر في الإمارات!</h2>
              انطلقي إلى عالم السحر والجمال مع مجموعة أساور وخلاخيل ذهب لازوردي المتنوعة. كل قطعة في مجموعتنا تعكس فنًا رفيعًا وشغفًا حقيقيًا بصنع مجوهرات تعزز جمال روحك وبهاء إطلالاتك. إذا كنتِ تبحثين عن خلاخيل أو أساور ذهب ناعمة أو كليهما فلدينا مجموعة مميزة لكل منهما بالاضافة الى أساور تنس ذهب مميزة و الأساور بدلايات شارم، ستجدين في لازوردي كل ما تريدين. 

              `,
              },
              content: {
                value: `
                  
              <h2>امنحي كاحليكِ لمسة من الفخامة مع خلخال ذهب من لازوردي</h2>
              
              الخلخال الذهب هو القطعة المثالية تحتاجينها لتحصلي على لمسة من الفخامة مع كل خطوة تخطينها. تقدم لازوردي مجموعة من الخلاخيل الذهب المصممة لتكمل جمال إطلالاتك بداية من الخلاخيل السلسلة ذات الحلقات إلى الخلاخيل المزينة بالخرزات إذا كنتِ من محبي التصاميم البوهيمية. اطلقي العنان لروحك وعززي سحرك الأنثوي، واختاري الخلخال المثالي لكِ الآن! 
              
              <h2>أناقة ساحرة مع أساور التنس الذهبية والأساور المزخرفة بالخرزات والأساور ذات الدلايات التشارم</h2>

              <p><span>تمتعي بأناقة مذهلة عابرة للأزمنة مع مجموعة الأساور التنس والأساور ذات الخرزات وأساور الشارم التي أبدعها مصممو لازوردي. كل أسورة في مجموعتنا هي تجسيد لمعاني الجمال الخالد والحرفية الاستثنائية وهو ما يجعلها كنوزًا غالية وخالدة لا تتأثر بتغيرات الزمان. ستجدين&nbsp;</span><span>اساور ذهب عيار 21 و18</span><span>&nbsp;ولكِ إمكانية الاختيار ما بين&nbsp;</span><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none;"><u><span>الذهب</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none;"><u><span>&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none;"><u><span>الأصفر</span></u></a><span>&nbsp;و</span><a href="https://www.lazurde.com/ar-ae/jewelry/white-gold" style="text-decoration:none;"><u><span>الذهب</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/white-gold" style="text-decoration:none;"><u><span>&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/white-gold" style="text-decoration:none;"><u><span>الأبيض</span></u></a><span>&nbsp;أو ا</span><a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none;"><u><span>لذهب</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none;"><u><span>&nbsp;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none;"><u><span>الوردي</span></u></a><span>. من أساور التنس الكلاسيكية إلى السحر البوهيمية للأساور المزينة بالخرزات إلى الأساور ذات الدلايات الشارم الرقيقة، توفر مجموعة أساور لازوردي نطاق واسع من الاستايلات التي تناسب جميع الأذواق. !انطلقي وزيني معصمك وكاحلك بهذا الجمال المصنوع لك خصيصًا</span></p>

              
              <h2>الأسئلة الشائعة:</h2>
              
              <h3>ما هو المقاس المناسب للأسوارة؟</h3>
              لا يوجد مقاس مثالي، الأمر حسب تفضيلك.
              
               <h3>ما الأمور التي يجب أخذها في الاعتبار عند شراء اساور ذهب؟</h3>
              
               <p>
              <span>يجب التحقق من عيار الذهب المصاغ منها الأسوارة فضلًا عن جودة </span><a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">الألماس</span></u></a><span> أو </span><a href="https://www.lazurde.com/ar-ae/jewelry/pearls" style="text-decoration:none"><u><span style="color:#1155cc">اللؤلؤ</span></u></a><span> أو </span><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الأحجار</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الملونة</span></u></a><span> إذا كانت مزينة بأي منهم.</span>
               </p>

              
              <h3>هل يمكن ارتداء اساور الذهب يوميًا؟</h3>
              نعم، بكل تأكيد. في لازوردي، لدينا مجموعة واسعة من الأساور الذهب بتصاميم بسيطة مثالية لتكمل إطلالاتك اليومية.

              <h3>ما هي موديلات أساور الذهب؟</h3>
              تشمل أشكال أساور الذهب مجموعة متنوعة من التصاميم والأشكال، منها على سبيل المثال:

              <p><span>●</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>أساور ذهب عريضة.</p>
              <p><span>●</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>أساور ذهب ناعمة رفيعة.</p>
              <p><span>●</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>أساور مطرزة.</p>
              <p><span>●</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>أساور مزخرفة بالأحجار الكريمة.</p>

              `,
              },
            },
          ],
          schema: [
            {
              q: `ما هو المقاس المناسب للأسوارة؟`,
              a: `.لا يوجد مقاس مثالي، الأمر حسب تفضيلك`
            },
            {
              q: `ما الأمور التي يجب أخذها في الاعتبار عند شراء اساور ذهب؟`,
              a: `يجب التحقق من عيار الذهب المصاغ منها الأسوارة فضلًا عن جودة الألماس أو اللؤلؤ أو الأحجار الملونة إذا كانت مزينة بأي منهم.`
            },
            {
              q: `هل يمكن ارتداء اساور الذهب يوميًا؟`,
              a: `نعم، بكل تأكيد. في لازوردي، لدينا مجموعة واسعة من الأساور الذهب بتصاميم بسيطة مثالية لتكمل إطلالاتك اليومية.`
            },
          ]
        },
        earrings: {
          seo: {
            title: `تسوقي أقراط ذهب نسائية في الإمارات | تصاميم أقراط ذهب | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا المذهلة من أقراط الذهب أونلاين في الإمارات، بتصاميم رائعة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldEarrings,
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
                شخصيتك تعبر عنها إكسسواراتك، فكل قطعة تختارينها تحكى فصلا من رواية حياتك اليومية، فإما أن تكون عنواناً على بساطتك، أو تكون مفتاحاً يدل الآخرين على شخصيتك الجريئة والقوية، ومع أقراط لازوردي الدائرية يمكنك إثبات جرأة اختباراتك وشخصيتك المميزة. ويمكنك مضاعفة بهاء وجاذبية إطلالات مع تصاميم الأقراط الدائرية الكلاسيكية ولاسيما وإن نسقتها مع أسورة وسلسلة و<a href="https://www.lazurde.com/ar-ae/gold/rings" style="text-decoration:none"><u><span style="color:#1155cc">خاتم</span></u></a><a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/rings" style="text-decoration:none"><u><span style="color:#1155cc">ذهب</span></u></a> من لازوردي. إذا كنتِ ترغبين في إطلاق العنان للنجمة التي بداخلك أو ترغبين في تعزيز مظهرك اليومي<a name="_Hlk164863264">، فإذا اختارتي </a><span>حلق ذهب دائري من لازوردي</span> فهو الاختيار الأمثل لترتقي بمظهرك يوميًا دون عناء. أحجام وتصاميم وأشكال متنوعة مزينة <a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">بالألماس</span></u></a><span dir="ltr"><span dir="ltr"></span> </span><a href="https://www.lazurde.com/ar-ae/jewelry/pearls" style="text-decoration:none"><u><span style="color:#1155cc"><span></span></u>واللؤلؤ</span></a> و<a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الأحجار</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الملونة</span></u></a>، يمكنك الاختيار من بينها.
              </p>

              `,
              },
              content: {
                value: `
                 
              <h2>تألقي مع أقراط ذهب لازوردي المتدلية</h2>
              
              للأقراط المتدلية سحر خاص؛ فهي تعزز أنوثة ملامحك. قد أبدع مصممو لازوردي هذه القطع الفنية المميزة التي تتحرك بانسيابية ساحرة مع كل حركة لكِ. يعد الحلق المتدلي إكسسوارًا مثاليًا للمناسبات الرسمية وغير الرسمية، ومجموعة الأقراط المتدلية من لازوردي هنا لتتمتعي بإطلالة بارزة تترك أثرًا جذابًا في الجميع. تشكل هذه الأقراط، بلا شك، إضافة مميزة إلى صندوق مجوهراتك وبالتأكيد ستكون جزءًا أساسيًا من إطلالاتك من الآن فصاعدًا.

              <h2>أقراط كليب ذهب تمنحك جمالًا استثنائيًا بكل سهولة</h2>
              
              تعتبر الأقراط عنصرًا مهمًا في إكمال إطلالة المرأة وإضفاء اللمسة الأخيرة على مظهرها وخصوصًا وإن كان يمكن تغيرها بسهولة دون عناء، ومن هنا نقدم مجموعة متنوعة من الأقراط الكليب الذهب لتضفي لمسة جمالية على وجهك وتسلط الضوء على ملامحه. يعتبر حلق الذهب الكبس خيارًا ممتازًا للنساء اللاتي لا يمتلكن ثقبًا في أذنيهن. فهي تمنحهن فرصة ارتداء الأقراط والاستمتاع بمزاياها دون الحاجة إلى إجراء عملية ثقب الأذن. توفر الأقراط الكليب من لازوردي الجمال والتنوع والراحة والأمان، دون أي قيود أو تعقيدات. 

              <h2>عززي سحرك مع أقراط لازوردي الذهب المتدلية الطويلة</h2>

              الأقراط المتدلية الذهب تعد إضافة رائعة إلى مجموعة مجوهرات أي امرأة. ولأنك تستحقين الأفضل دائمًا، إليكِ مجموعة رائعة من الأقراط المتدلية تنضح بالسحر والجاذبية والفخامة التي تبحث عنهم كل امرأة. تقدم لازوردي مجموعة من الأقراط المتدلية التي تلائم إطلالات المناسبات الرسمية وغير الرسمية. تأتي الأقراط في مجموعة متنوعة من الأشكال والأحجام والتصاميم التي تناسب الإطلالات اليومية وتضفي لمسة من الأناقة البسيطة. وهناك حلق ذهب طويل وجريئ والذي يعبر عن الشخصية القوية والجريئة وتلفت الأنظار. تألقي مع سحر الأقراط الذهب المتدلية وكوني محط جميع الأنظار أينما خطت قدماك.

              <h2>أناقة كلاسيكية لا غنى عنها مع حلق ذهب صغير من لازوردي</h2>
              
              هل تبحثين عن حلق ذهب ناعم صغير بتصميم كلاسيكي تناسب كل الأوقات؟ مجموعة أقراط لازوردي الذهب الصغيرة تجسد كل معاني الجمال والأناقة. الأقراط الدبوسية تلفت الأنظار إلى منطقة الوجه بشكل خاص، فتساهم في إبراز ملامح الوجه وجماله. إن أقراط لازوردي الدبوسية مثالية للمناسبات الرسمية وغير الرسمية على حد سواء. إن اختيار الأقراط المناسبة يمكن أن يكون عاملاً حاسمًا في إبراز الجمال الطبيعي للوجه وتعزيز الثقة بالنفس. لا تترددي في اقتناء تصميمك المفضل من مجموعة أقراط لازوردي بالإمارات واستمتعي بتجربة أشكال وأنماط مختلفة لتجدي ما يناسبك ويبرز جمالك الفريد. يجب عليك دائمًا اختيار حلق ذهب نسائي يتناسب مع ذوقك الشخصي وتعكس شخصيتك. 

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>هل حلق الذهب عيار 21 جيد؟ </h3>
              نعم، بكل تأكيد.
              
              <h3>هل يمكن ارتداء الأقراط الذهب يوميًا؟</h3>
              نعم، بكل تأكيد. تقدم لازوردي مجموعة واسعة من الأقراط الأنيقة التي تناسب مختلف إطلالاتك اليومية.
              
              <h3>لماذا يجب ارتداء أقراط ذهب؟</h3>
              تعتبر الأقراط أحد أهم الإكسسوارات التي تعزز إطلالة المرأة وتضفي عليها لمسة من الجمال والأناقة، فهي مثالية لتعكس جمالك في الأيام العادية وفي المناسبات الخاصة.
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل الأقراط المصنوعة من الذهب عيار 18 قيراط جيدة؟`,
              a: `نعم، بكل تأكيد.`
            },
            {
              q: `هل يمكن ارتداء الأقراط الذهب يوميًا؟`,
              a: `نعم، بكل تأكيد. تقدم لازوردي مجموعة واسعة من الأقراط الأنيقة التي تناسب مختلف إطلالاتك اليومية.`
            },
            {
              q: `لماذا يجب ارتداء أقراط ذهب؟`,
              a: `تعتبر الأقراط أحد أهم الإكسسوارات التي تعزز إطلالة المرأة وتضفي عليها لمسة من الجمال والأناقة، فهي مثالية لتعكس جمالك في الأيام العادية وفي المناسبات الخاصة.`
            },
          ]
        },
        sets: {
          seo: {
            title: `تسوقي طقم مجوهرات ذهب في الإمارات | أطقم ذهب | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا المذهلة من أطقم مجوهرات الذهب أونلاين في الإمارات، بتصاميم رائعة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldSets,
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
              أطقم الذهب هي الخيار الأمثل لابتكار إطلالات مميزة تعكس أناقتك وذوقك الرفيع في كل مناسبة. ومتى تكون الأطقم بهذا السحر الخلاب، ما عليكِ سوى اختيار الأنسب لك لتكون ضمن صندوق مجوهراتك. مع لازوردي، يمكنك الانطلاق في رحلة إلى عالم السحر والفخامة الذي تتلألأ فيه أطقم ذهب لازوردي بقطع مصممة بكل دقة ومصاغة بحرفية تعكس عمق شغفنا بابتكار الأفضل والأرقى لك دائمًا. تحتفي أطقم لازوردي بمعاني التناغم والاتساق المتحقق بين قطعها التي تعزز في النهاية إطلالاتك اليومية وإطلالات السهرة في المناسبات الخاصة. سواء كنت تبحثين عن طقم كامل أو طقم <a href="https://www.lazurde.com/ar-sa/gold/necklaces-pendants" style="text-decoration:none"><u><span>سلاسل</span></u></a> أو <a href="https://www.lazurde.com/ar-sa/love-engagement/gold-sets" style="text-decoration:none"><u><span>طقم</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/gold-sets" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/gold-sets" style="text-decoration:none"><u><span>مجوهرات</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/gold-sets" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/gold-sets" style="text-decoration:none"><u><span>للزفاف</span></u></a> أو طقم خواتم أو حتى أطقم خواتم للزفاف، فإن مجموعة أطقم لازوردي في المملكة هنا لتختاري من بينها قطعتك المفضلة التي تروي قصتك وتعكس تفرد شخصيتك. نحن على ثقة أنك ستجدين طقم الذهب الأفضل الذي سيشاركك أسعد الذكريات.
            </p>

              `,
              },
              content: {
                value: `
               
              <h2>سحر آسر وبريق آخاذ مع أطقم لازوردي</h2>
             
              <p>
				تألقي بسحر آسر مع أطقم ذهب ناعمة من لازوردي تضم قطع مجوهرات مميزة تمنحك مظهرًا واثق مفعم بالأنوثة والرقة الممزوجة بالفخامة. سواء كنت تبحثين عن عقد فخم أو <a href="https://www.lazurde.com/ar-sa/gold/earrings" style="text-decoration:none"><u><span>أقراط</span></u></a> رقيقة أو حتى <a href="https://www.lazurde.com/ar-sa/gold/bracelets-anklets" style="text-decoration:none"><u><span>أساور</span></u></a> أو <a href="https://www.lazurde.com/ar-sa/gold/rings" style="text-decoration:none"><u><span>خواتم</span></u></a> مميزة، فإن أطقم لازوردي هي اختيارك الأمثل. قطع متنوعة بتصاميم فخمة ومميزة تعزز أسلوبك خلال أي مناسبة دون تكلف أو عناء وتجعل منك محطًا لأنظار الجميع.
			</p>

             <h2>تألقي يوم زفافك مع أطقم لازوردي للعرائس</h2>
             
             <p>
				تحلم كل فتاة بأن تكون ملكة يوم زفافها، لذا تحرص دائمًا على اقتناء الأفخم والأجمل. وهو ما يتجلى في كل قطعة من قطع أطقم الزفاف والأعراس من لازوردي. فهي مصممة لتجعل من يوم زفافك ذكرى جميلة وسعيدة تمتد لسنوات عديدة ومديدة وخصوصًا مع سلاسل وعقود فخمة وجذابة أو أقراط أو أساور تضيف بهاءً لجمالك. تستحضر كل قطعة ضمن مجموعة مجوهرات وذهب لازوردي معاني الحب الأبدي وتشكل رمزًا للروابط الرومانسية التي تجمع بين قلبين.
			</p>

             <h2>تسوقي طقم ذهب في الإمارات العربية المتحدة</h2>
            
             <p>
				يقدم مبدعو لازوردي مجموعة متنوعة من أطقم الذهب بألوانه <a href="https://www.lazurde.com/ar-sa/gold/yellow-gold" style="text-decoration:none"><u><span>الأصفر</span></u></a><span><span></span> </span><a href="https://www.lazurde.com/ar-sa/gold/white-gold" style="text-decoration:none"><u><span><spa></span></u>والأبيض</span></a><span><span></span> </span><a href="https://www.lazurde.com/ar-sa/gold/rose-gold" style="text-decoration:none"><u><span><spa></span></u>والوردي</span></a> لتختاري من بينها الأنسب والأقرب إلى قلبك. ماذا أيضًا؟! تتزين قطع أطقم لازوردي <a href="https://www.lazurde.com/ar-sa/love-engagement/diamonds" style="text-decoration:none"><u><span>بالألماس</span></u></a> و<a href="https://www.lazurde.com/ar-sa/love-engagement/colored-stones" style="text-decoration:none"><u><span>الأحجار</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/colored-stones" style="text-decoration:none"><u><span>&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/colored-stones" style="text-decoration:none"><u><span>الملونة</span></u></a> و<a href="https://www.lazurde.com/ar-sa/love-engagement/pearls" style="text-decoration:none"><u><span>اللؤلؤ</span></u></a> وغير ذلك من الأحجار الكريمة التي تلمع وتتألق ببريق يضاهي بريقك الخاطف. تفضلوا بزيارة موقعنا للاطلاع على مجموعة أطقم ذهب ومجوهرات لازوردي. نحن على يقين أنك ستجدين ما تبحثين عنه.
			</p>

      <h2>ما الذي يجب وضعه في الاعتبار عند شراء طقم ذهب؟</h2>

				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>الهدف والسبب من الشراء: عليك أن تسألي نفسك لماذا تحتاجين إلى إضافة طقم ذهب جديد إلى صندوق مجوهراتك. هل هذا بسبب إعجابك بالتصميم ورغبتك في إضافة جميلة، أم لأن لديكِ مناسبة خاصة وتريدين الظهور بإطلالة مبهرة؟
				</p>

				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>الميزانية: يجب التحقق من حد قيمة الشراء قبل التوجه لشراء طقم ذهب. وفقًا للميزانية، يتحدد طقم الذهب المناسب.
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>النمط والأسلوب: يُنصح دائمًا بعدم تجاهل أسلوبك الخاص. يجب معرفة ما يجعلك تشعرين بمزيد من الراحة والرضا قبل الشراء.
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>نوع طقم الذهب: هل تبحثين عن طقم ذهب كامل أم نصف طقم؟ هل تفضلين الحصول على طقم تعليقة؟ أم تفضلين أطقم مخصصة مصممة حسب تفضيلاتكِ؟
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>التصميم: تصميم طقم الذهب مهم أيضًا. من الجيد معرفة الاتجاهات الحالية في أطقم المجوهرات طالما أنها تناسبك، ومن ثم شراء طقم ذهب جديد وفقًا لذلك.
				</p>

        <h2> أهمية أطقم الذهب</h2>

				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>توفر الجهد: ربما يكون أحد أهم الأسباب التي تدفع الناس لشراء أطقم الذهب هو توفير الجهد في مطابقة قطع مجوهرات مختلفة.
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اقتصادية: عادةً ما يكون شراء أربعة قطع مختلفة من المجوهرات بشكل منفصل أكثر تكلفة من شراء نفس الأنواع الأربعة في طقم كامل.
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>هدية مثالية: لطالما كانت الأطقم الذهب بمثابة الخيار الأفضل للهدايا. لأنها قيّمة وتحتوي على قطع مختلفة متناسقة معًا.
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>مجوهرات مناسبات للخطوبة والأعراس: يعتبر طقم الذهب جزءًا أساسيًا من مجوهرات الخطوبة والزفاف في الإمارات
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
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>طقم ذهب عيار 24: إنه الذهب الخالص، بنقاوة 100%. </span>
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>طقم ذهب عيار 22: يحتوي على 91.6% من الذهب الخالص، والنسبة الباقية عبارة عن مجموعة معادن أخرى. </span>
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>طقم ذهب عيار 21: يتكون من حوالي 87.5% ذهب. هو أحد العيارات الشائعة جدًا في الدول العربية ويُستخدم بكثرة في صناعة أطقم الذهب لمزيجه المتوازن بين النقاوة والمتانة.</span>
				</p>
				<p>
					<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>اطقم ذهب عيار 18: يحتوي على 75% ذهب و25% معادن أخرى مثل النحاس والفضة، مما يجعله أكثر صلابة ومناسب للاستخدام اليومي. </span>
				</p>

        <h3>ما هي أنواع اطقم الذهب المتوفرة لدى لازوردي الإمارات العربية المتحدة؟</h3>

        ستجدين في لازوردي مجموعة أطقم ذهب ناعمة ومميزة، وتنقسم إلى عدة مجموعات. أولًا من حيث القيراط، ومنها:

        <p >
				<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب عيار ٢١
			</p>
			<p >
				<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب عيار ١٨
			</p>
			<h4>
				حسب اللون الى:
			</h4>
			<p >
				<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب أبيض
			</p>
			<p >
				<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب اصفر
			</p>
			<p >
				<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب وردي
			</p>
			<p >
				<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب متعدد الألوان
			</p>
	
			<h4>
				واخيراً، حسب الأحجار المزين بها الطقم ومنها:
			</h4>
			<p >
				<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>اطقم ذهب باحجار ملونة
			</p>
			<p >
				<spa><span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span>أطقم ذهب بحجر الزركون
			</p>

              `,
              },
            },
          ],
        },
        "half-sets": {
          seo: {
            title: `تسوقي نصف طقم مجوهرات ذهب في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا المذهلة من نصف أطقم مجوهرات ذهب أونلاين في الإمارات، بتصاميم رائعة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldHalfSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              type: ["halfSets"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `تسوق جميع المنتجات - مجوهرات ذهب | Page <number> | لازوردي الإمارات`,
            description: `اكتشف مجموعة رائعة من مجوهرات الذهب أونلاين في لازوردي الإمارات. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldShopAll,
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
            title: `تسوقي سبائك وعملات ذهب أونلاين في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `استكشفي مجموعتنا من سبائك وعملات ذهب أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldCoinsBars,
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
            title: `تسوقي مجموعتنا الأكثر مبيعًا من مجوهرات الذهب في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا المذهلة من مجوهرات الذهب الأكثر مبيعًا أونلاين في الإمارات، بتصاميم رائعة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldBestSellers,
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
            title: `تسوقي أحدث تصاميم الأقراط والخواتم وقلادات الذهب | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا المذهلة من تصاميم الذهب الجديدة والفريدة أونلاين في الإمارات. تسوقي أحدث تصاميم خواتم الذهب مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldNewIn,
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
            title: `احصل على أفضل الأسعار على مجوهرات الذهب في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا المذهلة من مجوهرات الذهب أونلاين في الإمارات، واستفيدي من القيمة العظيمة وأفضل الأسعار. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع المجاني وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldSpecialPrice,
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
            title: `تسوقي مجوهرات ذهب أصفر نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب الأصفر أونلاين في الإمارات، بما في ذلك الخواتم والقلائد وأكثر. احصل على توصيل مجاني وإمكانية الإرجاع المجاني مع خيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldYellowGold,
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
            title: `تسوقي مجوهرات ذهب أبيض نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب الأبيض أونلاين في الإمارات، بما في ذلك الخواتم والقلائد وأكثر. احصل على توصيل مجاني وإمكانية الإرجاع المجاني مع خيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldWhiteGold,
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
            title: `تسوقي مجوهرات ذهب وردي نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب الوردي أونلاين في الإمارات، بما في ذلك الخواتم والقلائد وأكثر. احصل على توصيل مجاني وإمكانية الإرجاع المجاني مع خيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldRoseGold,
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
            title: `تسوقي مجوهرات ذهب متعددة الألوان أونلاين في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `استكشفي مجموعتنا من مجوهرات ذهب متعددة الألوان أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.mulitColorGold,
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
            title: `تسوقي مجوهرات ذهب مرصعة بأحجار ملونة في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب بأحجار ملونة أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.coloredStone,
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
            title: `تسوقي مجوهرات ذهب مرصعة باللؤلؤ في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب باللؤلؤ أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.goldPearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              stone: ["pearlsAr"],
            }),
          },
        },
        "under-500": {
          seo: {
            title: `تسوقي مجوهرات ذهب بأقل من 500 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب بأسعار آقل من 500 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              price: ["under500"],
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
        "500-1000": {
          seo: {
            title: `تسوقي مجوهرات ذهب بأقل من 1,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب بأسعار آقل من 1,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              price: ["500to1000"],
            }),
          },
        },
        "1000-2000": {
          seo: {
            title: `تسوقي مجوهرات ذهب بأقل من 2,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب بأسعار آقل من 2,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              price: ["1000to2000"],
            }),
          },
        },
        "2000-4000": {
          seo: {
            title: `تسوقي مجوهرات ذهب بأقل من 4,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات الذهب بأسعار آقل من 4,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              price: ["2000to4000"],
            }),
          },
        },
        "4000-above": {
          seo: {
            title: `تسوقي مجوهرات ذهب بأكثر من 4,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من المجوهرات الذهبية بأسعار تبدأ من 4,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGold?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["lazurdeGoldAr"],
              price: ["4000above"],
            }),
          },
        },
      },
    },
    "fashion-jewelry": {
      seo: {
        title:
          "تسوقي مجوهرات أزياء نسائية في الإمارات | Page <number> | لازوردي الإمارات",
        description:
          "اكتشفي مجموعتنا الرائعة من مجوهرات الأزياء من الخواتم والقلائد والأساور وغيرها أونلاين في الإمارات. احصلي على توصيل وإرجاع مجاني مع خيارات للشراء الفوري والدفع لاحقًا.",
      },
      banner: bannersFashionJewelry?.LoneCategory,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `تسوقي عقود وقلائد أزياء في الإمارات | تصميمات قلائد | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من قلائد ودلايات الأزياء أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.necklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              category: ["necklace"],
            }),
          },
        },
        rings: {
          seo: {
            title: `تسوقي خواتم أزياء نسائية | تصميمات خاتم في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من خواتم الأزياء وخواتم الزفاف أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.rings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              category: ["rings"],
            }),
          },
        },
        "bracelets-anklets": {
          seo: {
            title: `تسوقي أساور أزياء نسائية | أساور وخلاخيل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من أساور وخلاخيل الأزياء أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع، مع خيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.braceletsAnklets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              category: ["bracelets"],
            }),
          },
        },
        earrings: {
          seo: {
            title: `تسوقي أقراط أزياء نسائية | تصميمات الأقراط في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من أقراط الأزياء أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.earrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              category: ["earrings"],
            }),
          },
        },
        sets: {
          seo: {
            title: `تسوقي أطقم مجوهرات أزياء نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من أطقم مجوهرات الأزياء أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.sets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              category: ["sets"],
            }),
          },
        },
        "half-sets": {
          seo: {
            title: `تسوقي نصف أطقم مجوهرات أزياء نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من نصف أطقم مجوهرات الأزياء أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.halfSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              type: ["halfSetsAr"],
            }),
          },
        },
        kids: {
          seo: {
            title: `تسوقي مجوهرات أزياء للأطفال في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات أزياء للأطفال أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.kids,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              collection: ["kidsAr"],
            }),
          },
        },
        mens: {
          seo: {
            title: `تسوقي مجوهرات أزياء رجالية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات أزياء رجالية أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.mens,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              collection: ["mensAr", "unisexAr"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `تسوقي جميع المنتجات - مجوهرات أزياء | Page <number> | لازوردي الإمارات`,
            description: `اكتشف مجموعة رائعة من مجوهرات الأزياء أونلاين في لازوردي الإمارات. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
            }),
          },
        },
        "coins-bars": {
          seo: {
            title: `تسوقي سبائك وعملات ذهب أونلاين في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `استكشفي مجموعتنا من سبائك وعملات ذهب أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.coinsBars,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              category: ["gold"],
              type: ["goldCoinAr", "goldBarAr"],
            }),
          },
        },
        "best-sellers": {
          seo: {
            title: `تسوقي أفضل مجوهرات الأزياء مبيعاً في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أفضل ماركات مجوهرات الأزياء أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.bestSeller,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
            }),
          },
        },
        "new-in": {
          seo: {
            title: `تسوقي أحدث وأجدد تصميمات مجوهرات الأزياء في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أحدث تصاميم مجوهرات الأزياء الجديدة أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              newIn: ["newIn"],
            }),
          },
        },
        "special-price": {
          seo: {
            title: `احصلي على أفضل الأسعار على مجوهرات الأزياء في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء أونلاين في الإمارات، والتي تقدم قيمة رائعة بأفضل الأسعار. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
            }),
          },
        },
        "yellow-gold": {
          seo: {
            title: `تسوقي مجوهرات أزياء ذهب أصفر في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء من الذهب أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              metalColor: ["yellowGoldAr"],
            }),
          },
        },
        "white-gold": {
          seo: {
            title: `تسوقي مجوهرات أزياء ذهب أبيض في الإمارات العربية | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء من الذهب الأبيض أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              metalColor: ["whiteGoldAr"],
            }),
          },
        },
        "rose-gold": {
          seo: {
            title: `تسوقي مجوهرات أزياء ذهب وردي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء من الذهب الوردي أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              metalColor: ["roseGoldAr"],
            }),
          },
        },
        "multicolor-gold": {
          seo: {
            title: `تسوقي مجوهرات أزياء ذهب متعدد الألوان في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات أزياء ذهب متعدد الألوان أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.multicolorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              metalColor: [
                "yellowWhiteGoldAr",
                "whiteRoseGoldAr",
                "yellowWhiteRoseGoldAr",
                "yellowRoseGoldAr",
              ],
            }),
          },
        },
        "gold-plated": {
          seo: {
            title: `تسوقي مجوهرات أزياء مطلية بالذهب في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء المطلية بالذهب أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.goldPlated,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              metalColor: ["goldPlated"],
            }),
          },
        },
        "sterling-silver": {
          seo: {
            title: `تسوقي مجوهرات أزياء من الفضة الاسترلينية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء من الفضة الإسترليني أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.sterlingSilver,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              metalColor: ["sterlingSilver"],
            }),
          },
        },
        diamonds: {
          seo: {
            title: `تسوقي مجوهرات أزياء الماس في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء من الالماس أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.diamond,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              diamonds: ["diamondsAr"],
            }),
          },
        },
        "colored-stones": {
          seo: {
            title: `تسوقي مجوهرات أزياء بأحجار ملونة في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء من الأحجار الملونة أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              stone: ["coloredStonesAr"],
            }),
          },
        },
        pearls: {
          seo: {
            title: `تسوقي مجوهرات أزياء من اللؤلؤ في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء من اللؤلؤ أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              stone: ["pearlsAr"],
            }),
          },
        },
        "under-500": {
          seo: {
            title: `تسوقي مجوهرات أزياء بأقل من 500 درهم في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء بأسعار أقل من 500 درهم أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              price: ["under500"],
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
        "500-1000": {
          seo: {
            title: `تسوقي مجوهرات أزياء بأقل من 1,000 درهم في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء بأسعار أقل من 1,000 درهم أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              price: ["500to1000"],
            }),
          },
        },
        "1000-2000": {
          seo: {
            title: `تسوقي مجوهرات أزياء بأقل من 2,000 درهم في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء بأسعار أقل من 2,000 درهم أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyle", "waves"],
              price: ["1000to2000"],
            }),
          },
        },
        "2000-4000": {
          seo: {
            title: `تسوقي مجوهرات أزياء بأقل من 4,000 درهم في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء بأسعار أقل من 4,000 درهم أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              price: ["2000to4000"],
            }),
          },
        },
        "4000-above": {
          seo: {
            title: `تسوقي مجوهرات أزياء بأكثر من 4,000 درهم في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأزياء بأسعار تبدأ من 4,000 درهم أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersFashionJewelry?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr", "instyleAr", "wavesAr"],
              price: ["4000above"],
            }),
          },
        },
      },
    },
    "love-engagement": {
      seo: {
        title:
          "تسوقي مجوهرات زواج وخطوبة في الإمارات | Page <number> | لازوردي الإمارات",
        description:
          "اكتشفي مجموعتنا من مجوهرات الزواج أونلاين في الإمارات، بما في ذلك الخواتم والعقود والأساور وغيرها. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.",
      },
      banner: bannersLoveEngagement?.LoneCategory,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({}, [
          {
            type: ["twinsAr", "solitaireAr", "eternityAr"],
          },
          {
            category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
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
          <h2>خواتم خطوبة رائعة في الإمارات</h2>
          يمكن أن يكون اختيار خاتم خطوبة من القرارات الصعبة لدى الكثير من الفتيات، ولكن مع خواتم الخطوبة من لازوردي ستجدين خاتم الأحلام الذي لطالما أردت امتلاكه. فكل خاتم في مجموعة لازوردي للخطوبة والزواج هو قطعة فنية تعكس معها معاني الحب والالتزام. يمكنك الآن الاختيار من بين مجموعة واسعة من التصاميم بداية من الخواتم السوليتر الكلاسيكية إلى الخواتم ذات التصاميم المعقدة المزينة بالألماس، ستجدي، من بينها، بالتأكيد الخاتم الذي يعكس قصة حبكما. جددوا حبكما على الدوام مع مجموعة لازوردي المذهلة لخواتم الخطوبة والزفاف.
          
          <h2>أناقة لا تنضب مع خواتم لازوردي للزفاف</h2>
          عندما يتعلق الأمر بالزفاف، فإن خاتم الزفاف يحمل دلالة خاصة ويعتبر رمزًا للحب والوفاء والارتباط الدائم. تعد خواتم الزفاف من لازوردي خيارًا رائعًا للأزواج الذين يبحثون عن قطعة فريدة من نوعها تعكس شخصيتهم وتجسد تفاصيل هذه البداية الجديدة. بالإضافة إلى التصميم الجمالي، تعتبر خواتم الزفاف من لازوردي أيضًا علامة على الجودة والمهارة الحرفية العالية. تمتاز لازوردي بتقديم مجوهرات من الدرجة الأولى تتميز بالتفاصيل الدقيقة واللمسة النهائية الفاخرة. سواء كنتِ تبحثين عن دبلة بسيطة وأنيقة أو تصميم مرصع بالألماس، فإن مجموعة خواتم الزفاف والخطوبة من لازوردي تضم خيارات لا حصر لها تعد رمزًا للحب الدائم والارتباط وستظل تذكارًا قيمًا طوال الحياة.
          
          <h2>تألقي بإطلالة العروس مع مجوهرات عروس من لازوردي في الإمارات</h2>
          يوم الزفاف هو يوم استثنائي في حياة العروس، وتسعى كل فتاة لأن تكون متألقة ومذهلة في هذا اليوم الخاص، لذا أبدع مصممو لازوردي مجموعة مجوهرات زفاف مذهلة لتبرز جمالك وأناقتك. تضم مجموعتنا كل ما تحتاجه كل عروس بداية من السلاسل والعقود الأنيقة من الذهب عياري 18 و21 قيراط إلى الأقراط المبهرة المرصعة بالألماس أو اللؤلؤ أو الأحجار الملونة. تم تصميم كل قطعة بعناية فائقة ممزوجة بلمسات من الحب لتحظي بطلة فريدة في يومك المميز.
          
          جاذبية لا تضاهى: خواتم الخطوبة الذهب.
          
          <h2>الأسئلة الشائعة:</h2>
          
          <h3>أي حجر هو الأمثل لخاتم خطوبة؟</h3>
          يعتمد ذلك على تفضيلك أنتِ وشريككِ.
          
          <h3>أي لون ذهب هو الأفضل لخاتم الخطوبة؟</h3>
          أي لون ذهب تفضلينه!
          
          <h3>ما أهمية خاتم الخطوبة؟</h3>
          إنه دليل حبكما ورمز الحب الذي يجمع بينكما.
          
          <h3>ما هي أنواع خواتم الخطوبة؟</h3>
          ثمة 4 أنواع وهي الخواتم السوليتر والخواتم الألماس والخواتم الهالو التي تتميز بهالة تحتضن ألماسة مركزية أو حجر كريم محاط بدائرة أصغر من الماس أو الأحجار الكريمة والخواتم التي تضم ثلاثة أحجار.
          
          `,
          },
        },
      ],
      schema: [
        {
          q: `أي حجر هو الأمثل لخاتم خطوبة؟`,
          a: `يعتمد ذلك على تفضيلك أنتِ وشريككِ.`
        },
        {
          q: `أي لون ذهب هو الأفضل لخاتم الخطوبة؟`,
          a: `أي لون ذهب تفضلينه!`
        },
        {
          q: `ما أهمية خاتم الخطوبة؟`,
          a: `إنه دليل حبكما ورمز الحب الذي يجمع بينكما.`
        },
        {
          q: `ما هي أنواع خواتم الخطوبة؟`,
          a: `ثمة 4 أنواع وهي الخواتم السوليتر والخواتم الألماس والخواتم الهالو التي تتميز بهالة تحتضن ألماسة مركزية أو حجر كريم محاط بدائرة أصغر من الماس أو الأحجار الكريمة والخواتم التي تضم ثلاثة أحجار.`
        },
      ],
      children: {
        "shop-all": {
          seo: {
            title: `تسوق جميع المنتجات - مجوهرات خطوبة و زواج | Page <number> | لازوردي الإمارات`,
            description: `اكتشف مجموعة فريدة من مجوهرات الزواج وخواتم الخطوبة أونلاين في لازوردي الإمارات. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({}, [
              {
                type: ["twinsAr", "solitaireAr", "eternityAr"],
              },
              {
                category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
              },
            ]),
          },
        },
        "twin-rings": {
          seo: {
            title: `تسوقي خواتم توينز | خواتم خطوبة توينز في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم التوينز أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الخواتم التوأم مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.twinRings,
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
              <h2>اكتشفي روعة خواتم التوينز الألماس التي تجسد معاني الوحدة والروابط القوية بين شخصين متحابين.</h2>
              <p>
				<span>تعبر خواتم التوينز من لازوردي عن حبكما المشترك الذي لا حدود له وتجسد كل قطعة ألماس رابطة لا يمكن كسرها. انطلقي في رحلة إلى عالم الأناقة والسحر مع خواتم التوينز من لازوردي واحصلي على إطلالات متألقة بلا حدود. صُممت </span><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">خواتم</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">الخطوبة</span></u></a><span> لتحتفلا بلحظات الخطوبة المبهجة والتي تعتبر من أكثر اللحظات سعادة وسحرًا في حياة أي ثنائي. فهي اللحظة التي يعلن فيها الحبيبان عن تعهدهما المتبادل وقرارهما بمشاركة الحياة معًا. وبما أن هذه اللحظة فريدة وخاصة، فإن خاتم الخطوبة يكتسب أهمية كبيرة في رمزية الاحتفال. وفي الخطوة التالية من رحلتكما المشتركة، دعوا خواتم الخطوبة التوينز تكون تعبيرًا عن التزامكما وبداية لحياة تملأها الحب والسعادة، فهي تذكير لكما بروح المغامرة والوحدة والتفاني التي تشتركان فيها.</span>
		        	</p>

              <h2>تمتعي بجمال دبل التوينز الذهب من لازوردي</h2>

              <p>
				<span>زيني أصابعكِ دبل التوينز الرائعة التي تشهد على عمق حبكما، فمجموعة خواتم التوينز من لازوردي تتميز بتصاميمها الجذابة والمتنوعة، كما أننا نقدم لكِ خيارات متعددة من ألوان الذهب لتناسب جميع الأذواق. يمكنكِ الاختيار بين </span><a href="https://www.lazurde.com/ar-sa/diamond/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/diamond/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/diamond/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأصفر</span></u></a><span> التقليدي الذي يعتبر رمزًا للفخامة والتقاليد، أو </span><a href="https://www.lazurde.com/ar-sa/gold/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/gold/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/gold/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأبيض</span></u></a><span> العصري الذي يتميز بمظهره الأنيق والأنثوي، أو </span><a href="https://www.lazurde.com/ar-sa/gold/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/gold/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/gold/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الوردي</span></u></a><span> الجميل الذي يضفي لمسة من الرومانسية. اختاري خواتم التوينز التي تعبّر عن قصة حبكما وتجسد رمز الارتباط العميق الذي يجمعكما. دعي خواتم التوينز من لازوردي تضيء قصة حبكما بجمالٍ لا يعد ولا يحصى، فهي ليست مجرد قطع مجوهرات، بل هي تعبير عن الروح والمشاعر العميقة التي تجمعكما، وستبقى تحفة فنية تحمل قيمة عاطفية لا تقدر بثمن.</span>
		        	</p>

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>ما أهمية خواتم التوينز؟</h3>
              تشكل خواتم التوينز اختيارًا مثاليًا للشريكين اللذين يبحثان عن شيء للاحتفال بحبهما.
              
              <h3>مما تتكون خواتم التوينز؟</h3>
              <p>
				<span>تضم مجموعة لازوردي أطقم توينز مكونة من دبلة توينز ألماس و</span><a href="https://www.lazurde.com/ar-sa/love-engagement/eternity-rings" style="text-decoration:none"><u><span style="color:#1155cc">خاتم</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/eternity-rings" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/eternity-rings" style="text-decoration:none"><u><span style="color:#1155cc">إتيرنيتي</span></u></a><span> أو خاتم ستيتمنت مرصع بالألماس.</span>
		        	</p>

              <h3>هل يمكن أن أرتدي كل خاتم على حدة؟</h3>
              بالطبع، يمكنكِ ارتداء كل خاتم منفردًا.
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `ما أهمية الخواتم التوينز؟`,
              a: `يشكل التوينز اختيارًا مثاليًا للشريكين اللذين يبحثان عن شيء للاحتفال بحبهما.`
            },
            {
              q: `مما يتكون التوينز؟`,
              a: `تضم مجموعة لازوردي أطقم توينز من دبلة وخاتم إتيرنيتي أو خاتم ستيتمنت مرصع بالألماس.`
            },
            {
              q: `هل يمكن ان ارتدي كل خاتم على حدا؟`,
              a: `بالطبع، يمكنك ارتداء كل خاتم منفردا  حيث يأتوا بتصميم رائع.`
            },
          ]
        },
        "solitaire-rings": {
          seo: {
            title: `تسوقي خواتم سوليتير | خواتم سوليتير للخطوبة في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم خطوبة سوليتير أونلاين في الإمارات، بتصميمات فاخرة. تسوقي خواتم الخطوبة بماسة واحدة مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.solitaireRings,
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

              <h2>عززي أناقتكِ مع مجوهرات سوليتير لازوردي في الإمارات العربية المتحدة</h2>

              <p>
				<span>أضيفي لمسة من الأناقة إلى مظهركِ اليومي مع مجوهرات السوليتير من لازوردي والتي تحظى بشعبية كبيرة في المملكة. تحتوي مجموعتنا على تشكيلة متنوعة من تصاميم السوليتير التي تعزز أي إطلالة، إن مجوهرات السوليتير ليست مخصصة فقط للخطوبة وعروض الزواج، بل تطورت وتجاوزت الارتباط التقليدي بالالتزام، وأصبحت خيارًا متعدد الاستخدامات وعصريًا للارتداء اليومي. اغمري نفسكِ بمظهر مفعم بالبساطة المترفة مع مجوهرات السوليتير واعتبريها بمثابة تعبيرًا فعليًا عن ذوقكِ الراقي. تألقي بإطلالة ساحرة لا مثيل لها مع خواتم السوليتر من لازوردي والتي تناسب مختلف المناسبات، فعندما يتعلق الأمر بالمجوهرات، فإن خاتم السوليتير يعتبر الخيار الأمثل دائمًا، فهو يجسد قطعة فريدة من نوعها تتميز ببساطتها وجمالها الخالد. وسواء كنتِ ترتدي الخاتم في مناسبة خاصة مثل حفلات الزفاف أو حفلات الذكرى السنوية، أو لإضافة لمسة من الأناقة إلى إطلالتكِ اليومية. دعي بريق </span><a href="https://www.lazurde.com/ar-sa/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">السوليتير</span></u></a><span> يتألق بسطوع استثنائي كتعبير عن شخصيتكِ المميزة.</span>
		       	</p>

              <h2>الأسئلة الشائعة:</h2>
              
              <h3>ما الذي يجعل الخواتم السوليتير مميزة؟</h3>
              تحظى الخواتم السوليتير بمكانة خاصة لإحتوائها على فص ألماس فائق اللمعان موضوع في منتصف الخاتم.
              
              <h3>كيف يمكن الاعتناء بالخاتم السوليتير؟</h3>
              يمكنكِ ببساطة مسح الخاتم بقطعة قماش مبللة لإزالة الأوساخ.

              <h3>ما شكل الخاتم السوليتير؟</h3>
              إن أكثر أشكال خواتم السوليتير شيوعًا هي الخواتم المزينة بفص ألماس دائري، إلا أنه يمكن الحصول على خاتم بفص ألماس شكل برنسيس أو أي تصميم آخر.

              <h3>كم يبلغ سعر خاتم سوليتير؟</h3>

              <p>
				<span>يختلف سعر خاتم السوليتير بناءً على عدة عوامل مثل وزن الألماس ودرجة نقاءه ولونه، بالإضافة إلى نوع المعدن (مثل </span><a href="https://www.lazurde.com/ar-sa/love-engagement/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأبيض</span></u></a><span><span></span>، </span><a href="https://www.lazurde.com/ar-sa/love-engagement/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc"><spa></span></u>الذهب</span></a><a href="https://www.lazurde.com/ar-sa/love-engagement/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأصفر</span></u></a><span>، البلاتين) وعياره، وتبدأ أسعار الخواتم من بضع مئات من الدولارات للألماس بحجم أصغر وجودة أقل، ويمكن أن تصل إلى عشرات الآلاف أو حتى مئات الآلاف من الدولارات للخواتم ذات الألماس الكبير الحجم والعالي الجودة.</span>
		        	</p>

              <h3>ما هو الفرق بين الالماس والسوليتير؟</h3>

              <p>
				<span>الألماس هو حجر كريم طبيعي يتكون من عنصر الكربون تحت ضغط عالٍ وحرارة شديدة في باطن الأرض، ويتميز بصلابته الفائقة وبريقه اللامع. يُعد الألماس من أكثر الأحجار الكريمة قيمة وجاذبية في مجال صناعة المجوهرات، ويُستخدم في تزيين </span><a href="https://www.lazurde.com/ar-sa/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">الخواتم</span></u></a><span><span></span>، </span><a href="https://www.lazurde.com/ar-sa/diamond/necklaces-pendants" style="text-decoration:none"><u><span style="color:#1155cc"><spa></span></u>القلائد</span></a><span><span></span>، </span><a href="https://www.lazurde.com/ar-sa/diamond/earrings" style="text-decoration:none"><u><span style="color:#1155cc"><spa></span></u>الأقراط</span></a><a href="https://www.lazurde.com/ar-sa/diamond/earrings" style="text-decoration:none"><u><span style="color:#1155cc">،</span></u></a><span> وغيرها من قطع المجوهرات.</span>
			</p>
			<p>
				<span>أما "السوليتير" فهو مصطلح يستخدم لوصف نوع معين من تصميم المجوهرات، وبشكل أكثر تحديدًا، الخواتم. يتميز خاتم السوليتير بأنه يحتوي على حجر كريم واحد، وغالبًا ما يكون هذا الحجر هو حجر ألماس. وإذا كنتِ تبحثين عن </span>خواتم ألماس سوليتير ، تقدم لكِ لازوردي الإمارات أفضل مجوهرات السوليتير التي ستضيف لمسة ساحرة لمظهركِ. 
			</p>

              `,
              },
            },
          ],
          schema: [
            {
              q: `ما الذي يجعل الخواتم السوليتير مميزة؟`,
              a: `تحظى الخواتم السوليتير بمكانة خاصة لإحتوائها على فص ألماس لامع في مركز الحلقة المعدنية.`
            },
            {
              q: `كيف يمكن الاعتناء بالخاتم السوليتير؟`,
              a: `يمكنك ببساطة، مسح الخاتم بقطعة قماش مبللة لإزالة الأوساخ أو البقع.`
            },
            {
              q: `ما شكل الخاتم السوليتير؟`,
              a: `أشيع أشكال الخواتم السوليتير هو الذي يتزين بألماس مقطوع بقصة البريليانت، إلا أنه يمكن الحصول على خاتم بفص مقطوع بقصة البرنسيس أو أي قصة أخرى مناسبة.`
            },
          ]
        },
        "eternity-rings": {
          seo: {
            title: `تسوقي خواتم انترنيتي | خواتم خطوبة انترنيتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم خطوبة لا نهاية أونلاين في الإمارات، بتصميمات فاخرة. تسوقي خواتم الخطوبة الأبدية مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.eternityRings,
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
              أصبح للأناقة والفخامة عنوانًا جديدًا مع خواتم اتيرنيتي <a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">الألماس</span></u></a> من لازوردي. عندما نلقي نظرة على خاتم الإتيرنيتي، نرى دائرة لامتناهية ترمز إلى الروابط القوية والحب الأبدي. ترمز إلى استمرارية العلاقة والحب الذي لا ينتهي. وتعكس الألماسات اللامعة في الدائرة الجمال والتألق وتضيف لمسة من الرقي والفخامة إلى الخاتم. وقد تم اختيار كل ألماسة بعناية فائقة لضمان جودته ولمعانه الاستثنائي من جميع الزوايا. ببساطة، تعتبر خواتم الإتيرنيتي من لازوردي شاهدًا حقيقيًا على حبكما.
            </p>

              `,
              },
              content: {
                value: `
                
              <h2>خواتم اتيرينتي ألماس لذكرى خاصة يوم زفافك</h2>

              <p>
			        	احتفلي بقصة حبكما الأبدية والروابط التي تجمع بينكما مع خواتم الاتيرينتي الألماس من لازوردي. خواتم مميزة صممت لتكون جزءًا من يوم زفافك الخاص مرصعة بألماسات لامعة لتمنحك طلة مثالية لا تنسى. تتوفر خواتم الإتيرنيتي بمختلف التصاميم والأشكال وخيارات الألماسات، مما يتيح لك اختيار الخاتم الذي يتناسب مع ذوقك ويعكس شخصيتك. يمكنك اختيار <a href="https://www.lazurde.com/ar-ae/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأبيض</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a>الكلاسيكي أو <a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأصفر</span></u></a> الدافئ أو <a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الوردي</span></u></a> الرقيق، حسب تفضيلاتك الشخصية.
			        </p>

              <h2>تسوقي خواتم اتيرنيتي المميزة للنساء الآن في الإمارات</h2>

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
              a: `تعتبر خواتم الإتيرنيتي رمزًا جميلًا للحب الأبدي وتكون اختيارًا مثاليًا لمختلف المناسبات. سواء كانت طلبًا للزواج، خطوبة، ذكرى سنوية أو أي لحظة خاصة أخرى، حيث تحمل خواتم الإتيرنيتي معنى هام وتعبر عن وعد صادق.`
            },
            {
              q: `هل يمكن ارتداء الخاتم الاتيرنيتي يوميًا؟`,
              a: `نعم، بكل تأكيد.`
            },
            {
              q: `هل يمكن تنسيق خاتم اترنتي مع خاتم آخر؟`,
              a: `بالطبع يمكنك تنسيقه مع خواتم آخرى بسبب تصميم البسيط و الراقي.`
            },
          ]
        },
        "gold-sets": {
          seo: {
            title: `طقم ذهب للعروس | أطقم ذهب للزواج في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أطقم الذهب للعروس أونلاين في الإمارات، بتصميمات فاخرة. تسوقي طقم العروس الذهبي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.goldSets,
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
            title: `تسوقي طقم زواج الماس | أطقم عروس في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أطقم الالماس للعروس أونلاين في الإمارات، بتصميمات فاخرة. تسوقي طقم العروس بالماس مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.diamondSets,
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
            title: `تسوقي مجوهرات لازوردي للزواج في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات العروس والخطوبة لدى لازوردي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                brand: ["lazurdeAr"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        instyle: {
          seo: {
            title: `تسوقي مجوهرات إنستايل للزفاف في الإمارات | Page <number> | لازوردي الإمارات`,
            description:
              "استكشفي مجموعتنا من إنستايل أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersLoveEngagement?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                brand: ["instyleAr"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "miss-l": {
          seo: {
            title: `تسوقي مجوهرات الزفاف من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات "مس أل" للزفاف والخطوبة أونلاين في الإمارات، ووالتي تقدم تصاميم رائعة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
          },
          banner: bannersLoveEngagement?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                brand: ["misslAr"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        waves: {
          seo: {
            title: `تسوقي مجوهرات ويفز للزفاف في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الزواج والخطوبة لدى ويفز أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.waves,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                brand: ["wavesAr"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "best-sellers": {
          seo: {
            title: `تسوقي مجوهرات خطوبة الأكثر مبيعًا | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة الأكثر مبيعًا أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.bestSeller,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({}, [
              {
                type: ["twinsAr", "solitaireAr", "eternityAr"],
              },
              {
                category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
              },
            ]),
          },
        },
        "new-in": {
          seo: {
            title: `تسوقي أحدث مجوهرات الخطوبة للنساء | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أحدث مجوهرات الخطوبة والجديدة أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                newIn: ["newIn"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "special-price": {
          seo: {
            title: `أفضل أسعار مجوهرات الخطوبة للنساء | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة أونلاين في الإمارات، بقيمة ممتازة وأفضل الأسعار. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({}, [
              {
                type: ["twinsAr", "solitaireAr", "eternityAr"],
              },
              {
                category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
              },
            ]),
          },
        },
        "yellow-gold": {
          seo: {
            title: `تسوقي مجوهرات خطوبة ذهب أصفر في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة من الذهب الأصفر أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: ["yellowGoldAr"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "white-gold": {
          seo: {
            title: `تسوقي مجوهرات خطوبة ذهب أبيض في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة من الذهب الأبيض أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: ["whiteGoldAr"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "rose-gold": {
          seo: {
            title: `تسوقي مجوهرات خطوبة ذهب وردي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة من الذهب الوردي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: ["roseGoldAr"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "multicolor-gold": {
          seo: {
            title: `تسوقي مجوهرات خطوبة ذهب متعددة الألوان أونلاين في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `استكشفي مجموعتنا من مجوهرات خطوبة ذهب متعددة الألوان أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.multicolorGold,
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
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "gold-plated": {
          seo: {
            title: `تسوقي مجوهرات خطوبة مطلية بالذهب في الإمارات| Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة مطلية بالذهب أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.goldPlated,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: ["goldPlatedAr"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "sterling-silver": {
          seo: {
            title: `تسوقي مجوهرات خطوبة فضة استرليني في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة من الفضة الإسترلينية أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.sterlingSilver,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                metalColor: ["sterlingSilverAr"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        diamonds: {
          seo: {
            title: `تسوقي مجوهرات خطوبة الماس في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة المرصعة بالألماس أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.diamond,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                diamonds: ["diamondsAr"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "colored-stones": {
          seo: {
            title: `تسوقي مجوهرات خطوبة حجر ملون في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة المرصعة بأحجار الألوان أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                stone: ["coloredStonesAr"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        pearls: {
          seo: {
            title: `تسوقي مجوهرات الخطوبة اللؤلؤ في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الخطوبة المرصعة باللؤلؤ أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                stone: ["pearlsAr"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "under-500": {
          seo: {
            title: `مجوهرات زواج وخطوبة بأقل من 500 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات العروس والخطوبة بأسعار أقل من 500 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["under500"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "500-1000": {
          seo: {
            title: `مجوهرات زواج وخطوبة بأقل من 1,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات العروس والخطوبة بأسعار أقل من 1,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["500to1000"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "1000-2000": {
          seo: {
            title: `مجوهرات زواج وخطوبة بأقل من 2,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات العروس والخطوبة بأسعار أقل من 2,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["1000to2000"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "2000-4000": {
          seo: {
            title: `مجوهرات زواج وخطوبة بأقل من 4,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات العروس والخطوبة بأسعار أقل من 4,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["2000to4000"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
                  collection: ["lazurdeDiamondsAr", "lazurdeGoldAr"],
                },
              ]
            ),
          },
        },
        "4000-above": {
          seo: {
            title: `مجوهرات زواج وخطوبة بأكثر 4,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات العروس والخطوبة بأسعار تبدأ من 4,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersLoveEngagement?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets(
              {
                price: ["4000above"],
              },
              [
                {
                  type: ["twinsAr", "solitaireAr", "eternityAr"],
                },
                {
                  category: [(categoryIdByRegion as any)?.["ae"]?.["sets"]],
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
        title:
          "تسوقي هدايا مجوهرات نسائية | هدايا لها في الإمارات | Page <number> | لازوردي الإمارات",
        description: `اكتشفي مجموعتنا من هدايا المجوهرات النسائية في الإمارات، بما في ذلك الخواتم، الأساور، العقود وأكثر. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersGiftsOccasions?.giftsOccasions,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `تسوقي هدايا عقود و قلائد نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا القلادات والعقود أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.necklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["necklace"],
            }),
          },
        },
        rings: {
          seo: {
            title: `تسوقي هدايا خواتم نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا الخواتم أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.rings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["rings"],
            }),
          },
        },
        "bracelets-anklets": {
          seo: {
            title: `تسوقي هدايا أساور نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا الأساور والخلاخيل أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.bracelets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["bracelets"],
            }),
          },
        },
        earrings: {
          seo: {
            title: `تسوقي هدايا أقراط نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا الأقراط أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.earrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["earrings"],
            }),
          },
        },
        sets: {
          seo: {
            title: `تسوقي أطقم هدايا مجوهرات نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أطقم هدايا مجوهرات أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.sets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["sets"],
            }),
          },
        },
        "half-sets": {
          seo: {
            title: `تسوقي نصف طقم هدايا مجوهرات نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من نصف أطقم هدايا مجوهرات أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.halfSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              type: ["halfSetsAr"],
            }),
          },
        },
        kids: {
          seo: {
            title:
              "تسوقي هدايا مجوهرات للأطفال أونلاين في الإمارات | Page <number> | لازوردي الإمارات",
            description:
              "استكشفي مجموعتنا من هدايا مجوهرات للأطفال أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersGiftsOccasions?.kids,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              collection: ["kidsAr"],
            }),
          },
        },
        mens: {
          seo: {
            title:
              "تسوقي هدايا مجوهرات للرجال أونلاين في الإمارات | Page <number> | لازوردي الإمارات",
            description:
              "استكشفي مجموعتنا من هدايا مجوهرات للرجال أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersGiftsOccasions?.mens,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              collection: ["mensAr", "unisexAr"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `تسوق جميع المنتجات - هدايا مجوهرات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعة متفردة من هدايا المجوهرات أونلاين في لازوردي الإمارات. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.shopAll,
          bannerWithcards: null,
          plpComponent: {},
        },
        lazurde: {
          seo: {
            title: `تسوقي الهدية المثالية لأي مناسبة من مجوهرات لازوردي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا لازوردي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["lazurdeAr"] }),
          },
        },
        instyle: {
          seo: {
            title: `تسوقي الهدية المثالية لأي مناسبة من مجوهرات إنستايل | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا إنستايل لازوردي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["instyleAr"] }),
          },
        },
        "miss-l": {
          seo: {
            title: `تسوقي مجوهرات مس أل كهدية مثالية لكل المناسبات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا مس أل أونلاين في الإمارات، ووالتي تقدم تصاميم رائعة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
          },
          banner: bannersGiftsOccasions?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["misslAr"] }),
          },
        },
        waves: {
          seo: {
            title: `تسوقي الهدية المثالية لأي مناسبة من مجوهرات ويفز | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا ويفز أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.waves,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["wavesAr"] }),
          },
        },
        "coins-bars": {
          seo: {
            title: `تسوقي هدايا عملات وسبائك أونلاين في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `استكشفي مجموعتنا من هدايا عملات وسبائك أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.coinsBars,
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
            title: `تسوقي أفضل المجموعة الأكثر مبيعاً لهدايا المجوهرات المثالية لكل مناسبة | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات الأكثر مبيعًا أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: {},
          },
        },
        "new-in": {
          seo: {
            title: `تسوقي أحد هدايا المجوهرات النسائية | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أحدث هدايا المجوهرات أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              newIn: ["newIn"],
            }),
          },
        },
        "special-price": {
          seo: {
            title: `أفضل أسعار هدايا المجوهرات النسائية | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات أونلاين في الإمارات، بقيمة رائعة وأفضل الأسعار. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: {},
          },
        },
        "yellow-gold": {
          seo: {
            title: `تسوقي هدايا مجوهرات ذهب أصفر في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات من الذهب الأصفر أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["yellowGoldAr"] }),
          },
        },
        "white-gold": {
          seo: {
            title: `تسوقي هدايا مجوهرات ذهب أبيض في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات من الذهب الأبيض أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["whiteGoldAr"] }),
          },
        },
        "rose-gold": {
          seo: {
            title: `تسوقي هدايا مجوهرات ذهب وردي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات من الذهب الوردي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["roseGoldAr"] }),
          },
        },
        "multicolor-gold": {
          seo: {
            title: `تسوقي هدايا مجوهرات ذهب متعددة الألوان أونلاين في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `استكشفي مجموعتنا من هدايا مجوهرات ذهب متعددة الألوان أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.mulitColorGold,
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
        "gold-plated": {
          seo: {
            title: `تسوقي هدايا مجوهرات ذهب مطلي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات المطلية بالذهب أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.goldPlated,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["goldPlatedAr"] }),
          },
        },
        "sterling-silver": {
          seo: {
            title: `تسوقي هدايا مجوهرات فضة استرليني في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات من الفضة الإسترلينية أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.sterlingSilver,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["sterlingSilverAr"] }),
          },
        },
        diamonds: {
          seo: {
            title: `تسوقي هدايا مجوهرات الماس في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات المرصعة بالألماس أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.diamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              diamonds: ["diamondsAr"],
            }),
          },
        },
        "colored-stones": {
          seo: {
            title: `تسوقي هدايا مجوهرات أحجار ملونة في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات المرصعة بأحجار ملونة أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              stone: ["coloredStonesAr"],
            }),
          },
        },
        pearls: {
          seo: {
            title: `تسوقي هدايا مجوهرات لؤلؤ في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات المزينة باللؤلؤ أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              stone: ["pearlsAr"],
            }),
          },
        },
        "under-500": {
          seo: {
            title: `هدايا المجوهرات بأقل من 500 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات بأسعار أقل من 500 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["under500"] }),
          },
        },
        "500-1000": {
          seo: {
            title: `هدايا المجوهرات بأقل من 1,000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات بأسعار أقل من 1,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["500to1000"] }),
          },
        },
        "1000-2000": {
          seo: {
            title: `هدايا المجوهرات بأقل من 2,000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات بأسعار أقل من 2,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["1000to2000"] }),
          },
        },
        "2000-4000": {
          seo: {
            title: `هدايا المجوهرات بأقل من 4,000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات بأسعار أقل من 4,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["2000to4000"] }),
          },
        },
        "4000-above": {
          seo: {
            title: `هدايا المجوهرات بأكثر 4,000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا المجوهرات بأسعار تبدآ من 4,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasions?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["4000above"] }),
          },
        },
      },
    },
    "gifts-occasions": {
      seo: {
        title:
          "تسوقي هدايا مجوهرات نسائية | هدايا لها في الإمارات | Page <number> | لازوردي الإمارات",
        description:
          "اكتشفي مجموعتنا من هدايا المجوهرات النسائية في الإمارات، بما في ذلك الخواتم، الأساور، العقود وأكثر. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.",
      },
      banner: bannersGiftsOccasionsBrand?.lOne,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        lazurde: {
          seo: {
            title: `تسوقي الهدية المثالية لأي مناسبة من مجوهرات لازوردي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا لازوردي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasionsBrand?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["lazurdeAr"] }),
          },
        },
        instyle: {
          seo: {
            title: `تسوقي الهدية المثالية لأي مناسبة من مجوهرات إنستايل | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا إنستايل أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasionsBrand?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["instyleAr"] }),
          },
        },
        "miss-l": {
          seo: {
            title: `تسوقي مجوهرات مس أل كهدية مثالية لكل المناسبات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا مس أل لازوردي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasionsBrand?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["misslAr"] }),
          },
        },
        waves: {
          seo: {
            title: `تسوقي الهدية المثالية لأي مناسبة من مجوهرات ويفز | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من هدايا ويفز أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersGiftsOccasionsBrand?.waves,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["wavesAr"] }),
          },
        },
      },
    },
    jewelry: {
      seo: {
        title:
          "تسوقي مجوهرات نسائية في الإمارات | Page <number> | لازوردي الإمارات",
        description:
          "اكتشفي مجموعتنا الرائعة من المجوهرات من الخواتم والقلائد والأساور وغيرها أونلاين في الإمارات. احصلي على توصيل وإرجاع مجاني مع خيارات للشراء الفوري والدفع لاحقًا.",
      },
      banner: bannersJewelry?.LOne,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `تسوقي عقود وقلائد في الإمارات | تصميمات قلائد | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من القلائد والعقود أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelrynecklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              category: ["necklace"],
            }),
          },
        },
        rings: {
          seo: {
            title: `تسوقي خواتم نسائية | تصميمات خاتم في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من الخواتم والخواتم الزفاف أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryRings,
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
                <h2>خواتم آسرة لكل امرأة!</h2>
                لدينا في لازوردي، دائمًا ما يلتقي الرقي بالإبداع. كل خاتم في مجموعتنا هو تجسيد لمعاني الجمال الخالد والحرفية الاستثنائية وهو ما يجعلها كنوزًا غالية وخالدة لا تتأثر بتغيرات الزمان. سواء كنتِ تبحثين عن خواتم نسائية تناسب إطلالاتك اليومية أو تصميمات خواتم ملكية بارزة أو خاتم ذهب عصري ملفت أو أخر بتصميم انفنيتي يرمز إلى حبك الأبدي، فهذه دعوة منا لاكتشاف مجموعتنا واختيار الخاتم المثالي الذي ينسجم مع ذوقك وروحك المميزة. لقصص الحب الأبدية التي لا تتأثر بمرور الزمان، نقدم لكِ مجموعة مميزة من الدبل وخواتم الزفاف، التي تتزين بالألماس والسولتير والخواتم الكلاسيكية التي تأسر القلوب برقتها. إنها، بالتأكيد، هي كل ما تريدينه لتحتفلي بمناسباتك الرومانسية الخاصة.

                `,
              },
              content: {
                value: `
                 
               <h2>اختاري تصميمات خواتم نسائية تبرز جمالك</h2>
               نقدم إليكِ أيضًا مجموعة من الخواتم الملكية التي تبرز جمالك الملكي الخاص بسحرها الفخم وأجوائها الآسرة. لأنك تستحقين الأفضل دائمًا، جاءت مجموعة خواتم لازوردي لتزيني أصابعك بتصاميم ملكية ساحرة تبرز جمالك وتلفت الانتباه. وللمسة من الأناقة الجريئة، ندعوك لاكتشاف مجموعتنا المميزة من خواتم الخنصر المصممة لتضفي إلى مظهرك لمسة من الرقي والذوق الرفيع. تضم مجموعتنا تشكيلة لا حصر لها من الخواتم الاستيتمنت والخواتم ذات الرأس المزدوجة وهذا من معرفتنا العميقة بحبك للاختيارات المتنوعة. تصاميم ساحرة بكل بساطة! تألقي على الدوام بكل ثقة وجرأة مع هذه المجموعة الرائعة من الخواتم التي تحتفي بفرادتك واستثنائيتك.

               <h2>مجموعة خواتم لازوردي المميزة في الإمارات</h2>

               <p>
			      	<span>الفتي أنظار الجميع وتألقي مع مجموعة خواتم لازوردي الرائعة. باهتمام فائق للتفاصيل، نقدم لكِ مجموعة من الخواتم بتصاميم جريئة و</span><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">أحجار</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">كريمة</span></u></a><span > ملفتة تتألق ببريق خاص. يمكنك الاختيار من بين الخواتم المصاغة من </span><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأصفر</span></u></a><span > أو </span><a href="https://www.lazurde.com/ar-ae/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأبيض</span></u></a><span > الراقي أو الخواتم الأنيقة المصاغة من </span><a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الوردي</span></u></a><span >. نهتم في لازوردي بابتكار تصاميم تناسب جميع الأذواق. وسواء كنتِ من محبي </span><a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">الألماس</span></u></a><span > أو </span><a href="https://www.lazurde.com/ar-ae/gold/pearls" style="text-decoration:none"><u><span style="color:#1155cc">اللؤلؤ</span></u></a><span > أو الأحجار الملونة التي تترك دائمًا انطباعًا مميزًا في النفوس، ستجدي بالتأكيد ما تريدين! اكتشفي قوة التعبير عن الذات من خلال مجموعتنا من الخواتم التي سترتقي بأسلوبك ومظهرك إلى أفاق جديدة.</span>
		        	</p>

               <h2>الأسئلة الشائعة:</h2>
               
               <h3>كيف يمكن قياس الخاتم في المنزل؟</h3>
               استخدمي خيط ولفيه حول أصبعك. يمكنك إما تحديد نقطة بالقلم أو قطع الخيط من حيث يلتقي طرفاه، قومي بقياس الخيط بالمسطرة لتعرفي قطر الخاتم.
               
                <h3>على أي إصبع أرتدي الخاتم؟</h3>
                <p>
                <span>عادة ما يتم ارتداء </span><a href="https://www.lazurde.com/ar-ae/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">خاتم</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">الخطوبة</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">أو</span></u></a><a href="https://www.lazurde.com/ar-ae/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">الزواج</span></u></a><span> إما على إصبع الخاتم الأيسر أو الأيمن حسب التقاليد والثقافة. بالنسبة لباقي أنواع الخواتم، فهذا يعتمد على أسلوبك أنتِ. يمكنك اختيار ارتدائه بأي إصبع تريدينه.</span>
              </p>

               <h3>هل يمكنني ارتداء خاتم في إصبعي الأوسط؟</h3>
               نعم! حسب تفضيلك الشخصي.
               
               <h3>ما الأشكال المختلفة للخواتم؟</h3>

               <p>
               <span>يمكنك الاختيار من بين الخواتم الاستيتمنت أو الخواتم ذات الرأس المزدوجة أو</span><span dir="ltr"><span dir="ltr"></span> </span><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc"><span></span></u>الخواتم</span></a><a href="https://www.lazurde.com/ar-sa/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">الألماس</span></u></a><span> أو </span><a href="https://www.lazurde.com/ar-ae/love-engagement/eternity-rings" style="text-decoration:none"><u><span style="color:#1155cc">الاترنيتي</span></u></a><span> أو المحبس أو خواتم الخنصر أو الخواتم الملكية أو الدبل. </span>
             </p>
              `,
              },
            },
          ],
          schema: [
            {
              q: `كيف يمكن قياس الخاتم في المنزل؟`,
              a: `استخدمي خيط ولفيه حول أصبعك. يمكنك إما تحديد نقطة بالقلم أو قطع الخيط من حيث يلتقي طرفاه، قومي بقياس الخيط بالمسطرة لتعرفي قطر الخاتم.`
            },
            {
              q: `على أي إصبع أرتدي الخاتم؟`,
              a: `عادة ما يتم ارتداء خاتم الخطوبة أو الزواج إما على إصبع الخاتم الأيسر أو الأيمن حسب التقاليد والثقافة. بالنسبة لباقي أنواع الخواتم، فهذا يعتمد على أسلوبك أنتِ.  يمكنك اختيار ارتدائه بأي إصبع تريدينه.`
            },
            {
              q: `هل يمكنني ارتداء خاتم في إصبعي الأوسط؟`,
              a: `نعم! حسب تفضيلك الشخصي.`
            },
            {
              q: `ما الأشكال المختلفة للخواتم؟`,
              a: `يمكنك الاختيار من بين الخواتم الاستيتمنت أو الخواتم ذات الرأس المزدوجة أو الخواتم الألماس أو الاترنيتي أو المحبس أو خواتم الخنصر أو الخواتم الملكية أو الدبل. ثمة الكثير والكثير.`
            },
          ]
        },
        "bracelets-anklets": {
          seo: {
            title: `تسوقي أساور نسائية | أساور وخلاخيل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من الأساور والخلاخيل أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني وإمكانية الإرجاع، مع خيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryBraceletsAnklets,
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
                <h2>أساور نسائية فاخرة لجمال آسر</h2>
                زيني معصمك بتصاميم رائعة تجسد كل معاني الأناقة والرقي. إليكِ مجموعة مميزة من الأساور بتصاميم خلابة تجسد معاني الأناقة الفاخرة التي لا تفنى مع الزمان؛ والتي تحمل معها خيارات متنوعة تناسب مختلف الأذواق. ابتداءً من الأساور الرقيقة ذات الحلقات المتصلة التي تفيض بالأنوثة الرقيقة إلى أساور نسائية جريئة او رقيقة التي تعكس تفرد شخصيتك. نقدم لكِ مجموعة من الأساور المصممة بدقة وصنعة متناهية لتبرز جمالك وتعزز أناقتك. يمكنك الاختيار ما بين أساور التنس المميزة التي تجسد الأناقة التي لا يخفت توهجها أو الأساور ذات الحلقات التي لا تفشل أبدًا في جذب أنظار الجميع ونثر سحرها الخاص. كل ما عليكِ هو اختيار تصميمك المفضل الذي يناسب إطلالاتك لتكتمل أناقتك بشكل مثالي
           
              `,
              },
              content: {
                value: `
           
                <h2>استمتعي باساور و خلاخيل لازوردي فى الإمارات!</h2>

                <p>
				افتني الجميع باختياراتك الاستثنائية وخصوصًا مع تألق <a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">الألماس</span></u></a> ونقاء <a href="https://www.lazurde.com/ar-ae/jewelry/pearls" style="text-decoration:none"><u><span style="color:#1155cc">اللؤلؤ</span></u></a> و<a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الأحجار</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الملونة</span></u></a> التي تزين بانسيابية متناهية قطع لازوردي من <a href="https://www.lazurde.com/ar-ae/diamond/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/diamond/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأبيض</span></u></a> أو <a href="https://www.lazurde.com/ar-ae/gold/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/gold/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأصفر</span></u></a> أو <a href="https://www.lazurde.com/ar-ae/gold/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/gold/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الوردي</span></u></a><a href="https://www.lazurde.com/ar-sa/gold/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc" dir="ltr"><span dir="ltr"></span></u>.</span></a><span> كل أسورة في مجموعتنا هي كنز خالد ليأسر القلوب والألباب معًا ويترك معه أثرًا ساحرًا لا ينسى. سواء كنتِ ترغبين في أسوارة نسائية لترتديها مع أساور أخرى أو حتى أسوارة واحدة جريئة لتزين معصمك بذاتها، تأكدي أن ما تريدين سيكون ضمن مجموعتنا التي توفر اختيارات لا حصر لها تبرز شخصيتك وشعورك بالأناقة.</span>
		          	</p>

                <h2>لمسة من الأناقة والجاذبية على كاحليك: اكتشفي سحر الخلاخيل لمظهر رائع وجذاب بشكل لا يصدق</h2>
                دعي كاحليك يتألقان مع مجموعتنا الرائعة من الخلاخيل! تصاميم رقيقة ومبهجة تبرز احساسا فريدًا بالأناقة الجذابة. سواء كنت من محبي الخلخال البسيط أو الخلاخيل ذات الخرزات التي تضيف لمسة جذابة إلى إطلالاتك، فهنا ستجدين ما تبحثين عنه ضمن مجموعة خلابة من التصاميم الساحرة. أطلقي العنان لروحك وعززي سحرك الأنثوي، واختاري الخلخال المثالي لكِ الآن
                
                <h2>الأسئلة الشائعة:</h2>
                
                <h3>هل هناك أنواع مختلفة من الأساور؟</h3>
                نعم، هناك أشكال وأنواع مختلفة للأساور ومنها على سبيل المثال أساور التنس والأساور ذات الخرزات وأساور تشارم وأساور سلسلة (الانسيالات) والأساور العريضة البانجل وغيرها الكثير.
               
                <h3>كيف ارتدي الأسوارة؟</h3>
                يمكنك ارتداء الأسوارة وحدها أو تنسيقها مع أساور أخرى مناسبة لمظهر مميز واستثنائي.
               
                <h3>كيف اختار الأسوارة المناسبة؟</h3>
                قد يكون من الصعب اختيار أسورة واحدة من مجموعتنا، ولكن يرتبط اختيارك بعدة عوامل منها المناسبة التي سترتدي فيها الأسورة وذوقك وشخصيتك وملابسك وشكل الحجر.
                
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل هناك أنواع مختلفة من الأساور`,
              a: `نعم، هناك أشكال وأنواع مختلفة للأساور ومنها على سبيل المثال أساور التنس والأساور ذات الخرزات وأساور بتشارم وأساور سلسلة (الانسيالات) والأساور العريضة البانجل وغيرها الكثير.`
            },
            {
              q: `كيف ارتدي الأسوارة؟`,
              a: `يمكنك ارتداء الأسورة وحدها أو تنسيقها مع أساور أخرى مناسبة لمظهر مميز واستثنائي.`
            },
            {
              q: `كيف اختار الأسوارة المناسبة؟`,
              a: `قد يكون من الصعب اختيار أسورة واحدة من مجموعتنا، ولكن يرتبط اختيارك بعدة عوامل منها المناسبة التي سترتدي فيها الأسورة وذوقك وشخصيتك وملابسك وشكل الحجر.`
            },
          ]
        },
        earrings: {
          seo: {
            title: `تسوقي أقراط نسائية | تصميمات الأقراط في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من الأقراط أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryEarrings,
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
                <h2>احظي بأروع الأقراط سواء حلقان صغيرة للاذن أو الاقراط المتدلية أو الكليب أو حلقان الاذن الدائرية لتكون جزءًا أساسيًا من صندوق مجوهراتك.</h2>
                <p>
			        	<span>تشكيلة أقراط مميزة تساعدك على إبهار الجميع وإذهالهم! فهي تضم كل ما تحتاجه أي فتاة. بداية من الأقراط المصاغة </span><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">بالذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأصفر</span></u></a><span dir="ltr"><span dir="ltr"></span> </span><a href="https://www.lazurde.com/ar-ae/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc"><span></span></u>والأبيض</span></a><span> الراقي إلى </span><a href="https://www.lazurde.com/ar-ae/jewelry/earrings" style="text-decoration:none"><u><span style="color:#1155cc">الأقراط</span></u></a><span> الراقية المصاغة من</span><a href="https://www.lazurde.com/ar-sa/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc" dir="ltr"><span dir="ltr"></span></u>&#xa0;</span></a><a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc"><span></span></u>الذهب</span></a><a href="https://www.lazurde.com/ar-sa/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الوردي</span></u></a><span>. وبالتأكيد، كلها مصاغة من الذهب عياري 18 و21 قيراط.</span>
			        </p>

               `,
              },
              content: {
                value: `
                
               <h2>اختاري حلقان اذن مناسبة لجمال اطلالتك</h2>

              <p>
			      	<span>اختاري من بين حلق ذهب دائري ليضفي جمالًا على وجهك بأناقة، أو حلق متدلي والذي يتأرجح مع كل خطوة، أو الحلق النسائي الطويل المتدلي والذي يضيف سحرًا مضاعفًا لمظهرك عمومًا. وندعوكِ لاكتشاف الأناقة الخالدة للأقراط الصغيرة التي لا تتأثر بتغير الزمان وكذلك حلقان كبس عملية. تتنوع مجموعتنا لتلبي تفضيلاتكم المتنوعة والمختلفة، مما يضمن لكِ إيجاد زوج الأقراط المثالي الذي يتناسب مع أسلوبكِ وشخصيتكِ الفريدة. سواء كنتِ تفضلين </span><a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">الألماس</span></u></a><span> أو تفضلين الأشياء البسيطة مثل الذهب غير المشغول أو حتى إذا كنتِ من محبات القليل من الألوان وخصوصًا؛ فستجدي بالتأكيد ضمن مجموعة أقراط لازوردي ما تريدين. كما أنه لدينا مجموعة رائعة من الأقراط المزينة </span><a href="https://www.lazurde.com/ar-ae/jewelry/pearls" style="text-decoration:none"><u><span style="color:#1155cc">باللؤلؤ</span></u></a><span> التي تجمع بين الفخامة والعصرية في آن واحد.</span>
		        	</p>
               
               <h2>أقراط نسائية مميزة من لازوردي... تسوقي حلق نسائي الآن فى الإمارات!</h2>
               نؤمن في لازوردي أن كل قطعة هي تعبير واضح عن شخصيتك وذوقك المتفرد. ومن هنا، نبتكر تصاميم جديدة ونصنعها بحرفية وصنعة متناهية لتعكس شغفنا الحقيقي بتقديم كل ما هو مميز وجديد لكِ. وعليه، نقدم مجموعة أقراط مميزة للنساء تؤكد معها معاني الأنوثة المفعمة بالأناقة والرقي وتخاطب القلوب بجمالها الآسر. ننصحك بشراء زوج الأقراط المناسب وكوني مجموعة مجوهرات رائعة لتضم كل الأشكال والأنواع حيث الأقراط الدائرية والأقراط المتدلية والأقراط الطويلة المتدلية والأقراط الصغيرة والأقراط الكليب وغير ذلك. اكتشفي مجموعتنا واستعدي لاحتضان سحر الإكسسوارات التي تعزّز جمالكِ الطبيعي.

               
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
              a: `شكل الأقراط الذي تختارينه يعتمد حقًا على شخصيتك وتفضيلاتك، ولكن الأقراط الدائرية والأقراط الدبوسية الصغيرة هي القطع الأساسية التي يتعين على كل فتاة اقتنائها.`
            },
            {
              q: `ما هي الأقراط التي يمكن ارتداؤها يوميًا؟`,
              a: `يمكنك الاختيار ما بين الأقراط الدائرية الكلاسيكية أو الأقراط الصغيرة الألماس أو الأقراط المتدلية البسيطة. تتضمن مجموعتنا تشكيلة متنوعة من الأقراط التي تناسب الإطلالات اليومية.`
            },
            {
              q: `كيف يمكنني اختيار حلق ذهب نسائي مناسب؟`,
              a: `اختيار الأقراط المناسبة يعتمد بشكل أساسي على مظهرك والمناسبة والطلة التي تحاولين تكوينها.`
            },
            {
              q: `ما هو حجم الأقراط الذي يجب عليّ ارتداؤه؟`,
              a: `أي حجم مريح لك عند ارتدائه هو الأمثل. الأمر يعتمد عليك كليًا وعلى تفضيلك الشخصي.`
            },
          ]
        },
        sets: {
          seo: {
            title: `تسوقي أطقم مجوهرات نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من أطقم المجوهرات أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelrySets,
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
				اكتشفي عالم أطقم المجوهرات المميزة حيث يلتقي الجمال بالابتكار في انسيابية تخلق جمالًا ساحرًا يلفت كل الأنظار. أطقم مجوهرات تحتفي بمعاني التناغم والتناسق المتحقق بين قطعها التي تعزز في النهاية إطلالاتك اليومية وإطلالات السهرة في المناسبات الخاصة. سواء كنتِ تبحثين عن <a href="https://www.lazurde.com/ar-ae/jewelry/half-sets" style="text-decoration:none"><u><span style="color:#1155cc">نصف</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/half-sets" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/half-sets" style="text-decoration:none"><u><span style="color:#1155cc">طقم</span></u></a> أو طقم مجوهرات لعرسك أو طقم لؤلؤ مميز، فتأكدي أنك ستجدين ما تبحثين عنه بكل تأكيد. عبري عن تفردك وشخصيتك التي لا تتشابه مع أي شيء وأروي قصتك الخاصة مع طقم مجوهرات مميز يكون جزءًا من ذكريات تدوم مدى الحياة.
			        </p>
                
                `,
              },
              content: {
                value: `
            
                <h2>تضم مجموعتنا تشكيلة من أطقم الزفاف التي تجسد روعة الارتباط الأبدي وتعكس فخامة وأناقة استثنائية</h2>

                <p>
                اجعلي يوم زفافك يومًا مميزًا ليكون ذكرى لا تنسى مع مجموعة أطقم الزفاف من لازوردي. كل قطعة في هذه المجموعة مصنوعة بكل حب وبدقة متناهية. أطقم متنوعة تتزين <a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">بالألماس</span></u></a><span dir="ltr"><span dir="ltr"></span> </span><span>و</span><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الأحجار</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الكريمة</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a>التي تتألق ببريق خاص يعكس بريق حبكما الأسطوري. وللعرائس اللاتي تبحثن عن الكمال في يومها الخاص، توفرلازوردي مجموعة طقم مجوهرات عروس بمزيج ساحر بين السلاسل والأقراط والأساور بتصاميم مميزة تضمن تألقك بظهور مميز تبهر الجميع بطلتها الاستثنائية. سواء كنت من محبي<a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"></a><a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأصفر</span></u></a> الكلاسيكي أو <a href="https://www.lazurde.com/ar-ae/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأبيض</span></u></a> اللامع أو <a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">الوردي</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">،</span></u></a> فإن مجموعة مجوهرات لازوردي ستترككِ على موعد مع الكثير من الخيارات المميزة.
              </p>

                <h2>استمتعي باطلالة انيقة و اختاري طقم او نصف طقم من مجوهرات لازوردي</h2>

                <p>
			        	<span>نقدم لكِ مجموعة مجوهرات يندمج فيها </span><a href="https://www.lazurde.com/ar-ae/jewelry/pearls" style="text-decoration:none"><u><span style="color:#1155cc">اللؤلؤ</span></u></a><span> مع </span><a href="https://www.lazurde.com/ar-ae/gold-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><span> عياري 18 و21 قيراط ليخلقا معًا قطعًا ساحرة مفعمة بالأناقة والفخامة. تنضح أطقم السلاسل </span><a href="https://www.lazurde.com/ar-ae/jewelry/earrings" style="text-decoration:none"><u><span style="color:#1155cc">والأقراط</span></u></a><span> المزينة باللؤلؤ بالفخامة والسحر مما يجع منها قطع مثالية للمناسبات الرسمية والإطلالات اليومية. اغتنمي الفرصة واكتشفي نصف الأطقم من لازوردي التي تتميز بسلاسل مع أقراط أو أساور مميزة التي تضيف بريقًا لطيفًا على إطلالاتك دون تكلف أو عناء.</span>
		          	</p>

                <h2>تسوقي تشكيلة خواتم وأطقم الزفاف في الإمارات</h2>

                <p>
                أصبح استعدادك لأي مناسبة أمرًا سهلًا مع أطقم مجوهرات و <a href="https://www.lazurde.com/ar-ae/jewelry/rings" style="text-decoration:none"><u><span style="color:#1155cc">خواتم</span></u></a> الزفاف من لازوردي. انطلقي واكتشفي مجموعة أطقم مجوهرات لازوردي واحصلي على طقم المجوهرات الذي يعكس أسلوبك الخاص وشخصيتك المتفردة.
              </p>

                <h2>الأسئلة الشائعة:</h2>
                
                <h3>مما يتكون طقم مجوهرات لازوردي؟</h3>

                <p>
			        	توفر لازوردي طقم كامل وهو ما يضم <a href="https://www.lazurde.com/ar-ae/jewelry/necklaces-pendants" style="text-decoration:none"><u><span style="color:#1155cc">سلسلة</span></u></a><span dir="ltr"><span dir="ltr"></span> </span><a href="https://www.lazurde.com/ar-ae/jewelry/bracelets-anklets" style="text-decoration:none"><u><span style="color:#1155cc"><span></span></u>وأسوارة</span></a> وخاتم وزوج من الأقراط. ونصف طقم يضم أما سلسلة مع زوج من الأقراط أو سلسلة أو أقراط مع خاتم او طقم من اخواتم أو طقم اسوارة وخاتم.
		          	</p>

                 <h3>كيف ننسق قطع المجوهرات معًا لتكوين طقم؟</h3>

                 يمكنك الاختيار بسهولة من بين أطقم مجوهرات لازوردي بدون تحمل عناء التنسيق والجمع بين القطع المختلفة، أو إذا كنت ترغبين في القيام بذلك بنفسك، يمكنك التحقق من مجموعات لازوردي المختلفة لتنسقي طقم مناسب لذوقك الخاص.

                <h3>كيف يمكنني تنسيق طقم مجوهرات جريء دون أن يبدو مبالغًا فيه؟</h3>
                اختر قطعة مميزة من المجموعة، مثل قلادة جريئة، واحتفظ بالإكسسوارات الأخرى بشكل بسيط لتحقيق مظهر متوازن.
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `مما يتكون طقم مجوهرات لازوردي؟`,
              a: `توفر لازوردي طقم كامل وهو ما يضم سلسلة وأسوارة وخاتم وزوج من الأقراط. ونصف طقم يضم أما سلسلة مع زوج من الأقراط أو سلسلة أو أقراط مع خاتم او طقم من اخواتم أو طقم اسوارة وخاتم.`
            },
            {
              q: `كيف ننسق قطع المجوهرات معًا لتكوين طقم؟`,
              a: `يمكنك الاختيار بسهولة من بين أطقم مجوهرات لازوردي بدون تحمل عناء التنسيق والجمع بين القطع المختلفة، أو إذا كنت ترغبين في القيام بذلك بنفسك، يمكنك التحقق من مجموعات لازوردي المختلفة لتنسقي طقم مناسب لذوقك الخاص.`
            },
            {
              q: `كيف يمكنني تنسيق طقم مجوهرات جريء دون أن يبدو مبالغًا فيه؟`,
              a: `اختر قطعة مميزة من المجموعة، مثل قلادة جريئة، واحتفظ بالإكسسوارات الأخرى بشكل بسيط لتحقيق مظهر متوازن.`
            },
          ]
        },
        "half-sets": {
          seo: {
            title: `تسوقي نصف أطقم مجوهرات نسائية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من نصف أطقم المجوهرات أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryHalfSets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              type: ["halfSetsAr"],
            }),
          },
        },
        kids: {
          seo: {
            title:
              "تسوقي مجوهرات أطفال أونلاين في الإمارات | Page <number> | لازوردي الإمارات",
            description:
              "استكشفي مجموعتنا من مجوهرات أطفال أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersJewelry?.jewelryKids,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              collection: ["kidsAr"],
            }),
          },
        },
        mens: {
          seo: {
            title:
              "تسوقي مجوهرات للرجال أونلاين في الإمارات | Page <number> | لازوردي الإمارات",
            description:
              "استكشفي مجموعتنا من مجوهرات للرجال أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersJewelry?.jewelryMens,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              collection: ["mensAr", "unisexAr"],
            }),
          },
        },
        "shop-all": {
          seo: {
            title: `تسوقي جميع المنتجات - مجوهرات | Page <number> | لازوردي الإمارات`,
            description: `اكتشف مجموعة رائعة من المجوهرات أونلاين في لازوردي الإمارات. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryShopAll,
          bannerWithcards: null,
          plpComponent: {},
        },
        lazurde: {
          seo: {
            title: `تسوقي مجوهرات لازوردي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات لازوردي أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.lazurde,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["lazurdeAr"] }),
          },
        },
        instyle: {
          seo: {
            title: `تسوقي مجوهرات إنستايل لازوردي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات إنستايل لازوردي أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.instyle,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["instyleAr"] }),
          },
        },
        "miss-l": {
          seo: {
            title: `تسوقي مجوهرات مس أل لازوردي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات مس أل لازوردي أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.missl,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["misslAr"] }),
          },
        },
        waves: {
          seo: {
            title: `تسوقي مجوهرات ويفز في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا الرائعة من مجوهرات ويفز أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.waves,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ brand: ["wavesAr"] }),
          },
        },
        "coins-bars": {
          seo: {
            title:
              "تسوقي سبائك ذهب أونلاين في الإمارات | Page <number> | لازوردي الإمارات",
            description:
              "استكشفي مجموعتنا من سبائك ذهب أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersJewelry?.jewelryCoinsBars,
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
            title: `تسوقي أفضل المجوهرات التي تتمتع بأعلى مبيعات في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أفضل ماركات المجوهرات أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryBestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: {},
          },
        },
        "new-in": {
          seo: {
            title: `تسوقي أحدث وأجدد تصميمات المجوهرات في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أحدث تصاميم المجوهرات الجديدة أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryNewIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              newIn: ["newIn"],
            }),
          },
        },
        "special-price": {
          seo: {
            title: `احصلي على أفضل الأسعار على المجوهرات في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من المجوهرات أونلاين في الإمارات، والتي تقدم قيمة رائعة بأفضل الأسعار. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelrySpecialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: {},
          },
        },
        "yellow-gold": {
          seo: {
            title: `تسوقي مجوهرات ذهب أصفر في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الذهب أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryYellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["yellowGoldAr"] }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>اشتري مجوهرات من الذهب الأصفر أونلاين في الإمارات</h2>
                استعدي لاكتشاف مجموعة لازوردي الرائعة من تشكيلة متنوعة من مجوهرات ذهب اصفر واختيار القطعة التي تعكس أناقتك وتضيف لمسة من السحر والجمال إلى إطلالتك. عندما تشتري مجوهرات الذهب الأصفر، فإنكِ تستثمرين في قطعة تحمل قيمة عاطفية وثقافية. تشكيلة مميزة تجمع بين الأصالة والجمال والفن لخلق قطع فنية تستحق الاحتفاظ بها للأبد.

                `,
              },
              content: {
                value: `
               
                <h2>مجوهرات ذهب أصفر لكل مناسبة</h2>

                <p>
			        	عززي أناقتك مع بريق الذهب الأصفر اللافت للأنظار. سواء كنتِ تبحثين عن سلسلة مميزة لإطلالتك أو زوج رقيق من <a href="https://www.lazurde.com/ar-ae/jewelry/earrings" style="text-decoration:none"><u><span style="color:#1155cc">الأقراط</span></u></a>&#xa0; ليوم العمل، تأكدي أنك ستجيدين ما تبحثين عنه في مجموعة مجوهرات الذهب الأصفر من لازوردي التي تضم تصاميم متنوعة تعزز مظهرك في مختلف المناسبات. تتوفر لدينا مجموعة متنوعة من المجوهرات المصنوعة من الذهب الأصفر، بعياريه 18 قيراط و21 قيراط، حتى تتمكنين من اختيار ما يناسبك بشكل أفضل. تقدم لازوردي مجموعة متنوعة من المجوهرات المصنوعة من الذهب الأصفر، بما في ذلك <a href="https://www.lazurde.com/ar-ae/gold/necklaces-pendants" style="text-decoration:none"><u><span style="color:#1155cc">سلاسل</span></u></a> و <a href="https://www.lazurde.com/ar-ae/gold/rings" style="text-decoration:none"><u><span style="color:#1155cc">خواتم</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/rings" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/rings" style="text-decoration:none"><u><span style="color:#1155cc">ذهب</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/rings" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/rings" style="text-decoration:none"><u><span style="color:#1155cc">اصفر</span></u></a> الى جانب اقراط و<a href="https://www.lazurde.com/ar-ae/gold/bracelets-anklets" style="text-decoration:none"><u><span style="color:#1155cc">اساور</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/bracelets-anklets" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/bracelets-anklets" style="text-decoration:none"><u><span style="color:#1155cc">ذهب</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/bracelets-anklets" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/bracelets-anklets" style="text-decoration:none"><u><span style="color:#1155cc">اصفر</span></u></a> بالإضافة الى <span>اطقم ذهب اصفر</span><span><span></span> </span><spa>وغيرها الكثير. إذا كنتِ تبحثين عن قطعة مجوهرات تتميز بالبريق والفخامة، يمكنك اقتناء قطعة مجوهرات من الذهب الأصفر مرصعة </span><a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">بالألماس</span></u></a> أو <a href="https://www.lazurde.com/ar-ae/gold/pearls" style="text-decoration:none"><u><span style="color:#1155cc">اللؤلؤ</span></u></a> أو <a href="https://www.lazurde.com/ar-ae/gold/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الأحجار</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/gold/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الملونة</span></u></a>. إن الجمع بين الذهب الأصفر الفاخر والأحجار الكريمة اللامعة يخلق <span style="line-height:115%; font-size:10pt">تناغمًا ساحرًا </span>يضفي على المجوهرات رونقاً خاصاً ويعزز جمالها بشكل لا يصدق. إنها تشير إلى الرفاهية والأناقة والذوق الرفيع. تعتبر هذه القطع حقًا تحفًة فنية. استمتعي بالتألق والفخامة والأناقة التي توفرها هذه القطع الثمينة واجعليها جزءًا من إطلالتك الفريدة والساحرة.
		          	</p>

                <h2>الأسئلة الشائعة:</h2>
                
                <h3>ما الفرق بين الوان الذهب؟</h3>
                نعم، بكل تأكيد. أن الذهب الأصفر معدن متين ومثالي للمجوهرات مثل الأقراط والخواتم والسلاسل وما إلى غير ذلك.
                
                <h3>هل المجوهرات المصنوعة من الذهب الأصفر جيدة؟</h3>
                نعم، بكل تأكيد. أن الذهب الأصفر معدن متين ومثالي للمجوهرات مثل الأقراط والخواتم والسلاسل وما إلى غير ذلك.
                
                <h3>هل يتغير لون الذهب الأصفر؟</h3>
                لا! يدوم الذهب الأصفر إلى الأبد وقد يحتاج فقط إلى تنظيفه من الأتربة والأوساخ كل فترة.
                
                <h3>هل يدوم الذهب الأصفر طويلًا؟</h3>
                نعم، بكل تأكيد. الذهب الأصفر معدن متين وثمين يدوم عمرًا طويلًا.

                <h3>كيف اعتني بالذهب الأصفر؟</h3>
                نعم، بكل تأكيد. الذهب الأصفر معدن متين وثمين يدوم عمرًا طويلًا.ببساطة، ما عليك سوى ترك مجوهراتك في ماء فاتر لبضع دقائق ثم مسحها بقطعة قماش جافة.
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل المجوهرات المصنوعة من الذهب الأصفر جيدة؟`,
              a: `نعم، بكل تأكيد. أن الذهب الأصفر معدن متين ومثالي للمجوهرات مثل الأقراط والخواتم والسلاسل وما إلى غير ذلك.`
            },
            {
              q: `هل يتغير لون الذهب الأصفر؟`,
              a: `لا! يدوم الذهب الأصفر إلى الأبد وقد يحتاج فقط إلى تنظيفه من الأتربة والأوساخ كل فترة.`
            },
            {
              q: `هل يدون الذهب الأصفر طويلًا؟`,
              a: `نعم، بكل تأكيد. الذهب الأصفر معدن متين وثمين يدوم عمرًا طويلًا.`
            },
            {
              q: `كيف اعتني بالذهب الأصفر؟`,
              a: `ببساطة، ما عليك سوى ترك مجوهراتك في ماء فاتر لبضع دقائق ثم مسحها بقطعة قماش جافة.`
            },
          ]
        },
        "white-gold": {
          seo: {
            title: `تسوقي مجوهرات ذهب أبيض في الإمارات العربية | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الذهب الآبيض أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryWhiteGold,
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
                <span>يعتبر الذهب الأبيض خيارًا رائعًا للمجوهرات، حيث يوفر تألقًا رائعًا وجمالًا فريدًا من نوعه. ويتميز بلونه الأبيض الناصع وبريقه الذهبي الفاخر، مما يجعله مثاليًا للاستخدام في تصاميم المجوهرات الراقية. تتميز مجموعة مجوهرات لازوردي بتشكيلة متنوعة من ذهب أبيض بتصاميم تجمع بين الأناقة الكلاسيكية واللمسات الحديثة الراقية. فهي تجمع بين أفضل ما في التصاميم التقليدية والحديثة، مما يمنحها مظهرًا رائعًا وفريدًا. سواء كنتِ تبحثين عن قطعة مجوهرات كلاسيكية وبسيطة من الذهب الأبيض، أو تفضلين شيئًا أكثر تألقًا </span><a href="https://www.lazurde.com/ar-ae/diamond-jewelry" style="text-decoration:none"><u><span style="color:#1155cc">الألماس</span></u></a><span> أو </span><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الأحجار</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الكريمة</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الملونة</span></u></a><span> أو </span><a href="https://www.lazurde.com/ar-ae/jewelry/pearls" style="text-decoration:none"><u><span style="color:#1155cc">اللؤلؤ</span></u></a><span><span></span>،</span><span><spa></span> فإن مجموعة مجوهرات لازوردي من الذهب الأبيض تضم كل ما سيضيف لمسة من البريق اللافت إلى إطلالاتك.</span>
              </p>
                `,
              },
              content: {
                value: `
               
                <h2>توجا حبكما من خلال دبلة ذهب ابيض في الإمارات</h2>

                <p>
                <span>يمكنكما الاحتفال بروابط الحب الأبدية مع مجموعة </span><span>دبل ذهب ابيض للزفاف من لازوردي</span><span><span></span>. </span><a href="https://www.lazurde.com/ar-ae/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc"><spa></span></u>خواتم</span></a><a href="https://www.lazurde.com/ar-ae/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/love-engagement" style="text-decoration:none"><u><span style="color:#1155cc">الزفاف</span></u></a><span><span></span> </span><span><spa></span>هي رمز للارتباط القوي بين الأزواج، وتعد وعدًا بالبقاء معًا طوال العمر. وبهذا الشكل، </span><span>اشتري </span><span>خاتم ذهب ابيض للزواج</span><span> لأنه هو أكثر من مجرد مجوهرات، بل هو رمز للحب والالتزام القوي بين الأزواج. في مجموعتنا، تصنع </span><a href="https://www.lazurde.com/ar-ae/jewelry/rings" style="text-decoration:none"><u><span style="color:#1155cc">دبل</span></u></a><span> الزفاف من الذهب الأبيض بأقصى درجات العناية والاهتمام، حيث يتم تصميمها لتكون التعبير المثالي عن حبكما الأبدي في يومك الخاص. وبفضل جودة الذهب الأبيض، فإنها ستلمع ببريق مذهل وستبقى تذكرك بذكرى هذا اليوم الخاص.</span>
              </p>

                <h2>خاتم الماس ذهب ابيض - رمز للحب الأبدي</h2>
                <p>
                <span>اكتشفي المزيج الساحر لبريق الذهب الأبيض والألماس مع مجموعة خواتم لازوردي من الذهب الأبيض المرصعة بالألماس. إن </span><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">خواتم</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">الأبيض</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">من</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">لازوردي</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">المرصعة</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/diamond/rings" style="text-decoration:none"><u><span style="color:#1155cc">بالألماس</span></u></a><span> هي تجسيد حقيقي لمعاني الحب والفخامة. يتميز كل خاتم في مجموعتنا بتصميم فريد وجمال استثنائي، مما يجعله إضافة رائعة لأي مجموعة من المجوهرات.</span>
              </p>

                <h2>اكتشفي الجاذبية الخالدة مع حلق وسلسال من الذهب الابيض من لازوردي</h2>

                <p>
		        		<span>دللي نفسك بقطعة رائعة من </span><span>سلسال و حلق ذهب ابيض من لازوردي</span><span>. إن </span><a href="https://www.lazurde.com/ar-ae/jewelry/earrings" style="text-decoration:none"><u><span style="color:#1155cc">أقراط</span></u></a><span><span></span> </span><a href="https://www.lazurde.com/ar-ae/jewelry/necklaces-pendants" style="text-decoration:none"><u><span style="color:#1155cc"><spa></span></u>وسلاسل</span></a><span> لازوردي من الذهب الأبيض تلائم مختلف الأنماط والأذواق، حيث تتميز بالأناقة والرقي والجمال الخالد. فهي تضفي لمسة من الأناقة والجمال على أي مظهر، سواء كنتِ بصدد حضور مناسبة خاصة أو إذا كنت ترغبين في الحصول على مظهر يومي متألق. فإن جمال الذهب الأبيض سيزيد من جاذبيتك بلا جهد، وسيجعلك تلفتين الأنظار وتشعرين بالثقة في كل الأوقات.</span>
		          	</p>

                <h2>سلاسل وأساور ذهب أبيض</h2>

                <p>
			        	<span>تألقي بسحر آخاذ مع سلاسل وأساور لازوردي من الذهب الأبيض. ومع تشكيلتنا الواسعة من </span><a href="https://www.lazurde.com/ar-ae/jewelry/bracelets-anklets" style="text-decoration:none"><u><span style="color:#1155cc">أساور</span></u></a><span> وسلاسل الذهب الأبيض، يمكنك العثور بسهولة على القطعة التي تناسب ذوقك وتضيف لمسة من الأناقة والجمال إلى مظهرك. سواء كنتِ تفضلين</span><span><span></span> </span><span><spa></span>عقد ذهب ابيض رفيع أو اساور ذهب ابيض جريئة</span><span style="text-decoration:line-through; color:#202124">،</span><span> فإن تصميماتنا المتنوعة تُتيح لك الاختيار من بين العديد من القطع المميزة. انطلقي مع لازوردي في الإمارات إلى عالم مجوهرات الذهب الأبيض الراقية حيث يلتقي بسلاسة الترف والفخامة مع الجاذبية والأناقة. تصاميم فاتنة من الذهب الأبيض تأسر القلوب وتعزز إطلالاتك. لذا، اكتشفي مجموعة مجوهرات لازوردي الرائعة من الذهب الأبيض، واستمتعي بالترف والجاذبية البراقة التي ستضاعف جمال مظهرك وإطلالاتك.</span>
		          	</p>
                <h2>تسوق أطقم ذهب أبيض للعروس من لازوردي
                </h2>
                <p>
                تقدم لازوردي، العلامة الرائدة في عالم المجوهرات، مجموعة متنوعة من أطقم الذهب الأبيض للعروس، مصممة بعناية لتضيف لمسة من الرقي والفخامة إلى إطلالة يوم الزفاف. كل قطعة مصنوعة بدقة عالية، تعكس الحرفية الممتازة والتصاميم العصرية التي تشتهر بها لازوردي. سواء كنتِ تبحثين عن طقم ذهب أبيض كلاسيكي أنيق أو تصميم معاصر يلفت الأنظار، ستجدين في مجموعتنا ما يناسب ذوقك ويتماشى مع فستان زفافك.
                </p>

                <h2>الأسئلة الشائعة:</h2>
                
                <h3>هل يوجد ذهب أبيض عيار ٢١؟</h3>
                نعم، يمكن العثور على الذهب الأبيض عيار 21، لكنه أقل شيوعًا مقارنة بالذهب الأصفر عيار 21. الذهب الأبيض يتم تصنيعه عن طريق خلط الذهب الأصفر مع معادن بيضاء أخرى لإعطائه لونه الأبيض اللامع.
                
                <h3>هل الذهب الابيض يعتبر ذهب؟</h3>
                نعم، الذهب الأبيض يعتبر ذهبًا. يتم تصنيعه بخلط الذهب الخالص، الذي يكون لونه أصفر بطبيعته، مع معادن أخرى بيضاء اللون. هذا الخليط يغير لون الذهب من الأصفر إلى الأبيض، مما ينتج عنه الذهب الأبيض
                
                <h3>كم نسبة الذهب في الذهب الابيض؟</h3>
                نسبة الذهب في الذهب الأبيض تعتمد على عيار الذهب المستخدم في صناعته. على سبيل المثال:

                <p>
                  <span>●</span></span><span>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </span><span>الذهب</span><span> </span><span>الأبيض</span><span> </span><span>عيار</span><span> 18 </span><span>يحتوي</span><span> </span><span>على</span><span> 75% </span><span>ذهب</span><span> </span><span>خالص، أي</span><span> </span><span>أن</span><span> 18 </span><span>جزءًا</span><span> </span><span>من</span><span> </span><span>أصل</span><span> 24 </span><span>جزءًا</span><span> </span><span>هي</span><span> </span><span>ذهب</span><span> </span><span>خالص، والـ</span><span> 6 </span><span>أجزاء</span><span> </span><span>المتبقية</span><span> </span><span>هي</span><span> </span><span>معادن</span><span> </span><span>أخرى</span><span> </span><span>مثل</span><span> </span><span>البلاديوم</span><span> </span><span>أو</span><span> </span><span>النيكل</span><span> </span><span>أو</span><span> </span><span>الفضة</span><span>.</span>
                </p>

                <h3>هل يدوم الذهب الأبيض طويلًا؟</h3>
                إن الذهب الأبيض معدن متين ويدوم طويلًا ولكن قد تحتاجين إلى إعادة طلائه كل 10 سنوات أو أكثر.

                <h3>هل من السهل المحافظة على الذهب الأبيض؟</h3>
                نعم، بكل تأكيد. ببساطة ، ضعي مجوهراتك المصنوعة من الذهب الأبيض في ماء فاتر مع 2-3 قطرات من صابون الأطباق لبضع دقائق ثم جففيها.

                <h3>هل يمكن ان ارتدي كل المجوهرات من الذهب الابيض؟</h3>
                نعم، يمكنك تنسيق قطع مختلفة من الذهب الابيض من سلسلة و خاتم وحلق واسورة من مجموعتنا المميزة      
                
                <h3>هل الذهب الابيض اغلى من الذهب الاصفر؟</h3>
                عادةً، لا يكون الذهب الأبيض أغلى من الذهب الأصفر بشكل أساسي بسبب نقاء الذهب نفسه، حيث أن قيمة الذهب تعتمد بشكل أساسي على عياره أو نقائه.
              
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل يدوم الذهب الأبيض طويلًا؟`,
              a: `إن الذهب الأبيض معدن متين ويدوم طويلًا ولكن قد تحتاجين إلى إعادة طلائه كل 10 سنوات أو أكثر.`
            },
            {
              q: `هل من السهل المحافظة على الذهب الأبيض؟`,
              a: `نعم، بكل تأكيد. ببساطة ، ضعي مجوهراتك المصنوعة من الذهب الأبيض في ماء فاتر مع 2-3 قطرات من صابون الأطباق لبضع ساعات ثم جففيها.`
            },
            {
              q: `هل يمكن ان ارتدي كل المجوهرات من الذهب الابيض؟`,
              a: `نعم، يمكنك  تنسيق  قطع مختلفة من الذهب الابيض من سلسلة و خاتم وحلق واسورة من مجموعتنا المميزة.`
            },
          ]
        },
        "rose-gold": {
          seo: {
            title: `تسوقي مجوهرات ذهب وردي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الذهب الوردي أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryRoseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["roseGoldAr"] }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>اشتري مجوهرات مميزة من الذهب الوردي أونلاين في الإمارات</h2>

                من خلال الموقع الإلكتروني للازوردي، اكتشفي عالم مجوهرات الذهب الوردي الأنيقة واختاري الأنسب لكِ. عندما تشتري مجوهرات ذهب وردي، فهي تجسد الأناقة والفخامة وتضيف لمسة من الجمال والتألق إلى حياتك. تتميز كل قطعة مجوهرات من مجوهرات لازوردي بالدقة في التصميم والصنع لتحقيق أعلى مستويات الجودة والتميز. تشكيلة مميزة تجمع بين الأصالة والجمال والفن لخلق قطع فنية تستحق الاحتفاظ بها للأبد.

                `,
              },
              content: {
                value: `
         
                <h2>مجوهرات ذهب وردي لكل مناسبة</h2>

                <p>
	        			<span>أجذبي أنظار الجميع بسحرك الخالص مع مجوهرات لازوردي من الذهب الوردي. سواء كنتِ تبحثين عن سلسلة مميزة لإطلالة الخروجات مع الصديقات أو زوج رقيق من </span><a href="https://www.lazurde.com/ar-sa/jewelry/earrings" style="text-decoration:none"><span>الأقراط</span></a><span> ليوم العمل، تأكدي أنك ستجيدين ما تبحثين عنه في مجموعة </span><a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"><span>مجوهرات</span></a><a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"><span>&#xa0;</span></a><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none"><u><span style="font-family:Jomhuria; color:#4f81bd; background-color:#ffffff">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"><u><span style="font-family:Jomhuria; color:#4f81bd; background-color:#ffffff">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"><u><span style="font-family:Jomhuria; color:#4f81bd; background-color:#ffffff">الوردي</span></u></a><span style="font-family:Jomhuria; color:#4f81bd; background-color:#ffffff"> </span><span>من لازوردي التي تضم تصاميم متنوعة تعزز مظهرك في مختلف المناسبات. تتوفر لدينا مجموعة متنوعة من المجوهرات المصنوعة من الذهب الوردي، بعياريه 18 قيراط و21 قيراط، حتى تتمكنين من اختيار ما يناسبك بشكل أفضل. اختاري من بين مجموعة من سلاسل الذهب الوردي أو </span><a href="https://www.lazurde.com/ar-sa/jewelry/rings" style="text-decoration:none"><span>خواتم</span></a><span> ذهب وردي وأقراط ذهب وردي </span><a href="https://www.lazurde.com/ar-sa/jewelry/bracelets-anklets" style="text-decoration:none"><span>والأساور</span></a><span> من الذهب الوردي والكثير والكثير. تعكس هذه القطع الأناقة الخالدة وتناسب مختلف المناسبات والإطلالات. يعتبر الذهب الوردي من أنواع الذهب المميزة التي تتميز بلونها الفريد والأنيق. واحدة من أهم مميزات الذهب الوردي هي قدرته على الاندماج بشكل رائع مع أي حجر كريم آخر. تعكس قطع المجوهرات من الذهب الوردي في مجموعة لازوردي قصة فنية متقنة وعناية فائقة بالتفاصيل. انغمسي في سحر مجوهرات الذهب الوردي واسمحي لجاذبيتها المغرية أن تترك أثرًا دائمًا. </span>
		          	</p>

                <h2>الأسئلة الشائعة:</h2>

                <h3>هل يليق الذهب الوردي بكل الإطلالات؟</h3>
                نعم، بكل تأكيد. الذهب الوردي يليق بأي ملابس وأي ستايل.

                <h3>هل يناسب الذهب الوردي كل ألوان البشرة؟</h3>
                نعم، بكل تأكيد. يبدو الذهب والذهب الوردي بشكل خاص مذهلين تمامًا على مختلف ألوان البشرة.

                <h3>هل يمكن ارتداء الذهب الوردي يوميًا؟</h3>
                نعم، بكل تأكيد. الذهب الوردي معدن متين وثمين يدوم عمرًا طويلًا.
              `,
              },
            },
          ],
          schema: [
            {
              q: `هل يليق الذهب الوردي بكل الإطلالات؟`,
              a: `نعم، بكل تأكيد. الذهب الوردي يليق بأي ملابس وأي ستايل.`
            },
            {
              q: `هل يناسب الذهب الوردي كل ألوان البشرة؟`,
              a: `نعم، بكل تأكيد. يبدو الذهب والذهب الوردي بشكل خاص مذهلين تمامًا على مختلف ألوان البشرة.`
            },
            {
              q: `هل يمكن ارتداء الذهب الوردي يوميًا؟`,
              a: `نعم، بكل تأكيد. الذهب الوردي معدن متين وثمين يدوم عمرًا طويلًا.`
            },
          ]
        },
        "multicolor-gold": {
          seo: {
            title:
              "تسوقي ذهب متعددة الألوان أونلاين في الإمارات | Page <number> | لازوردي الإمارات",
            description:
              "استكشفي مجموعتنا من ذهب متعددة الألوان أونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع توفر التوصيل المجاني، والإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.",
          },
          banner: bannersJewelry?.jewelryMultiColorGold,
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
        "gold-plated": {
          seo: {
            title: `تسوقي مجوهرات مطلية بالذهب في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من المجوهرات المطلية بالذهب أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryGoldPlated,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["goldPlatedAr"] }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>مجوهرات مطلية بالذهب في الإمارات</h2>
                تعد المجوهرات المطلية بالذهب خيارًا رائعًا للسيدات اللواتي يرغبن في ارتداء قطع مجوهرات أنيقة وفاخرة بأسعار معقولة. إنها توفر لك فرصة للتألق وإضافة لمسة من الجمال إلى إطلالتك، دون الحاجة إلى استثمار كبير. تتوفر المجوهرات المطلية بالذهب من لازوردي في تشكيلة واسعة من التصاميم والأنماط بداية من السلاسل المطلية بالذهب المصاغة بتفاصيل جذابة ورائعة، إلى الأقراط المطلية بالذهب لتتمتعي بلمسة من الأناقة والجمال.

              `,
              },
              content: {
                value: `
             
                <h2>تسوقي الآن مجوهرات ذهب مطلي أونلاين</h2>

                <p><span>اكتشفي مجموعة مجوهرات لازوردي المطلية بالذهب وتسوقي منها بسهولة من خلال موقعنا الإلكتروني. في عصر التكنولوجيا الحديثة، أصبح بإمكاننا التسوق عبر الإنترنت بكل سهولة وراحة من خلال النقر على زر واحد. يمكنك الآن الاستمتاع بتجربة التسوق الرائعة واختيار مجوهرات ذهب مطلي التي تناسب ذوقك ومناسباتك بدون عناء. إن التنوع في تصاميم المجوهرات المطلية بالذهب يعطيك فرصة للاختيار من بين مجموعة متنوعة من الأشكال والأنماط والزخارف. بغض النظر عما إذا كنت تبحثين عن تصميم كلاسيكي وأنيق أو تفضلين التجديد والأشكال الجريئة، ستجدين ما يناسب ذوقك ويعكس شخصيتك. مع موقع لازوردي في الإمارات، نقدم لك تجربة تسوق عبر الإنترنت تحمل معها العديد من المزايا و فضلًا عن ما توفره من راحة. يمكنك تصفح مجموعة واسعة من المجوهرات المطلية بالذهب واختيار الأشكال والتصاميم التي تناسب ذوقك وتفضيلاتك، من ضمن المجموعة طقم مطلي بالذهب، سلسال مطلي ذهب،&nbsp;</span><a href="https://www.lazurde.com/ar-ae/jewelry/rings" style="text-decoration:none;"><u><span>خاتم</span></u></a><span>&nbsp;مطلي ذهب وغيرها الكثير . وهذا من إيماننا بأن المجوهرات المميزة يجب أن تكون متاحة للجميع. ندرك في لازوردي أن لدي كل شخص ميزانية محدودة واحتياجات فردية عندما يتعلق الأمر بشراء المجوهرات. لذا، نحرص على توفير تشكيلة متنوعة من الأسعار في مجموعتنا بحيث يكون لديك القدرة على اختيار القطع التي تعجبك وتتناسب مع ميزانيتك. لذا، اطمئني وتسوقي بثقة، فستجدين لدينا القطعة المثالية التي تناسب ميزانيتك وتعزز أناقتك بشكل متوازن ورائع.</span></p>

                <h2>الأسئلة الشائعة:</h2>

                <h3>هل يتغير لون الذهب المطلي؟</h3>

                نعم، قد يتغير لون الذهب المطلي بمرور الوقت. هذا التغيير يحدث بسبب تآكل الطبقة الخارجية من الذهب التي تغطي المعدن الأساسي. عوامل مثل التعرض المستمر للماء، العرق، المواد الكيميائية مثل العطور ومستحضرات التجميل، والاحتكاك يمكن أن تسرع من عملية التآكل هذ

                <h3>هل الذهب المطلي يباع؟</h3>
                نعم، يُباع الذهب المطلي في الأسواق والمتاجر المختلفة، وهو شائع جدًا في صناعة المجوهرات والإكسسوارات.

                <h3>إلى أي مدى تدوم المجوهرات المطلية بالذهب؟</h3>
                مع الاعتناء بها بشكل مناسب، يمكن أن تدوم المجوهرات المطلية بالذهب حتى 5 سنوات أو أكثر.

                <h3>هل يمكن ارتداء المجوهرات المطلية بالذهب يوميًا؟</h3>
                نعم! مع الاعتناء بها بشكل مناسب والحفاظ عليها بعيدًا عن الكيماويات والحرارة الزائدة، فإنه يمكن ارتداء المجوهرات المطلية بالذهب يوميًا والتألق بها.

                <h3>كيف يمكن الاعتناء بالمجوهرات المطلية بالذهب؟</h3>
                يتعين فقط الحفاظ عليها بعيدًا عن المواد الكيميائية أو العطور أو الحرارة لجعلها تدوم لفترة أطول.

                <h3>كيف يمكن الحفاظ على المجوهرات المطلية بالذهب من البهتان؟</h3>
                للحفاظ على مجوهراتك المطلية بالذهب من البهتان وتلاشي لونها، يتعين تخزينها في صندوق منعزل عن قطع المجوهرات الأخرى

              `,
              },
            },
          ],
          schema: [
            {
              q: `إلى أي مدى تدوم المجوهرات المطلية بالذهب؟`,
              a: `مع الاعتناء بها بشكل مناسب، يمكن أن تدوم المجوهرات المطلية بالذهب حتى 5 سنوات أو أكثر.`
            },
            {
              q: `هل يمكن ارتداء المجوهرات المطلية بالذهب يوميًا؟`,
              a: `نعم! مع الاعتناء بها بشكل مناسب والحفاظ عليها بعيدًا عن الكيماويات والحرارة الزائدة، فإنه يمكن ارتداء المجوهرات المطلية بالذهب يوميًا والتألق بها.`
            },
            {
              q: `كيف يمكن الاعتناء بالمجوهرات المطلية بالذهب؟`,
              a: `يتعين فقط الحفاظ عليها بعيدًا عن المواد الكيميائية أو العطور أو الحرارة القاسية لجعلها تدوم لفترة أطول.`
            },
            {
              q: `كيف يمكن الحفاظ على المجوهرات المطلية بالذهب من البهتان؟`,
              a: `للحفاظ على مجوهراتك المطلية بالذهب من البهتان وتلاشي لونها، يتعين تخزينها في كيس أو صندوق بمعزل عن قطع المجوهرات الأخرى.`
            },
          ]
        },
        "sterling-silver": {
          seo: {
            title: `تسوقي مجوهرات من الفضة الاسترلينية في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الفضة الإسترليني أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelrySterlingSilver,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ metalColor: ["sterlingSilverAr"] }),
          },
          contentSection: [
            {
              text: {
                value: `
                <h2>اكتشفي سحر وبريق الفضة الاسترليني عيار 925</h2>

                <p>
                انطلقي في عالم مجوهرات الفضة الاسترليني عيار 925 فائقة الجودة! تصاميم مصاغة بحرفية شديدة تأسر معها العيون والقلوب وتترك انطباعًا قويًا على مظهركِ. تضم مجموعتنا الفريدة خواتم فضية فاخرة وسلاسل وأساور وأقراط مذهلة بجانب مجموعة مميزة من المجوهرات للرجال تضم <a href="https://www.lazurde.com/ar-ae/jewelry/rings" style="text-decoration:none"><u><span style="color:#1155cc">خواتم</span></u></a><span><span></span> </span><a href="https://www.lazurde.com/ar-ae/jewelry/bracelets-anklets" style="text-decoration:none"><u><span style="color:#1155cc"><spa></span></u>وأساور</span></a><span><span></span> </span><a href="https://www.lazurde.com/ar-ae/jewelry/necklaces-pendants" style="text-decoration:none"><u><span style="color:#1155cc"><spa></span></u>وسلاسل</span></a> فضة. اكتشفي مجموعتنا الآن واختاري ما يناسب ذوقك ويعكس شخصيتك المميزة.
              </p>
                `,
              },
              content: {
                value: `
                    <h2>تسوقي مجوهرات فضة استرليني مذهلة لكل مناسباتك فى الإمارات.</h2>

                    <p>
				تألقي ببريق لافت مع خواتم وسلاسل لازوردي من الفضة التي تجذب الأنظار وتذيب القلوب. تتميز مجموعتنا بتشكيلة متنوعة من الخواتم الفضة الفاخرة التي تزدان باحجارمدهشة بأشكالها وأحجامها المختلفة التي تتلألأ ببريق لا يضاهى. كما تضم مجموعة مجوهرات لازوردي من الفضة الإسترليني قطع مزينة <a href="https://www.lazurde.com/ar-ae/fashion-jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">بالأحجار</span></u></a><a href="https://www.lazurde.com/ar-sa/fashion-jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/fashion-jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الملونة</span></u></a><span><span></span> </span><a href="https://www.lazurde.com/ar-ae/gold/pearls" style="text-decoration:none"><u><span style="color:#1155cc"><spa></span></u>واللؤلؤ</span></a> النقي في تناغم ينضح بالأناقة والأنوثة. كل قطعة صممت بعناية لتناسب مختلف المناسبات والأذواق.
	              		</p>

                    <h2>الأسئلة الشائعة:</h2>

                    <h3>هل يتغير لون الفضة الاسترليني؟</h3>
                    نعم، يمكن أن يتغير لون الفضة الاسترليني مع مرور الوقت نتيجة لعملية تسمى التأكسد أو السواد. النحاس الموجود في السبيكة يجعل الفضة الاسترليني أكثر عرضة للتفاعل مع العوامل البيئية مثل الهواء والرطوبة، مما يؤدي إلى تكون طبقة من الأكسيد على سطح الفضة تغير لونها إلى الأسود أو الرمادي.


                    <h3>هل الفضة الاسترليني فضة حقيقية؟</h3>
                    نعم، الفضة الاسترليني تعتبر فضة حقيقية. الفضة الاسترليني هي سبيكة تحتوي على 92.5% من الفضة الخالصة و7.5% من معادن أخرى، عادةً ما يكون النحا

                    <h3>هل من السهل العناية بالفضة الإسترليني؟</h3>
                    بالتأكيد، فكل ما عليك فعله هو الاحتفاظ بها في صندوق نظيف وجاف إلى جانب تنظيفها بانتظام.

                    <h3>هل يمكن ارتداء المجوهرات المصنوعة من الفضة الإسترليني بشكل يومي؟</h3>
                    نعم، بالتأكيد.

                    <h3>ما هي المدة الزمنية التي يمكن الاحتفاظ بالفضة الإسترليني؟</h3>
                    بشكل عام، إذا تم العناية بها بشكل جيد فضلًا عن تنظيفها بانتظام وتخزينها في مكان جاف ونظيف فإنها يمكن أن تدوم لفترة طويلة تصل إلى 20-30 عامًا او اكثر.


                    <h3>هل المجوهرات المصنوعة من الفضة الإسترليني آمنة على البشرة؟</h3>
                    تتكون الفضة الإسترليني من 92.5% من الفضة و7.5% من النحاس، مما يجعلها آمنة ومضادة للحساسية ومناسبة لجميع أنواع البشرة.

                    <h3>ما الفرق بين الفضة والفضة الاسترليني؟</h3>
                    الفضة الخالصة هي معدن ناعم ومرن جدًا، لذا يصعب استخدامها في صناعة المجوهرات والأدوات. الفضة الاسترليني، من ناحية أخرى، هي سبيكة تتكون من 92.5% فضة خالصة و7.5% من معادن أخرى، غالبًا النحاس، لزيادة صلابتها ومتانتها. هذا الاختلاف يجعل الفضة الاسترليني أكثر ملاءمة للاستخدام في صناعة المجوهرات والأدوات المختلفة.

              `,
              },
            },
          ],
          schema: [
            {
              q: `هل من السهل العناية بالفضة الإسترليني؟`,
              a: `بالتأكيد، فكل ما عليك فعله هو الاحتفاظ بها في صندوق نظيف وجاف إلى جانب تنظيفها بانتظام.`
            },
            {
              q: `هل يمكن ارتداء المجوهرات المصنوعة من الفضة الإسترليني بشكل يومي؟`,
              a: `نعم، بالتأكيد.`
            },
            {
              q: `ما هي المدة الزمنية التي يمكن للمجوهرات المصنوعة من الفضة الإسترليني خلالها الاحتفاظ برونقها؟`,
              a: `بشكل عام، إذا تم العناية بها بشكل جيد فضلًا عن تنظيفها بانتظام وتخزينها في مكان جاف ونظيف فإنها يمكن أن تدوم لفترة طويلة تصل إلى 20-30 عامًا.`
            },
            {
              q: `هل المجوهرات المصنوعة من الفضة الإسترليني آمنة على البشرة؟`,
              a: `تتكون الفضة الإسترليني من 92.5% من الفضة و7.5% من النحاس،  مما يجعلها آمنة ومضادة للحساسية ومناسبة لجميع أنواع البشرة.`
            },
          ]
        },
        diamonds: {
          seo: {
            title: `تسوقي مجوهرات الماس في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الالماس أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryDiamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              diamonds: ["diamondsAr"],
            }),
          },
        },
        "colored-stones": {
          seo: {
            title: `تسوقي مجوهرات بأحجار ملونة في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأحجار الملونة أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryColoredStone,
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

                أبرزي إطلالاتك وتألقي وشعي ببريق لافت مع مجوهرات لازوردي المزينة بالأحجار الصفراء. يعكس هذا اللون المرح والإيجابية، فهو يضيف إلى إطلالاتك بدفء لونه ولمعته المبهجة. سواء كنتِ من محبي الياقوت الأصفرالمذهل، فلن تجدي أفضل من مجموعة مجوهرات لازوردي المزينة بالأحجار الصفراء لتتألقي كل يوم مع سحرها المتلألئ.
              `,
              },
              content: {
                value: `
          
                <h2>مجوهرات فاتنة بأحجار الجمشت والفيروز في الإمارات</h2>

                <p>
                <a>اكتشفي سحر الأحجار الكريمة الفاخرة </span><span>حجر جمشت، حجر الكهرمان</span><span> وغيرها من الأحجار الكريمة الملونة مع مجموعة مجوهرات لازوردي المزينة بالأحجار الكريمة التي تأسر الجميع بجمالها وفخامتها. تتميز هذه الأحجار الكريمة بجمالها الفريد وسحرها الخلاب، حيث تضيف لمسة من الأناقة والجمال إلى أي مجموعة مجوهرات. تتميز أحجار الفيروز بلونها الأزرق الفاتح والأخضر الزمردي، والذي يعتبر رمزًا للهدوء والسلام والسكينة. تستخدم أحجار الفيروز في تصنيع المجوهرات منذ القدم، حيث كانت تستخدم في صنع تحف وزينة الملوك والملكات. وإذا كنتِ ترغبين في الحصول على قطعة مجوهرات تحمل </span><span>حجر فيروز</span><span> ، فإنها قد تكون الخيار الأمثل لتضفي على إطلالتك لمسة من الهدوء والسلام والسكينة. من أقراط الجمشت الرقيقة إلى </span><span><span></span>&#xa0;</span><span><spa></span>خواتم الفيروز</span><span> الرائعة ، مع مجموعة مجوهرات لازوردي المزينة بالأحجار الكريمة الملونة، يمكنك اكتشاف معاني الرقي والأناقة التي تثبتها هذه الأحجار الملكية.</span></a>
              </p>

                <h2>اكتشفي روعة الزمرد - الحجر الخلاب الذي ينقلك إلى عالم الطبيعة الخلابة</h2>

                <p><a href="https://www.lazurde.com/ar-ae/jewelry/rings" style="text-decoration:none;"><u><span>خواتم</span></u></a><span>&nbsp;</span><a href="https://www.lazurde.com/ar-ae/jewelry/necklaces-pendants" style="text-decoration:none;">وسلاسل</a><span>&nbsp;</span><span>احجار كريمة فريدة مزينة بالزمرد؛ فإنها الخيار الأمثل لإضفاء لمسة من الجمال الطبيعي والأناقة على إطلالتك. يعتبر حجر الزمرد من الأحجار الكريمة الفاخرة التي تتميز بلونها الأخضر الزمردي النابض بالحياة والجمال، والذي يوحي بجمال الطبيعة الخلابة. وتتوفر أحجار الزمرد بتصاميم متعددة مثل خواتم احجار كريمة،&nbsp;</span><a href="https://www.lazurde.com/ar-sa/jewelry/bracelets-anklets" style="text-decoration:none;"><u><span>اساور</span></u></a><span>&nbsp;احجار كريمة</span><span>&nbsp;</span><a href="https://www.lazurde.com/ar-ae/jewelry/earrings" style="text-decoration:none;">والأقراط</a><span>&nbsp;وغيرها، مما يجعلها خيارًا رائعًا لإضافة لمسة من الأناقة والجمال إلى مجموعة مجوهراتك.</span></p>
                
                <h2>الياقوت الأحمر ملك الأحجار الكريمة</h2>
                يطلق على حجر الياقوت الأحمر اسم "ملك الأحجار الكريمة"، من أكثر الأحجار الكريمة جمالًا. اكتشفي مجموعة لازوردي الرائعة من خواتم وقلادات الياقوت الاحمر. بفضل جمالها الفريد ولونها الأحمر الشغوف، تجعل خواتم وسلاسل الياقوت الأحمر إطلالتك جريئة وجميلة ومفعمة بالحيوية. وتضفي على شخصيتك لمسة من الشغف والعاطفة والجاذبية، مما يجعلها الخيار الأمثل للمناسبات الخاصة.


                <h2>لا تفوتي الفرصة.. واقتني قطعتك المفضلة من مجموعة الأحجار الكريمة من لازوردي</h2>
                اختبري الجمال الخالد لمجموعة مجوهرات لازوردي المزينة بالأحجار الكريمة الملونة حيث تتفرد كل قطعة بذاتها وكأنها لوحة فنية تشع بالفخامة. نفخر بتقديم مجموعة متنوعة من المجوهرات المزينة بالأحجار الكريمة تضمن أن تجدي القطعة المثالية التي تناسب شخصيتك وأسلوبك.
                
                <h2>الأسئلة الشائعة:</h2>

                <h3>ما هي انواع احجار كريمة؟</h3>
                
				<p>
					<span></span><span>الماس</span><span> (</span><span><span></span>Diamond</span><span><spa></span>): </span><span>يعتبر</span><span> </span><span>من</span><span> </span><span>أكثر</span><span> </span><span>الأحجار</span><span> </span><span>قيمة</span><span> </span><span>وصلابة، وهو</span><span> </span><span>شفاف</span><span> </span><span>ويمكن</span><span> </span><span>أن</span><span> </span><span>يأتي</span><span> </span><span>بألوان</span><span> </span><span>مختلفة</span><span>.</span>
				</p>
				<p>
					<span></span><span>الياقوت</span><span> (</span><span><span></span>Ruby</span><span><spa></span>): </span><span>حجر</span><span> </span><span>كريم</span><span> </span><span>أحمر</span><span> </span><span>اللون، يتميز</span><span> </span><span>بصلابته</span><span> </span><span>ولمعانه</span><span>.</span>
				</p>
				<p>
					<span></span><span>الزمرد</span><span> (</span><span><span></span>Emerald</span><span><spa></span>): </span><span>يتميز</span><span> </span><span>بلونه</span><span> </span><span>الأخضر</span><span> </span><span>الفريد</span><span> </span><span>وهو</span><span> </span><span>من</span><span> </span><span>الأحجار</span><span> </span><span>الكريمة</span><span> </span><span>النادرة</span><span>.</span>
				</p>
				<p>
					<span></span><span>الزفير</span><span> (</span><span><span></span>Sapphire</span><span><spa></span>): </span><span>يأتي</span><span> </span><span>بعدة</span><span> </span><span>ألوان، لكن</span><span> </span><span>الأكثر</span><span> </span><span>شهرة</span><span> </span><span>هو</span><span> </span><span>الزفير</span><span> </span><span>الأزرق</span><span>.</span>
				</p>
				<p>
					<span></span><span>العقيق</span><span> (</span><span><span></span>Agate</span><span><spa></span>): </span><span>يتميز</span><span> </span><span>بتنوعه</span><span> </span><span>الكبير</span><span> </span><span>في</span><span> </span><span>الألوان</span><span> </span><span>والأنماط</span><span>.</span>
				</p>
				<p>
					<span></span><span>الفيروز</span><span> (</span><span><span></span>Turquoise</span><span><spa></span>): </span><span>حجر</span><span> </span><span>كريم</span><span> </span><span>يتميز</span><span> </span><span>بلونه</span><span> </span><span>الأزرق</span><span> </span><span>أو</span><span> </span><span>الأخضر</span><span>.</span>
				</p>

        <h3>ما هي افضل انواع الأحجار الكريمة؟</h3>
        أفضل أنواع الأحجار الكريمة تختلف بناءً على معايير متعددة مثل الندرة، الجمال، الصلابة، والقيمة. من بين هذه الأحجار:

        <p><span>●</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>الياقوت: يشتهر بلونه الأحمر الغني وصلابته العالية.</p>
        <p><span>●</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>الزمرد: يعرف بلونه الأخضر الفريد ويُقدَّر لندرته وجماله.</p>
        <p><span>●</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>الزفير: يأتي بألوان متعددة، لكن الأزرق هو الأشهر والأكثر قيمة.</p>


          <h3>لماذا يرتدي الناس الأحجار الكريمة؟</h3>
          كل حجر كريم له طاقة وخصائص فريدة ، يرتديها البعض لهذا السبب؛ والبعض الأخر يحب ارتدائها لأنها جميلة.

           <h3>كيف يكون اختيار المجوهرات المزينة بالأحجار الكريمة؟</h3>
           يجب التحقق من اللون ودرجة نقاء الحجر ووزنه قبل الشراء.

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
            title: `تسوقي مجوهرات من اللؤلؤ في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات اللؤلؤ أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryPearls,
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
                <h2>جواهر طبيعية ثمينة مستوحاة من تراث الإمارات</h2>
                !اكتشفي عالم اللؤلؤ الساحر وأجعلي اللؤلؤ الإماراتي رمزًا لأناقتك ورقيك، واحتفظي به ككنز قيم يروي قصة الجمال الطبيعي والتراث الثقافي للمملكة. لذا، نقدم لكِ مجموعة ساحرة تعكس سحر اللؤلؤ الطبيعي وجماله الفريد. تضم مجوهرات متنوعة تشمل العديد من التصاميم الأنيقة والفريدة بداية من السلاسل المزينة باللؤلؤ التي تزين رقبتك بأناقة إلى الأقراط التي تبرز جمال محياك. نقدم لكِ كل ما تحتاجينه
                `,
              },
              content: {
                value: `
          
                <h2>تسوقي أقراط وأساور وخواتم وعقد لؤلؤ </h2>

                <p>
                <a>استمتعي بتجربة الأناقة الكلاسيكية مع مجموعتنا المختارة بعناية من <span>عقد لؤلؤ طبيعي</span><span dir="ltr"><span dir="ltr"></span> </span><span>و</span><span>أقراط اللؤلؤ و أساور لؤلؤ</span>، وخواتم لؤلؤ. اختاري القطع التي تعكس ذوقك الشخصي، واستمتعي بإطلالة رائعة تبرز جمالك الطبيعي وتجذب إليكِ كل الأنظار. تصاميم رائعة تحتفل بجمال اللؤلؤ الراقي وتجمع بين الأناقة والبساطة، ستساهم في إضفاء لمسة من الجمال والرقي على إطلالتك. يمكنك الاختيار من بين </a><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/yellow-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأصفر</span></u></a> ، و<a href="https://www.lazurde.com/ar-ae/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الذهب</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/white-gold" style="text-decoration:none"><u><span style="color:#1155cc">الأبيض</span></u></a> الساحر<span dir="ltr"><span dir="ltr"></span> </span><span>الرومانسي. بغض النظر عن النمط الشخصي الذي تفضلينه، فإن مجوهرات لازوردي مزي</span>ن باللؤلؤ يضفي لمسة من الأناقة والفخامة ويبرز جمالك الطبيعي. 
              </p>

                <h2>تحف فنية رائعة تبرز إشراقة اللؤلؤ الطبيعي</h2>

              <p>
		      		<span>تألقي مع لازوردي </span><a href="https://www.lazurde.com/ar-sa/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">مع</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/rose-gold" style="text-decoration:none"><u><span style="color:#1155cc">سلاسل</span></u></a><span> لؤلؤ في تصاميم فاخرة مصممة بعناية فائقة لتبرز سحر اللؤلؤ وجماله؛ حيث تُعتبر كل سلسلة مزينة باللؤلؤ تحفة فنية رائعة، تظهر الإشراق الطبيعي والجاذبية الساحرة لهذه </span><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الأحجار</span></u></a><a href="https://www.lazurde.com/ar-sa/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">&#xa0;</span></u></a><a href="https://www.lazurde.com/ar-ae/jewelry/colored-stones" style="text-decoration:none"><u><span style="color:#1155cc">الكريمة</span></u></a><span>. تأتي السلاسل المزينة باللؤلؤ في مجموعة من التصاميم والأشكال، بما في ذلك السلاسل المزينة بلؤلؤة واحدة أو بعدة لآلئ لتناسب جميع الأذواق. اختاري السلسلة التي تعجبك من مجموعتنا المتنوعة، ودعي اللؤلؤ يضفي لمسة من السحر والجمال الخالد على إطلالتك. وعندما يتعلق الأمر بالأقراط المزينة باللؤلؤ، تقدم لازوردي </span><a href="https://www.lazurde.com/ar-ae/jewelry/earrings" style="text-decoration:none"><u><span style="color:#1155cc">أقراط</span></u></a><span> مزينة باللؤلؤ في مجموعة متنوعة من الأحجام والأشكال، تضم الأقراط الصغيرة أو الأقراط المتدلية ذات التصاميم المعقدة، مما يتيح لك اختيار النمط الذي يناسب ذوقك ومناسبتك.</span>
		        	</p>

                <h2>تألقي وأضيفي لمسة من الجمال الخالد إلى إطلالتك مع مجوهرات لؤلؤ فاخرة و راقية</h2>

               <p>
				      <span>استمتعي بأناقة ورقة اللؤلؤ ودعيه يصبح جزءًا لا يتجزأ من أسلوبك الخاص. لا شك أن اللؤلؤ يحمل سحرًا لا يقاوم وجمالًا خالدًا. وعليه، هذه دعوة منا لاكتشاف مجموعة لازوردي من السلاسل المزينة باللؤلؤ واقراط اللؤلؤ </span><a href="https://www.lazurde.com/ar-ae/jewelry/bracelets-anklets" style="text-decoration:none"><u><span style="color:#1155cc">وأساور</span></u></a><span> اللؤلؤ </span><a href="https://www.lazurde.com/ar-ae/jewelry/rings" style="text-decoration:none"><u><span style="color:#1155cc">وخواتم</span></u></a><span> اللؤلؤ وعززي أناقتك الشخصية بلمسة راقية ورقيقة.</span>
			        </p>
		
                <h2>الأسئلة الشائعة:</h2>

                <h3>كم تدوم المجوهرات المزينة باللؤلؤ؟</h3>

               مع الاعتناء الجيد بها، يمكن أن تدوم المجوهرات المزينة باللؤلؤ طوال العمر. إن اللؤلؤ هو أكثر الأحجار الكريمة متانة وأطوالها عمرًا.

                <h3>هل يمكنني ارتداء المجوهرات المزينة باللؤلؤ كل يوم؟</h3>
                نعم، بكل تأكيد. سلسلة بسيطة مزينة باللؤلؤ أو أقراط صغيرة مزينة باللؤلؤ ستضيف الكثير إلى إطلالاتك اليومية.

                <h3>كيف يمكن الاعتناء باللؤلؤ؟</h3>
                يُنصح بمسح المجوهرات المزينة باللؤلؤ برفق بقطعة قماش للتخلص من أي أوساخ أو عطر أو عرق قبل تخزينها.
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
        "under-500": {
          seo: {
            title: `تسوقي مجوهرات بأقل من 500 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من المجوهرات بأسعار أقل من 500 درهم إماراتي أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelryUnder500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["under500"] }),
          },
        },
        "500-1000": {
          seo: {
            title: `تسوقي مجوهرات بأقل من 1,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من المجوهرات بأسعار أقل من 1,000 درهم إماراتي أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelry500to1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["500to1000"] }),
          },
        },
        "1000-2000": {
          seo: {
            title: `تسوقي مجوهرات بأقل من 2,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من المجوهرات بأسعار أقل من 2,000 درهم إماراتي أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelry1000to2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["1000to2000"] }),
          },
        },
        "2000-4000": {
          seo: {
            title: `تسوقي مجوهرات بأقل من 4,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من المجوهرات بأسعار أقل من 4,000 درهم إماراتي أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelry2000to4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["2000to4000"] }),
          },
        },
        "4000-above": {
          seo: {
            title: `تسوقي مجوهرات بأكثر من 4,000 درهم إماراتي في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من المجوهرات بأسعار تبدأ من 4,000 درهم إماراتي أونلاين في الإمارات، والتي تتوفر بتصاميم مذهلة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع المجاني، وخيارات الشراء الفوري والدفع لاحقًا.`,
          },
          banner: bannersJewelry?.jewelry4000andAbove,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({ price: ["4000above"] }),
          },
        },
      },
    },
    "lab-grown-diamonds": {
      seo: {
        title: `تسوقي مجوهرات الماس صناعي | الماس صناعي في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `استكشفي مجموعتنا الفاخرة من مجوهرات الالماس الصناعي أونلاين في الإمارات، بما في ذلك خواتم وعقود وأساور الالماس الصناعي وأكثر. استمتع بخدمة التوصيل المجاني وإمكانية الإرجاع مع خيار الشراء الآن والدفع لاحقًا.`,
      },
      banner: null,
      bannerWithcards: null,
      plpComponent: null,
      children: {
        "necklaces-pendants": {
          seo: {
            title: `Buy Necklaces & Pendants in Saudi Arabia | Necklace Designs | Page <number> | L'azurde KSA`,
            description: `Explore our collection of necklaces & pendants online in KSA, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
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
            title: `Buy Rings for Women | Ring Designs in Saudi Arabia | Page <number> | L'azurde KSA`,
            description: `Explore our collection of rings & bands online in KSA, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
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
            title: `Buy Bracelets for Women | Bracelets & Anklets in Saudi Arabia | Page <number> | L'azurde KSA`,
            description: `Explore our collection of bracelets & anklets online in KSA, offering exquisite designs. Shop with free delivery & returns with options to buy now & pay later.`,
          },
          banner: null,
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
            title: `Buy Earrings for Women | Earring Designs in Saudi Arabia | Page <number> | L'azurde KSA`,
            description: `Explore our collection of bracelets & anklets online in KSA, offering exquisite designs. Shop with free delivery & returns with options to buy now & pay later.`,
          },
          banner: null,
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
            title: `Shop All - Jewelry | Page <number> | L'azurde KSA`,
            description: `Discover an exquisite collection of jewelry online at L'azurde KSA. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
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
            title: `Buy Our Bestselling Jewelry in Saudi Arabia | Page <number> | L'azurde KSA`,
            description: `Explore our collection of bestselling jewelry brands online in KSA, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
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
            title: `Buy Latest & New Jewelry Designs in Saudi Arabia | Page <number> | L'azurde KSA`,
            description: `Explore our collection of new jewelry designs online in KSA, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
              newIn: ["newIn"],
            }),
          },
        },
        "under-6000": {
          seo: {
            title: `Buy Gold Jewelry Under 500 SAR in Saudi Arabia | Page <number> | L'azurde KSA`,
            description: `Explore our collection of gold jewelry under 500 SAR online in KSA, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
              price: ["under6000"],
            }),
          },
        },
        "6000-10000": {
          seo: {
            title: `Buy Gold Jewelry Under 1,000 SAR in Saudi Arabia | Page <number> | L'azurde KSA`,
            description: `Explore our collection of gold jewelry under 1,000 SAR online in KSA, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
              price: ["6000to10000"],
            }),
          },
        },
        "10000-above": {
          seo: {
            title: `Buy Jewelry Under 2000 SAR in Saudi Arabia | Page <number> | L'azurde KSA`,
            description: `Explore our collection of jewelry under 2000 SAR online in KSA, offering exquisite designs. Shop with free delivery, free returns & options to buy now & pay later.`,
          },
          banner: null,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["lazurdeAr"],
              collection: ["eternaAr"],
              price: ["10000above"],
            }),
          },
        },
      },
    },
  },
  missl: {
    "shop-all": {
      seo: {
        title:
          "تسوقي جميع مجوهرات مس لازوردي | Page <number> | لازوردي الإمارات",
        description:
          "اكتشف مجموعة فاخرة من مجوهرات مس أل أونلاين في لوزوردي الإمارات. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.",
      },
      banner: bannersMissl?.shopAll,
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
        title: `تسوقي أفضل مجوهرات مس لازوردي في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من أفضل مجوهرات مس أل أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.bestSellers,
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
        title: `تسوقي أحدث تصاميم مس لازوردي في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من تصميمات مس أل الجديدة أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.newIn,
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
        title: `احصلي على أفضل الأسعار على مجوهرات مس لازوردي في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل أونلاين في الإمارات، بقيمة رائعة وأفضل الأسعار. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.specialPrice,
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
        title: `تسوقي مجوهرات مس إل ذهب أصفر في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل من الذهب الأصفر أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.yellowGold,
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
        title: `تسوقي مجوهرات مس إل ذهب أبيض في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل من الذهب الأبيض أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.whiteGold,
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
        title: `تسوقي مجوهرات مس إل ذهب وردي في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل من الذهب الوردي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.roseGold,
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
        title:
          "تسوقي مجوهرات ذهب متعدد الألوان من مس أل في الإمارات | Page <number> | لازوردي الإمارات",
        description: `اكتشفي مجموعتنا من مجوهرات ذهب متعدد الألوان من مس أل أونلاين في الإمارات، ووالتي تقدم تصاميم فاخرة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.`,
      },
      banner: bannersMissl?.multiColorGold,
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
        title: `تسوقي مجوهرات مس أل الألماس في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل من الألماس أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.diamond,
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
        title: `تسوقي مجوهرات أحجار ملونة مس إل في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل من الأحجار الملونة أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.coloredStone,
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
        title: `تسوقي مجوهرات مس إل لؤلؤ في الإمارات | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من مجوهرات مس لو من اللؤلؤ أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.essentials,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["misslAr"], collection: ["essentialsAr"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "under-500": {
      seo: {
        title: `مجوهرات مس أل بأقل من 500 درهم إماراتي | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل بأسعار أقل من 500 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.under500,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["misslAr"], price: ["under500"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "500-1000": {
      seo: {
        title: `مجوهرات مس أل بأقل من 1,000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل بأسعار أقل من 1,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.under1000,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["misslAr"], price: ["500to1000"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "1000-2000": {
      seo: {
        title: `مجوهرات مس أل بأقل من 2,000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل بأسعار أقل من 2,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.under2000,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["misslAr"], price: ["1000to2000"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "2000-4000": {
      seo: {
        title: `مجوهرات مس أل بأقل من 4,000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل بأسعار أقل من 4,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.under4000,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["misslAr"], price: ["2000to4000"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "4000-above": {
      seo: {
        title: `مجوهرات مس أل بأكثر من 4,000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من مجوهرات مس أل بأسعار تبدأ من 4,000 درهم إماراتي أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.above4000,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({ brand: ["misslAr"], price: ["4000above"] }),

        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
    },
    "necklaces-pendants": {
      seo: {
        title: `تسوقي قلادات ودلايات مس لازوردي | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من قلادات وعقود مس أل أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.necklacesPendants,
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
            title: `تسوقي جميع العقود والدلايات من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من جميع العقود والدلايات اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.shopAll,
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
            title: `تسوقي سلاسل دلايات مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من سلاسل دلايات اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.pendantsChain,
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
            title: `تسوقي مجوهرات دلايات مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات دلايات اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.pendants,
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
            title: `تسوقي عقود ودلايات تشوكر من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات تشوكر اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.chokar,
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
            title: `تسوقي عقود ودلايات متعددة الطبقات من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات متعددة الطبقات اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.layered,
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
            title: `تسوقي سلاسل عقود ودلايات مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من سلاسل عقود ودلايات اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.chains,
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
            title: `تسوقي دلايات تشارم من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من دلايات تشارم اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.charms,
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
            title: `تسوقي أفضل العقود والدلايات مبيعاً من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أفضل العقود والدلايات مبيعاً اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.bestSellers,
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
            title: `تسوقي أحدث وأجدد العقود والدلايات من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أحدث وأجدد العقود والدلايات اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.newIn,
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
            title: `تسوقي عقود ودلايات بأسعار خاصة من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات بأسعار خاصة اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.specialPrice,
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
            title: `تسوقي عقود ودلايات من الذهب الأصفر من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات من الذهب الأصفر اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.yellowGold,
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
            title: `تسوقي عقود ودلايات من الذهب الأبيض من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات من الذهب الأبيض اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.whiteGold,
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
            title: `تسوقي عقود ودلايات من الذهب الوردي من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات من الذهب الوردي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.roseGold,
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
            title: `تسوقي عقود ودلايات من الذهب متعدد الألوان من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات من الذهب متعدد الألوان اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.multiColoredGold,
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
            title: `تسوقي عقود ودلايات ألماس من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات ألماس اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.diamonds,
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
            title: `تسوقي عقود ودلايات بالأحجار الملونة من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات بالأحجار الملونة اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.coloredStone,
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
            title: `تسوقي عقود ودلايات لؤلؤ من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات لؤلؤ اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.pearls,
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
            title: `تسوقي عقود ودلايات لؤلؤ من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات لؤلؤ اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.essentials,
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
        "under-500": {
          seo: {
            title: `تسوقي عقود ودلايات مس أل تحت 500 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات تحت 500 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              price: ["under500"],
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
        "500-1000": {
          seo: {
            title: `تسوقي عقود ودلايات مس أل بين 500-1000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات بين 500-1000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              price: ["500to1000"],
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
        "1000-2000": {
          seo: {
            title: `تسوقي عقود ودلايات مس أل بين 1000-2000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات بين 1000-2000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              price: ["1000to2000"],
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
        "2000-4000": {
          seo: {
            title: `تسوقي عقود ودلايات مس أل بين 2000-4000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات بين 2000-4000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              price: ["2000to4000"],
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
        "4000-above": {
          seo: {
            title: `تسوقي عقود ودلايات مس أل أعلى من 4000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات أعلى من 4000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.neckPend?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["necklace"],
              price: ["4000above"],
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
      },
    },
    rings: {
      seo: {
        title: `تسوقي خواتم مس أل لازوردي | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من خواتم مس أل أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.rings?.lOne,
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
            title: `تسوقي خواتم ستيتمنت من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم ستيتمنت اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.statement,
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
            title: `تسوقي خواتم مس أل ذو رأسين في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم ذو رأسين اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.twoHeaded,
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
            title: `تسوقي خواتم إيترنيتي مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم إيترنيتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.eternity,
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
            title: `تسوقي خواتم زواج من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم زواج اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.band,
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
            title: `تسوقي جميع خواتم مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من جميع الخواتم اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.shopAll,
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
            title: `تسوقي أفضل خواتم مس أل مبيعاً في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أفضل الخواتم مبيعاً اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.bestSellers,
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
            title: `تسوقي أحدث تصاميم خواتم مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أحدث تصاميم الخواتم اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.newIn,
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
            title: `تسوقي خواتم مس أل بأسعار خاصة في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الخواتم بأسعار خاصة اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.specialPrice,
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
            title: `تسوقي خواتم ذهب أصفر من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم الذهب الأصفر اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.yellowGold,
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
            title: `تسوقي خواتم ذهب أبيض من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم الذهب الأبيض اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.whiteGold,
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
            title: `تسوقي خواتم ذهب وردي من مس أل من في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم الذهب الوردي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.roseGold,
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
            title: `تسوقي خواتم مس أل من الذهب متعدد الألوان في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم من الذهب متعدد الألوان اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.multiColoredGold,
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
            title: `تسوقي خواتم الماس من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم الالماس اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.diamonds,
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
            title: `تسوقي خواتم مس أل بالأحجار الملونة في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم الأحجار الملونة اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.coloredStone,
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
            title: `تسوقي خواتم لؤلؤ من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم اللؤلؤ اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.pearls,
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
            title: `تسوقي خواتم لؤلؤ من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم اللؤلؤ اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.essentials,
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
        "under-500": {
          seo: {
            title: `تسوقي خواتم مس أل تحت 500 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الخواتم تحت 500 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              price: ["under500"],
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
        "500-1000": {
          seo: {
            title: `تسوقي خواتم مس أل بين 500-1000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الخواتم بين 500-1000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              price: ["500to1000"],
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
        "1000-2000": {
          seo: {
            title: `تسوقي خواتم مس أل بين 1000-2000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الخواتم بين 1000-2000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              price: ["1000to2000"],
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
        "2000-4000": {
          seo: {
            title: `تسوقي خواتم مس أل بين 2000-4000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الخواتم بين 2000-4000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              price: ["2000to4000"],
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
        "4000-above": {
          seo: {
            title: `تسوقي خواتم مس أل أعلى من 4000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الخواتم أعلى من 4000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.rings?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["rings"],
              price: ["4000above"],
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
      },
    },
    "bracelets-anklets": {
      seo: {
        title: `تسوقي أساور وخلاخيل مس لازوردي | Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من أساور وخلاخيل مس أل أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.braceletsAnklets?.lOne,
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
            title: `تسوقي سلاسل أساور وخلاخيل من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من سلاسل الأساور والخلاخيل اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.chain,
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
            title: `تسوقي أساور وخلاخيل كوف من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل الكوف اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.cuff,
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
            title: `تسوقي أساور وخلاخيل بنغل من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل البنغل اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.bangle,
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
            title: `تسوقي أساور وخلاخيل تشارم من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل التشارم اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.charm,
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
            title: `تسوقي جميع أساور وخلاخيل مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من جميع الأساور والخلاخيل اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.shopAll,
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
            title: `تسوقي أفضل أساور وخلاخيل مس أل مبيعاً في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أفضل الأساور والخلاخيل مبيعاً اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.bestSellers,
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
            title: `تسوقي أحدث أساور وخلاخيل مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أحدث الأساور والخلاخيل اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.newIn,
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
            title: `تسوقي أساور وخلاخيل مس أل بأسعار خاصة في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الأساور والخلاخيل بأسعار خاصة اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.specialPrice,
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
            title: `تسوقي أساور وخلاخيل ذهب أصفر من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل الذهب الأصفر اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.yellowGold,
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
            title: `تسوقي أساور وخلاخيل ذهب أبيض من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل الذهب الأبيض اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.whiteGold,
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
            title: `تسوقي أساور وخلاخيل ذهب وردي من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل الذهب الوردي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.roseGold,
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
            title: `تسوقي أساور وخلاخيل مس أل من الذهب متعدد الألوان في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل الذهب متعدد الألوان اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.multiColorGold,
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
            title: `تسوقي أساور وخلاخيل الماس من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل الالماس اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.diamonds,
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
            title: `تسوقي أساور وخلاخيل مس أل بالأحجار الملونة في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل بالأحجار الملونة اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.coloredStone,
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
            title: `تسوقي أساور وخلاخيل لؤلؤ من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل اللؤلؤ اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.pearls,
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
            title: `تسوقي أساور وخلاخيل لؤلؤ من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل اللؤلؤ اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.essentials,
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
        "under-500": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل تحت 500 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل تحت 500 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              price: ["under500"],
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
        "500-1000": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل بين 500-1000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل بين 500-1000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              price: ["500to1000"],
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
        "1000-2000": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل بين 1000-2000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل بين 1000-2000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              price: ["1000to2000"],
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
        "2000-4000": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل بين 2000-4000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل بين 2000-4000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              price: ["2000to4000"],
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
        "4000-above": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل أعلى من 4000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل أعلى من 4000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.braceletsAnklets?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["bracelets"],
              price: ["4000above"],
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
      },
    },
    earrings: {
      seo: {
        title: `تسوقي أقراط مس لازوردي| Page <number> | لازوردي الإمارات`,
        description: `اكتشفي مجموعتنا من أقراط مس أل أونلاين في الإمارات، بتصميمات فاخرة. تسوقي الآن مع توصيل مجاني، إمكانية الإرجاع المجاني، وخيارات للشراء الفوري والدفع لاحقًا.`,
      },
      banner: bannersMissl?.earrings?.lOne,
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
            title: `تسوقي أقراط صغيرة من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الأقراط الصغيرة اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.stud,
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
            title: `تسوقي أقراط شاندلير من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أقراط الشاندلير اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.chandelier,
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
            title: `تسوقي أقراط دائرية من مس في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الاقراط الدائرية اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.hoop,
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
            title: `تسوقي أقراط متدلية من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الأقراط المتدلية اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.drop,
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
            title: `تسوقي أقراط كليب من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الأقراط الكليب اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.clipOn,
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
            title: `تسوقي أقراط كوف من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الأقراط الكوف اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.cuff,
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
            title: `تسوقي جميع أقراط مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من جميع الأقراط اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.shopAll,
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
            title: `تسوقي أفضل أقراط مس أل مبيعاً في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أفضل الأقراط مبيعاً اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.bestSellers,
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
            title: `تسوقي أحدث أقراط مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أحدث الأقراط اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.newIn,
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
            title: `تسوقي أقراط مس أل بأسعار خاصة في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الأقراط بأسعار خاصة اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.specialPrice,
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
            title: `تسوقي أقراط ذهب أصفر من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أقراط الذهب الأصفر اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.yellowGold,
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
            title: `تسوقي أقراط ذهب أبيض من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أقراط الذهب الأبيض اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.whiteGold,
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
            title: `تسوقي أقراط ذهب وردي من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أقراط الذهب الوردي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.roseGold,
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
            title: `تسوقي أقراط مس أل من الذهب متعدد الألوان في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أقراط الذهب متعدد الألوان اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.multiColorGold,
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
            title: `تسوقي أقراط الماس من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أقراط الالماس اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.diamonds,
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
            title: `تسوقي أقراط مس أل بالأحجار الملونة في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الأقراط بالأحجار الملونة اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.coloredStone,
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
            title: `تسوقي أقراط لؤلؤ من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أقراط اللؤلؤ اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.pearls,
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
            title: `تسوقي أقراط لؤلؤ من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أقراط اللؤلؤ اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.essentials,
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
        "under-500": {
          seo: {
            title: `تسوقي أقراط مس أل تحت 500 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الأقراط تحت 500 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              price: ["under500"],
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
        "500-1000": {
          seo: {
            title: `تسوقي أقراط مس أل بين 500-1000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الأقراط بين 500-1000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              price: ["500to1000"],
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
        "1000-2000": {
          seo: {
            title: `تسوقي أقراط مس أل بين 1000-2000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الأقراط بين 1000-2000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              price: ["1000to2000"],
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
        "2000-4000": {
          seo: {
            title: `تسوقي أقراط مس أل بين 2000-4000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من الأقراط بين 2000-4000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              price: ["2000to4000"],
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
        "4000-above": {
          seo: {
            title: `تسوقي أقراط مس أل أعلى من 4000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أقراط أعلى من 4000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.earrings?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              category: ["earrings"],
              price: ["4000above"],
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
      },
    },
    kids: {
      seo: {
        title:
          "تسوقي مجوهرات للأطفال من مس أل في الإمارات | Page <number> | لازوردي الإمارات",
        description:
          "استكشفي مجموعتنا من مجوهرات الأطفال من مس أل اونلاين في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع خدمة التوصيل المجاني، وإمكانية الإرجاع مجاناً وخيارات الشراء الآن والدفع لاحقاً.",
      },
      banner: bannersMissl?.kids?.lOne,
      bannerWithcards: null,
      plpComponent: {
        facets: generateFacets({
          brand: ["misslAr"],
          collection: ["kidsAr"],
        }),
        ribbons: {
          onlineExclusive: { color: "#cececece", text: "Online Exclusive" },
          newIn: { color: "#cececece", text: "New In" },
        },
      },
      children: {
        "necklaces-pendants": {
          seo: {
            title: `تسوقي عقود ودلايات مس أل للأطفال في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من عقود ودلايات الأطفال اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.necklacesPendants,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
        rings: {
          seo: {
            title: `تسوقي خواتم مس أل للأطفال في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من خواتم الأطفال اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.rings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
        "bracelets-anklets": {
          seo: {
            title: `تسوقي أساور وخلاخيل مس أل للأطفال في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أساور وخلاخيل الأطفال اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.braceletsAnklets,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
        earrings: {
          seo: {
            title: `تسوقي أقراط مس أل للأطفال في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أقراط الأطفال اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.earrings,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
        "shop-all": {
          seo: {
            title: `تسوقي جميع مجوهرات مس أل للأطفال في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من جميع مجوهرات الأطفال اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.shopAll,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
            title: `تسوقي أفضل مجوهرات مس أل مبيعاً للأطفال في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أفضل مجوهرات الأطفال مبيعاً اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.bestSellers,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
            title: `تسوقي أحدث مجوهرات مس أل للأطفال في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من أحدث مجوهرات الأطفال اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.newIn,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
            title: `تسوقي مجوهرات مس أل للأطفال بأسعار خاصة في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات الأطفال بأسعار خاصة اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.specialPrice,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
            title: `تسوقي مجوهرات ذهب أصفر للأطفال من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات ذهب أصفر للأطفال اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.yellowGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
            title: `تسوقي مجوهرات ذهب أبيض للأطفال من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات ذهب أبيض للأطفال اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.whiteGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
            title: `تسوقي مجوهرات ذهب وردي للأطفال من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات ذهب وردي للأطفال اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.roseGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
            title: `تسوقي مجوهرات مس أل للأطفال من الذهب متعدد الألوان في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات للأطفال من الذهب متعدد الألوان اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.multiColorGold,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
            title: `تسوقي مجوهرات ألماس للأطفال من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات ألماس للأطفال اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.diamonds,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
            title: `تسوقي مجوهرات مس أل للأطفال بالأحجار الملونة في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات للأطفال بالأحجار الملونة اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.coloredStone,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
            title: `تسوقي مجوهرات لؤلؤ للأطفال من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات لؤلؤ للأطفال اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.pearls,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
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
            title: `تسوقي مجوهرات لؤلؤ للأطفال من مس أل في الإمارات | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات لؤلؤ للأطفال اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.essentials,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr", "essentialsAr"],
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
        "under-500": {
          seo: {
            title: `تسوقي مجوهرات مس أل للأطفال تحت 500 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات للأطفال تحت 500 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.under500,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
              price: ["under500"],
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
        "500-1000": {
          seo: {
            title: `تسوقي مجوهرات مس أل للأطفال بين 500-1000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات للأطفال بين 500-1000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.under1000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
              price: ["500to1000"],
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
        "1000-2000": {
          seo: {
            title: `تسوقي مجوهرات مس أل للأطفال بين 1000-2000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات للأطفال بين 1000-2000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.under2000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
              price: ["1000to2000"],
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
        "2000-4000": {
          seo: {
            title: `تسوقي مجوهرات مس أل للأطفال بين 2000-4000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات للأطفال بين 2000-4000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.under4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
              price: ["2000to4000"],
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
        "4000-above": {
          seo: {
            title: `تسوقي مجوهرات مس أل للأطفال أعلى من 4000 درهم إماراتي | Page <number> | لازوردي الإمارات`,
            description: `اكتشفي مجموعتنا من مجوهرات للأطفال أعلى من 4000 درهم إماراتي اون لاين من مس أل في الإمارات، والتي تقدم تصاميم رائعة. تسوقي مع التوصيل المجاني والإرجاع المجاني وخيارات الشراء الآن والدفع لاحقًا.`,
          },
          banner: bannersMissl?.kids?.above4000,
          bannerWithcards: null,
          plpComponent: {
            facets: generateFacets({
              brand: ["misslAr"],
              collection: ["kidsAr"],
              price: ["4000above"],
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
      },
    },
  },
};