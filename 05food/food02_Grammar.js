// ===== food02 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. There are + plural noun",
    "formula": "There are + plural noun + ...",
    "desc": "Dùng there are để nói có nhiều người hoặc vật ở một nơi.",
    "example": "There are many colorful food stalls selling different kinds of meals, snacks, drinks, and desserts.",
    "vi": "Có nhiều quầy đồ ăn đầy màu sắc bán nhiều loại bữa ăn, đồ ăn nhẹ, đồ uống và món tráng miệng.",
    "extra": [
      {
        "en": "There are several food stalls near the market entrance.",
        "vi": "Có vài quầy đồ ăn gần lối vào chợ."
      },
      {
        "en": "There are many healthy choices for visitors.",
        "vi": "Có nhiều lựa chọn lành mạnh cho du khách."
      }
    ]
  },
  {
    "title": "2. Become + adjective",
    "formula": "S + become(s) + adjective",
    "desc": "Dùng become để nói một người hoặc vật trở nên thế nào.",
    "example": "The market becomes very busy in the evening.",
    "vi": "Khu chợ trở nên rất đông vào buổi tối.",
    "extra": [
      {
        "en": "The street becomes lively after sunset.",
        "vi": "Con phố trở nên sôi động sau hoàng hôn."
      },
      {
        "en": "The food becomes cold after a long wait.",
        "vi": "Thức ăn trở nên nguội sau khi chờ lâu."
      }
    ]
  },
  {
    "title": "3. While + V-ing",
    "formula": "S + V + while + V-ing",
    "desc": "Dùng while + V-ing để diễn tả hai hoạt động xảy ra cùng lúc.",
    "example": "Families, tourists, and friends enjoy eating together while listening to music.",
    "vi": "Các gia đình, khách du lịch và bạn bè thích ăn cùng nhau trong khi nghe nhạc.",
    "extra": [
      {
        "en": "Visitors talk while waiting for their meals.",
        "vi": "Du khách trò chuyện trong khi chờ món."
      },
      {
        "en": "Families relax while enjoying local food.",
        "vi": "Các gia đình thư giãn trong khi thưởng thức món địa phương."
      }
    ]
  },
  {
    "title": "4. Because + clause",
    "formula": "S + V + because + S + V",
    "desc": "Dùng because để nêu lý do.",
    "example": "Some people take photos because the food looks beautiful and interesting.",
    "vi": "Một số người chụp ảnh vì thức ăn trông đẹp và thú vị.",
    "extra": [
      {
        "en": "Tourists return because the market feels welcoming.",
        "vi": "Khách du lịch quay lại vì khu chợ tạo cảm giác thân thiện."
      },
      {
        "en": "People choose fresh fruit because it is healthy.",
        "vi": "Mọi người chọn trái cây tươi vì nó tốt cho sức khỏe."
      }
    ]
  },
  {
    "title": "5. Passive voice with be + past participle",
    "formula": "S + be + past participle + ...",
    "desc": "Dùng câu bị động khi muốn nhấn mạnh đối tượng chịu tác động.",
    "example": "Healthy street food is usually made with fresh ingredients.",
    "vi": "Đồ ăn đường phố lành mạnh thường được làm từ nguyên liệu tươi.",
    "extra": [
      {
        "en": "Fresh juice is made with clean fruit.",
        "vi": "Nước ép tươi được làm từ trái cây sạch."
      },
      {
        "en": "Healthy dishes are prepared with fresh vegetables.",
        "vi": "Các món lành mạnh được chuẩn bị với rau tươi."
      }
    ]
  },
  {
    "title": "6. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "Customers should choose stalls that look tidy and follow good hygiene practices.",
    "vi": "Khách hàng nên chọn những quầy trông gọn gàng và tuân theo các thực hành vệ sinh tốt.",
    "extra": [
      {
        "en": "Customers should check whether a stall looks clean.",
        "vi": "Khách hàng nên kiểm tra xem quầy có sạch không."
      },
      {
        "en": "Sellers should keep cooking equipment tidy.",
        "vi": "Người bán nên giữ thiết bị nấu ăn gọn gàng."
      }
    ]
  },
  {
    "title": "7. Help + object + bare infinitive",
    "formula": "S + help(s) + O + V",
    "desc": "Dùng help với tân ngữ và động từ nguyên mẫu để nói giúp ai làm gì.",
    "example": "Eating healthy street food helps people stay strong and active.",
    "vi": "Ăn đồ ăn đường phố lành mạnh giúp mọi người khỏe mạnh và năng động.",
    "extra": [
      {
        "en": "Fresh meals help travelers stay energetic.",
        "vi": "Bữa ăn tươi giúp du khách duy trì năng lượng."
      },
      {
        "en": "Clean water helps customers stay healthy.",
        "vi": "Nước sạch giúp khách hàng khỏe mạnh."
      }
    ]
  },
  {
    "title": "8. Each + singular noun + singular verb",
    "formula": "Each + singular noun + V(s/es)",
    "desc": "Dùng each với danh từ số ít và động từ số ít.",
    "example": "Each place has special dishes with unique flavors and cooking styles.",
    "vi": "Mỗi nơi có những món đặc biệt với hương vị và phong cách nấu ăn độc đáo.",
    "extra": [
      {
        "en": "Each stall has a different menu.",
        "vi": "Mỗi quầy có một thực đơn khác nhau."
      },
      {
        "en": "Each country offers a special street food experience.",
        "vi": "Mỗi quốc gia mang đến một trải nghiệm ẩm thực đường phố đặc biệt."
      }
    ]
  },
  {
    "title": "9. Be known for + noun",
    "formula": "S + be known for + noun",
    "desc": "Dùng be known for để nói một nơi được biết đến vì điều gì.",
    "example": "Some countries are famous for noodles, while others are known for tacos, kebabs, dumplings, or grilled seafood.",
    "vi": "Một số quốc gia nổi tiếng với mì, trong khi những nơi khác được biết đến với taco, kebab, bánh há cảo hoặc hải sản nướng.",
    "extra": [
      {
        "en": "This market is known for grilled seafood.",
        "vi": "Khu chợ này được biết đến với hải sản nướng."
      },
      {
        "en": "The city is known for colorful food stalls.",
        "vi": "Thành phố được biết đến với những quầy đồ ăn đầy màu sắc."
      }
    ]
  },
  {
    "title": "10. To-infinitive for purpose",
    "formula": "S + V + to + V",
    "desc": "Dùng to + động từ nguyên mẫu để nêu mục đích.",
    "example": "Visitors often try street food to learn about local culture.",
    "vi": "Du khách thường thử đồ ăn đường phố để tìm hiểu về văn hóa địa phương.",
    "extra": [
      {
        "en": "Travelers visit markets to discover local flavors.",
        "vi": "Du khách đến chợ để khám phá hương vị địa phương."
      },
      {
        "en": "People buy fresh juice to enjoy a cool drink.",
        "vi": "Mọi người mua nước ép tươi để thưởng thức đồ uống mát."
      }
    ]
  }
];
