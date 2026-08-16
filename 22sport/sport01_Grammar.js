const newGrammarData = [
  {
    "title": "1. Because-clause",
    "formula": "Main clause + because + clause",
    "desc": "Dùng because để nêu nguyên nhân.",
    "example": "Many people love sports because they are fun and healthy.",
    "vi": "Nhiều người yêu thích thể thao vì chúng vui và tốt cho sức khỏe.",
    "extra": [
      {
        "en": "People enjoy sports because they are healthy.",
        "vi": "Mọi người thích thể thao vì chúng tốt cho sức khỏe."
      },
      {
        "en": "Students exercise because they want to stay active.",
        "vi": "Học sinh tập thể dục vì muốn luôn năng động."
      }
    ]
  },
  {
    "title": "2. While for contrast",
    "formula": "Clause + while + clause",
    "desc": "Dùng while để đối chiếu hai hoạt động hoặc nhóm người.",
    "example": "Some play football, while others swim or ride bikes.",
    "vi": "Một số người chơi bóng đá, trong khi những người khác bơi hoặc đi xe đạp.",
    "extra": [
      {
        "en": "Some students play football while others swim.",
        "vi": "Một số học sinh chơi bóng đá trong khi những em khác bơi."
      },
      {
        "en": "Children play after school while adults exercise early.",
        "vi": "Trẻ em chơi sau giờ học trong khi người lớn tập sớm."
      }
    ]
  },
  {
    "title": "3. Present continuous",
    "formula": "S + be + V-ing",
    "desc": "Dùng hiện tại tiếp diễn để mô tả hành động đang diễn ra.",
    "example": "Some students are playing basketball now.",
    "vi": "Một số học sinh đang chơi bóng rổ lúc này.",
    "extra": [
      {
        "en": "Students are playing basketball on the court now.",
        "vi": "Học sinh đang chơi bóng rổ trên sân lúc này."
      },
      {
        "en": "Our team is training on the school field now.",
        "vi": "Đội chúng tôi đang tập trên sân trường lúc này."
      }
    ]
  },
  {
    "title": "4. Past simple",
    "formula": "S + V2 + object",
    "desc": "Dùng quá khứ đơn để kể sự kiện đã xảy ra.",
    "example": "Last weekend, my family joined a sports festival.",
    "vi": "Cuối tuần trước, gia đình tôi tham gia một lễ hội thể thao.",
    "extra": [
      {
        "en": "My family joined a sports festival last weekend.",
        "vi": "Gia đình tôi tham gia lễ hội thể thao cuối tuần trước."
      },
      {
        "en": "Our team won a match last Saturday.",
        "vi": "Đội chúng tôi thắng một trận vào thứ Bảy tuần trước."
      }
    ]
  },
  {
    "title": "5. Present perfect with already",
    "formula": "S + have/has already + V3",
    "desc": "Dùng hiện tại hoàn thành với already để nói kết quả đã có.",
    "example": "I have already learned that sports help people become stronger and happier.",
    "vi": "Tôi đã nhận ra rằng thể thao giúp con người trở nên khỏe mạnh và vui vẻ hơn.",
    "extra": [
      {
        "en": "I have already learned useful sports rules.",
        "vi": "Tôi đã học những quy tắc thể thao hữu ích."
      },
      {
        "en": "Our coach has already praised our teamwork.",
        "vi": "Huấn luyện viên đã khen tinh thần đồng đội của chúng tôi."
      }
    ]
  },
  {
    "title": "6. Be going to + infinitive",
    "formula": "S + be going to + V",
    "desc": "Dùng be going to để nói kế hoạch tương lai.",
    "example": "Next month, our class is going to have another sports day.",
    "vi": "Tháng tới, lớp chúng tôi sẽ có một ngày hội thể thao khác.",
    "extra": [
      {
        "en": "Our class is going to have a sports day.",
        "vi": "Lớp chúng tôi sẽ có một ngày hội thể thao."
      },
      {
        "en": "I am going to join a swimming club.",
        "vi": "Tôi sẽ tham gia một câu lạc bộ bơi."
      }
    ]
  },
  {
    "title": "7. Future with will",
    "formula": "S + will + V",
    "desc": "Dùng will để nói quyết định hoặc dự đoán tương lai.",
    "example": "I will join the football team again.",
    "vi": "Tôi sẽ lại tham gia đội bóng đá.",
    "extra": [
      {
        "en": "I will join the football team again.",
        "vi": "Tôi sẽ lại tham gia đội bóng đá."
      },
      {
        "en": "Our team will play better next weekend.",
        "vi": "Đội chúng tôi sẽ chơi tốt hơn vào cuối tuần tới."
      }
    ]
  },
  {
    "title": "8. First conditional",
    "formula": "If + present simple, S + will + V",
    "desc": "Dùng câu điều kiện loại 1 để nói kết quả có thể xảy ra.",
    "example": "If the weather is nice, we will play outside.",
    "vi": "Nếu thời tiết đẹp, chúng tôi sẽ chơi bên ngoài.",
    "extra": [
      {
        "en": "If the weather is nice, we will play outside.",
        "vi": "Nếu thời tiết đẹp, chúng tôi sẽ chơi ngoài trời."
      },
      {
        "en": "If we keep practicing, we will become stronger.",
        "vi": "Nếu tiếp tục luyện tập, chúng tôi sẽ mạnh hơn."
      }
    ]
  },
  {
    "title": "9. One of the most + adjective + plural noun",
    "formula": "S + be + one of the most + adjective + plural noun",
    "desc": "Dùng one of the most để nói một trong những đối tượng nổi bật nhất.",
    "example": "Football is one of the most popular sports in the world.",
    "vi": "Bóng đá là một trong những môn thể thao phổ biến nhất trên thế giới.",
    "extra": [
      {
        "en": "Football is one of the most popular sports.",
        "vi": "Bóng đá là một trong những môn thể thao phổ biến nhất."
      },
      {
        "en": "Swimming is one of the healthiest activities.",
        "vi": "Bơi lội là một trong những hoạt động lành mạnh nhất."
      }
    ]
  },
  {
    "title": "10. Could not + bare infinitive",
    "formula": "S + could not + V",
    "desc": "Dùng could not để nói không có khả năng trong quá khứ.",
    "example": "Last year, I could not swim well, but I practiced every weekend.",
    "vi": "Năm ngoái, tôi không thể bơi tốt, nhưng tôi đã luyện tập mỗi cuối tuần.",
    "extra": [
      {
        "en": "Last year, I could not swim confidently.",
        "vi": "Năm ngoái, tôi không thể bơi tự tin."
      },
      {
        "en": "He could not play football before regular practice.",
        "vi": "Trước khi luyện tập đều đặn, bạn ấy không thể chơi bóng đá."
      }
    ]
  }
];
