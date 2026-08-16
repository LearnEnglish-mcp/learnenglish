// ===== park03 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Relative clause with that",
    "formula": "Noun + that + S + V",
    "desc": "Dùng that để giới thiệu mệnh đề quan hệ bổ nghĩa cho danh từ.",
    "example": "Many parks have small animals that people enjoy watching every season.",
    "vi": "Nhiều công viên có những động vật nhỏ mà mọi người thích quan sát vào mỗi mùa.",
    "extra": [
      {
        "en": "We protect animals that live in city parks.",
        "vi": "Chúng tôi bảo vệ những động vật sống trong công viên thành phố."
      },
      {
        "en": "Children enjoy birds that visit the lake.",
        "vi": "Trẻ em thích những con chim ghé hồ."
      }
    ]
  },
  {
    "title": "2. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên.",
    "example": "People should watch animals quietly and never frighten them.",
    "vi": "Mọi người nên quan sát động vật một cách yên lặng và không bao giờ làm chúng hoảng sợ.",
    "extra": [
      {
        "en": "Visitors should watch wildlife from a safe distance.",
        "vi": "Khách tham quan nên quan sát động vật hoang dã từ khoảng cách an toàn."
      },
      {
        "en": "People should protect flowers and young trees.",
        "vi": "Mọi người nên bảo vệ hoa và cây non."
      }
    ]
  },
  {
    "title": "3. Because + clause",
    "formula": "S + V + because + S + V",
    "desc": "Dùng because để nêu nguyên nhân.",
    "example": "I enjoy visiting this park because it is clean and quiet.",
    "vi": "Tôi thích đến công viên này vì nó sạch sẽ và yên tĩnh.",
    "extra": [
      {
        "en": "Families visit the park because it feels peaceful.",
        "vi": "Các gia đình đến công viên vì nơi đó yên bình."
      },
      {
        "en": "I walk outside because fresh air helps me relax.",
        "vi": "Tôi đi bộ ngoài trời vì không khí trong lành giúp tôi thư giãn."
      }
    ]
  },
  {
    "title": "4. May + bare infinitive",
    "formula": "S + may + V",
    "desc": "Dùng may để diễn tả khả năng có thể xảy ra.",
    "example": "Feeding wild animals is sometimes not allowed because it may harm them.",
    "vi": "Việc cho động vật hoang dã ăn đôi khi không được phép vì có thể gây hại cho chúng.",
    "extra": [
      {
        "en": "Wild food may harm animals in the park.",
        "vi": "Thức ăn không phù hợp có thể gây hại cho động vật trong công viên."
      },
      {
        "en": "Some birds may visit the pond in spring.",
        "vi": "Một số loài chim có thể ghé ao vào mùa xuân."
      }
    ]
  },
  {
    "title": "5. There is + noun",
    "formula": "There is + singular noun",
    "desc": "Dùng there is để giới thiệu sự tồn tại của một người, vật hoặc nơi.",
    "example": "There is a lovely park near my home in the city.",
    "vi": "Có một công viên đáng yêu gần nhà tôi trong thành phố.",
    "extra": [
      {
        "en": "There is a small pond beside the walking path.",
        "vi": "Có một ao nhỏ bên lối đi bộ."
      },
      {
        "en": "There is a quiet bench under the tall tree.",
        "vi": "Có một ghế băng yên tĩnh dưới cây cao."
      }
    ]
  },
  {
    "title": "6. While + clause",
    "formula": "S + V + while + S + V",
    "desc": "Dùng while để nói hai hành động xảy ra cùng lúc.",
    "example": "Children play happily while older people exercise with their friends.",
    "vi": "Trẻ em vui chơi trong khi người lớn tuổi tập thể dục cùng bạn bè.",
    "extra": [
      {
        "en": "Parents rest while children play on the grass.",
        "vi": "Cha mẹ nghỉ ngơi trong khi trẻ em chơi trên cỏ."
      },
      {
        "en": "Birds sing while people walk through the park.",
        "vi": "Chim hót trong khi mọi người đi bộ qua công viên."
      }
    ]
  },
  {
    "title": "7. Present simple for seasons",
    "formula": "S + V(s/es) + complement",
    "desc": "Dùng hiện tại đơn để mô tả đặc điểm thường thấy của một mùa hoặc nơi.",
    "example": "The weather is warm, flowers bloom beautifully, and green leaves grow everywhere.",
    "vi": "Thời tiết ấm áp, hoa nở đẹp và lá xanh mọc khắp nơi.",
    "extra": [
      {
        "en": "Flowers bloom when spring weather becomes warmer.",
        "vi": "Hoa nở khi thời tiết mùa xuân trở nên ấm hơn."
      },
      {
        "en": "Green leaves grow quickly in warm weather.",
        "vi": "Lá xanh mọc nhanh trong thời tiết ấm áp."
      }
    ]
  },
  {
    "title": "8. To-infinitive for purpose",
    "formula": "S + V + to + V",
    "desc": "Dùng to + động từ nguyên mẫu để diễn tả mục đích.",
    "example": "Spring is a wonderful season to visit the park with family and friends.",
    "vi": "Mùa xuân là một mùa tuyệt vời để đến công viên cùng gia đình và bạn bè.",
    "extra": [
      {
        "en": "Families visit the park to enjoy spring flowers.",
        "vi": "Các gia đình đến công viên để ngắm hoa mùa xuân."
      },
      {
        "en": "People walk outside to get gentle exercise.",
        "vi": "Mọi người đi bộ ngoài trời để vận động nhẹ nhàng."
      }
    ]
  },
  {
    "title": "9. Whenever + clause",
    "formula": "S + V + whenever + S + V",
    "desc": "Dùng whenever để nói điều xảy ra bất cứ khi nào một tình huống diễn ra.",
    "example": "I feel happy, calm, and healthy whenever I spend time there.",
    "vi": "Tôi cảm thấy vui vẻ, bình tĩnh và khỏe mạnh mỗi khi dành thời gian ở đó.",
    "extra": [
      {
        "en": "I feel calm whenever I walk beside the lake.",
        "vi": "Tôi cảm thấy bình tĩnh mỗi khi đi bộ bên hồ."
      },
      {
        "en": "She smiles whenever her family visits the park.",
        "vi": "Cô ấy mỉm cười mỗi khi gia đình đến công viên."
      }
    ]
  },
  {
    "title": "10. Help + object + bare infinitive",
    "formula": "S + help(s) + O + V",
    "desc": "Dùng help để diễn tả việc giúp ai thực hiện một hành động.",
    "example": "The park is my favorite place because it helps me relax.",
    "vi": "Công viên là nơi yêu thích của tôi vì nó giúp tôi thư giãn.",
    "extra": [
      {
        "en": "The quiet park helps me feel relaxed.",
        "vi": "Công viên yên tĩnh giúp tôi cảm thấy thư giãn."
      },
      {
        "en": "Fresh air helps children stay active outdoors.",
        "vi": "Không khí trong lành giúp trẻ em năng động ngoài trời."
      }
    ]
  }
];
