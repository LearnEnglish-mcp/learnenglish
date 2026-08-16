// ===== food03 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Gerund as subject",
    "formula": "V-ing + noun + V(s) + ...",
    "desc": "Dùng V-ing làm chủ ngữ để nói về một hoạt động nói chung.",
    "example": "Cooking street food requires skill and careful preparation.",
    "vi": "Nấu đồ ăn đường phố đòi hỏi kỹ năng và sự chuẩn bị cẩn thận.",
    "extra": [
      {
        "en": "Preparing fresh food requires patience and care.",
        "vi": "Chuẩn bị thức ăn tươi đòi hỏi sự kiên nhẫn và cẩn thận."
      },
      {
        "en": "Cooking safely requires clean equipment.",
        "vi": "Nấu ăn an toàn đòi hỏi thiết bị sạch."
      }
    ]
  },
  {
    "title": "2. Begin by + V-ing",
    "formula": "S + begin(s) + by + V-ing",
    "desc": "Dùng begin by + V-ing để nói bước đầu tiên của một quá trình.",
    "example": "Sellers begin by washing fresh ingredients and preparing meat, vegetables, rice, or noodles.",
    "vi": "Người bán bắt đầu bằng cách rửa nguyên liệu tươi và chuẩn bị thịt, rau, cơm hoặc mì.",
    "extra": [
      {
        "en": "Cooks begin by cleaning the work area.",
        "vi": "Đầu bếp bắt đầu bằng việc làm sạch khu vực làm việc."
      },
      {
        "en": "Sellers begin by checking fresh ingredients.",
        "vi": "Người bán bắt đầu bằng việc kiểm tra nguyên liệu tươi."
      }
    ]
  },
  {
    "title": "3. So + clause of result",
    "formula": "S + V + so + S + V",
    "desc": "Dùng so để nối nguyên nhân với kết quả.",
    "example": "They cook the food quickly so customers receive hot and tasty meals without waiting too long.",
    "vi": "Họ nấu thức ăn nhanh để khách hàng nhận được những bữa ăn nóng và ngon mà không phải chờ quá lâu.",
    "extra": [
      {
        "en": "Sellers prepare early so customers do not wait long.",
        "vi": "Người bán chuẩn bị sớm để khách hàng không phải chờ lâu."
      },
      {
        "en": "The cook works quickly so the food stays hot.",
        "vi": "Người nấu làm nhanh để thức ăn vẫn nóng."
      }
    ]
  },
  {
    "title": "4. Help + make + object + adjective",
    "formula": "S + help + make + O + adjective",
    "desc": "Dùng help make để nói một yếu tố góp phần làm cho điều gì trở nên thế nào.",
    "example": "Fresh ingredients and clean equipment help make the food safe and delicious for everyone.",
    "vi": "Nguyên liệu tươi và thiết bị sạch giúp làm cho thức ăn an toàn và ngon cho mọi người.",
    "extra": [
      {
        "en": "Clean water helps make food safer for customers.",
        "vi": "Nước sạch giúp thức ăn an toàn hơn cho khách hàng."
      },
      {
        "en": "Fresh vegetables help make meals colorful and healthy.",
        "vi": "Rau tươi giúp bữa ăn nhiều màu sắc và lành mạnh."
      }
    ]
  },
  {
    "title": "5. When + clause",
    "formula": "S + V + when + S + V",
    "desc": "Dùng when để nói điều xảy ra trong một tình huống nhất định.",
    "example": "Happy customers always return when the food tastes good and the service is friendly.",
    "vi": "Khách hàng vui vẻ luôn quay lại khi thức ăn ngon và dịch vụ thân thiện.",
    "extra": [
      {
        "en": "Visitors return when sellers provide good service.",
        "vi": "Du khách quay lại khi người bán cung cấp dịch vụ tốt."
      },
      {
        "en": "People smile when a meal tastes delicious.",
        "vi": "Mọi người mỉm cười khi bữa ăn có vị ngon."
      }
    ]
  },
  {
    "title": "6. Enjoy + V-ing",
    "formula": "S + enjoy + V-ing",
    "desc": "Dùng enjoy với V-ing để nói thích làm một hoạt động.",
    "example": "We enjoy walking around food stalls, looking at different meals, and choosing our favorite dishes together.",
    "vi": "Chúng tôi thích đi quanh các quầy đồ ăn, ngắm những món khác nhau và cùng chọn các món yêu thích.",
    "extra": [
      {
        "en": "Friends enjoy sharing snacks after school.",
        "vi": "Bạn bè thích chia sẻ đồ ăn nhẹ sau giờ học."
      },
      {
        "en": "Visitors enjoy tasting new dishes together.",
        "vi": "Du khách thích nếm những món mới cùng nhau."
      }
    ]
  },
  {
    "title": "7. While + V-ing",
    "formula": "While + V-ing, S + V",
    "desc": "Dùng while + V-ing để nói một hành động diễn ra trong lúc thực hiện hành động khác.",
    "example": "While eating, we laugh, tell stories, and take photos.",
    "vi": "Trong khi ăn, chúng tôi cười, kể chuyện và chụp ảnh.",
    "extra": [
      {
        "en": "While waiting, friends talk about their day.",
        "vi": "Trong khi chờ, bạn bè nói về ngày của mình."
      },
      {
        "en": "While walking, visitors look at colorful stalls.",
        "vi": "Trong khi đi bộ, du khách ngắm các quầy đầy màu sắc."
      }
    ]
  },
  {
    "title": "8. Should + passive infinitive",
    "formula": "S + should be + past participle",
    "desc": "Dùng should be + phân từ quá khứ để đưa ra lời khuyên ở dạng bị động.",
    "example": "Hot food should be served immediately after cooking.",
    "vi": "Thức ăn nóng nên được phục vụ ngay sau khi nấu.",
    "extra": [
      {
        "en": "Fresh fruit should be washed before serving.",
        "vi": "Trái cây tươi nên được rửa trước khi phục vụ."
      },
      {
        "en": "Cold drinks should be stored properly.",
        "vi": "Đồ uống lạnh nên được bảo quản đúng cách."
      }
    ]
  },
  {
    "title": "9. When + present simple, can + verb",
    "formula": "When + S + V, S + can + V",
    "desc": "Dùng when ở mệnh đề phụ và can ở mệnh đề chính để nói kết quả có thể xảy ra.",
    "example": "When people follow simple safety rules, they can enjoy delicious street food without worry.",
    "vi": "Khi mọi người tuân theo những quy tắc an toàn đơn giản, họ có thể thưởng thức đồ ăn đường phố ngon mà không phải lo lắng.",
    "extra": [
      {
        "en": "When stalls are clean, customers can eat confidently.",
        "vi": "Khi quầy sạch, khách hàng có thể ăn một cách yên tâm."
      },
      {
        "en": "When food is fresh, visitors can enjoy it safely.",
        "vi": "Khi thức ăn tươi, du khách có thể thưởng thức an toàn."
      }
    ]
  },
  {
    "title": "10. Make + object + adjective",
    "formula": "S + make(s) + O + adjective",
    "desc": "Dùng make + tân ngữ + tính từ để nói khiến ai hoặc điều gì trở nên thế nào.",
    "example": "The friendly atmosphere makes every visit enjoyable and relaxing after school or work.",
    "vi": "Bầu không khí thân thiện làm cho mỗi lần ghé thăm trở nên thú vị và thư giãn sau giờ học hoặc làm việc.",
    "extra": [
      {
        "en": "Good music makes the market more lively.",
        "vi": "Âm nhạc hay làm khu chợ sôi động hơn."
      },
      {
        "en": "Friendly service makes customers happy.",
        "vi": "Dịch vụ thân thiện làm khách hàng vui."
      }
    ]
  }
];
