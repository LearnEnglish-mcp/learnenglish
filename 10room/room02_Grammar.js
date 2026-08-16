// ===== room02 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Be + prepositional phrase",
    "formula": "S + be + place phrase",
    "desc": "Dùng be với cụm chỉ nơi chốn để mô tả vị trí.",
    "example": "The dining room is between the kitchen and the living room.",
    "vi": "Phòng ăn nằm giữa nhà bếp và phòng khách.",
    "extra": [
      {
        "en": "The bathroom is next to the bedroom.",
        "vi": "Phòng tắm ở cạnh phòng ngủ."
      },
      {
        "en": "The study room is in a quiet area of the house.",
        "vi": "Phòng học nằm trong một khu vực yên tĩnh của ngôi nhà."
      }
    ]
  },
  {
    "title": "2. Have/has for room contents",
    "formula": "S + have/has + object",
    "desc": "Dùng have/has để liệt kê đồ vật có trong một căn phòng.",
    "example": "It has a large dining table, several chairs, a cupboard, and a light above the table.",
    "vi": "Phòng có một bàn ăn lớn, vài chiếc ghế, một chiếc tủ và một chiếc đèn phía trên bàn.",
    "extra": [
      {
        "en": "The bathroom has a shower, a sink, and a mirror.",
        "vi": "Phòng tắm có vòi sen, bồn rửa và gương."
      },
      {
        "en": "The study room has a desk, a bookshelf, and a computer.",
        "vi": "Phòng học có bàn, giá sách và máy tính."
      }
    ]
  },
  {
    "title": "3. Adverb also",
    "formula": "S + also + V",
    "desc": "Dùng also để thêm một thông tin hoặc hành động tương tự.",
    "example": "We also put some flowers in the middle of the table.",
    "vi": "Chúng tôi cũng đặt một ít hoa ở giữa bàn.",
    "extra": [
      {
        "en": "I also clean the mirror after using the bathroom.",
        "vi": "Tôi cũng lau gương sau khi sử dụng phòng tắm."
      },
      {
        "en": "My children also use the study room for homework.",
        "vi": "Các con tôi cũng dùng phòng học để làm bài tập."
      }
    ]
  },
  {
    "title": "4. Adverb of frequency usually",
    "formula": "S + usually + V",
    "desc": "Dùng usually để nói thói quen thường xuyên.",
    "example": "My family usually has breakfast and dinner together in this room.",
    "vi": "Gia đình tôi thường ăn sáng và ăn tối cùng nhau trong căn phòng này.",
    "extra": [
      {
        "en": "I usually clean the bathroom in the morning.",
        "vi": "Tôi thường dọn phòng tắm vào buổi sáng."
      },
      {
        "en": "We usually study in the quiet room after dinner.",
        "vi": "Chúng tôi thường học trong căn phòng yên tĩnh sau bữa tối."
      }
    ]
  },
  {
    "title": "5. While + -ing",
    "formula": "while + V-ing",
    "desc": "Dùng while + V-ing để nói hai hoạt động xảy ra cùng lúc.",
    "example": "We try not to use our phones while eating.",
    "vi": "Chúng tôi cố gắng không dùng điện thoại khi đang ăn.",
    "extra": [
      {
        "en": "We talk quietly while having dinner together.",
        "vi": "Chúng tôi nói chuyện nhỏ nhẹ khi cùng ăn tối."
      },
      {
        "en": "I listen to soft music while cleaning the room.",
        "vi": "Tôi nghe nhạc nhẹ khi dọn phòng."
      }
    ]
  },
  {
    "title": "6. Because-clause",
    "formula": "Main clause + because + clause",
    "desc": "Dùng because để giải thích lý do.",
    "example": "I enjoy spending time in the dining room because family meals are important.",
    "vi": "Tôi thích dành thời gian trong phòng ăn vì những bữa cơm gia đình rất quan trọng.",
    "extra": [
      {
        "en": "I like the study room because it is peaceful.",
        "vi": "Tôi thích phòng học vì nó yên bình."
      },
      {
        "en": "We keep the bathroom dry because safety is important.",
        "vi": "Chúng tôi giữ phòng tắm khô ráo vì an toàn rất quan trọng."
      }
    ]
  },
  {
    "title": "7. Make + object + adjective",
    "formula": "S + make(s) + O + adjective",
    "desc": "Dùng make + tân ngữ + tính từ để nói điều gì làm cho sự vật trở nên như thế nào.",
    "example": "A clean and comfortable dining room makes every meal more enjoyable and meaningful.",
    "vi": "Một phòng ăn sạch sẽ và thoải mái làm cho mỗi bữa ăn thú vị và ý nghĩa hơn.",
    "extra": [
      {
        "en": "A quiet room makes study time more comfortable.",
        "vi": "Một căn phòng yên tĩnh làm thời gian học thoải mái hơn."
      },
      {
        "en": "A dry floor makes the bathroom safer for everyone.",
        "vi": "Sàn khô làm phòng tắm an toàn hơn cho mọi người."
      }
    ]
  },
  {
    "title": "8. Not ... but ...",
    "formula": "S + be + not + adjective + but + adjective",
    "desc": "Dùng not ... but ... để đối lập hai đặc điểm.",
    "example": "It is not very large, but it is clean and useful.",
    "vi": "Nó không quá lớn nhưng sạch sẽ và hữu ích.",
    "extra": [
      {
        "en": "The study room is not large, but it is very quiet.",
        "vi": "Phòng học không lớn nhưng rất yên tĩnh."
      },
      {
        "en": "The bathroom is not new, but it is clean and tidy.",
        "vi": "Phòng tắm không mới nhưng sạch sẽ và gọn gàng."
      }
    ]
  },
  {
    "title": "9. After + -ing",
    "formula": "After + V-ing, S + V",
    "desc": "Dùng after + V-ing để nói một việc xảy ra sau một việc khác.",
    "example": "After using it, I always turn off the water and keep the floor dry.",
    "vi": "Sau khi sử dụng, tôi luôn khóa nước và giữ sàn khô ráo.",
    "extra": [
      {
        "en": "After studying, I organize my books and documents.",
        "vi": "Sau khi học, tôi sắp xếp sách và tài liệu."
      },
      {
        "en": "After dinner, we clean the dining table together.",
        "vi": "Sau bữa tối, chúng tôi cùng lau bàn ăn."
      }
    ]
  },
  {
    "title": "10. Can + bare infinitive",
    "formula": "S + can + V",
    "desc": "Dùng can để nói khả năng hoặc tác dụng có thể có.",
    "example": "A peaceful study room can help people work better and learn new things every day.",
    "vi": "Một phòng học yên bình có thể giúp mọi người làm việc tốt hơn và học những điều mới mỗi ngày.",
    "extra": [
      {
        "en": "A clean bathroom can help protect family health.",
        "vi": "Một phòng tắm sạch có thể giúp bảo vệ sức khỏe gia đình."
      },
      {
        "en": "A quiet room can help children focus on homework.",
        "vi": "Một căn phòng yên tĩnh có thể giúp trẻ tập trung làm bài tập."
      }
    ]
  }
];
