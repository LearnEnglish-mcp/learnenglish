// ===== room01 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Present simple with be",
    "formula": "S + be + complement",
    "desc": "Dùng hiện tại đơn với be để mô tả một nơi hoặc sự vật.",
    "example": "The living room is an important place in my house.",
    "vi": "Phòng khách là một nơi quan trọng trong ngôi nhà của tôi.",
    "extra": [
      {
        "en": "The bedroom is a quiet place for reading at night.",
        "vi": "Phòng ngủ là một nơi yên tĩnh để đọc sách vào ban đêm."
      },
      {
        "en": "The kitchen is clean and bright every morning.",
        "vi": "Nhà bếp sạch sẽ và sáng sủa mỗi sáng."
      }
    ]
  },
  {
    "title": "2. There is + singular noun",
    "formula": "There is + singular noun + place",
    "desc": "Dùng There is để nói có một đồ vật hoặc sự vật ở một nơi.",
    "example": "There is a sofa, a television, a coffee table, and some family pictures on the wall.",
    "vi": "Có một chiếc ghế sofa, một chiếc tivi, một bàn trà và một số ảnh gia đình trên tường.",
    "extra": [
      {
        "en": "There is a lamp beside the bed in my room.",
        "vi": "Có một chiếc đèn bên cạnh giường trong phòng tôi."
      },
      {
        "en": "There is a clean sink near the kitchen window.",
        "vi": "Có một bồn rửa sạch gần cửa sổ nhà bếp."
      }
    ]
  },
  {
    "title": "3. Adverbs of frequency",
    "formula": "S + adverb of frequency + V",
    "desc": "Dùng trạng từ tần suất để nói một hoạt động xảy ra thường xuyên đến mức nào.",
    "example": "My family often spends time together in this room.",
    "vi": "Gia đình tôi thường dành thời gian cùng nhau trong căn phòng này.",
    "extra": [
      {
        "en": "We usually eat dinner together in the dining room.",
        "vi": "Chúng tôi thường ăn tối cùng nhau trong phòng ăn."
      },
      {
        "en": "I always keep my bedroom clean and tidy.",
        "vi": "Tôi luôn giữ phòng ngủ sạch sẽ và gọn gàng."
      }
    ]
  },
  {
    "title": "4. Coordinated verbs",
    "formula": "S + V1, V2, V3, or V4",
    "desc": "Dùng các động từ song song để liệt kê nhiều hoạt động của cùng một chủ ngữ.",
    "example": "We watch television, talk about our day, listen to music, or welcome visitors.",
    "vi": "Chúng tôi xem tivi, trò chuyện về một ngày của mình, nghe nhạc hoặc đón khách.",
    "extra": [
      {
        "en": "We cook rice, prepare vegetables, and clean the table.",
        "vi": "Chúng tôi nấu cơm, chuẩn bị rau và lau bàn."
      },
      {
        "en": "The children read books, listen to music, and relax.",
        "vi": "Bọn trẻ đọc sách, nghe nhạc và thư giãn."
      }
    ]
  },
  {
    "title": "5. Because-clause",
    "formula": "Main clause + because + clause",
    "desc": "Dùng because để nêu lý do cho một cảm xúc hoặc hành động.",
    "example": "I like the living room because it is comfortable and friendly.",
    "vi": "Tôi thích phòng khách vì nó thoải mái và thân thiện.",
    "extra": [
      {
        "en": "I like my bedroom because it is quiet and private.",
        "vi": "Tôi thích phòng ngủ vì nó yên tĩnh và riêng tư."
      },
      {
        "en": "We enjoy the kitchen because cooking together is fun.",
        "vi": "Chúng tôi thích nhà bếp vì nấu ăn cùng nhau rất vui."
      }
    ]
  },
  {
    "title": "6. Passive adjective: be located",
    "formula": "S + be + located + place",
    "desc": "Dùng be located để nói vị trí của một căn phòng hoặc địa điểm.",
    "example": "It is located upstairs, next to the bathroom.",
    "vi": "Nó nằm ở tầng trên, cạnh phòng tắm.",
    "extra": [
      {
        "en": "The guest room is located near the bathroom.",
        "vi": "Phòng dành cho khách nằm gần phòng tắm."
      },
      {
        "en": "The study room is located in a quiet part of the house.",
        "vi": "Phòng học nằm ở một khu vực yên tĩnh trong nhà."
      }
    ]
  },
  {
    "title": "7. Before + -ing",
    "formula": "Before + V-ing, S + V",
    "desc": "Dùng before + V-ing để nói một việc xảy ra trước một việc khác.",
    "example": "Before going to sleep, I prepare my clothes for the next day and put my phone away.",
    "vi": "Trước khi đi ngủ, tôi chuẩn bị quần áo cho ngày hôm sau và cất điện thoại sang một bên.",
    "extra": [
      {
        "en": "Before cooking, we wash the vegetables carefully.",
        "vi": "Trước khi nấu, chúng tôi rửa rau cẩn thận."
      },
      {
        "en": "Before leaving the room, I turn off the light.",
        "vi": "Trước khi rời phòng, tôi tắt đèn."
      }
    ]
  },
  {
    "title": "8. Infinitive of purpose",
    "formula": "S + V + to + V",
    "desc": "Dùng to + động từ nguyên mẫu để diễn tả mục đích.",
    "example": "I also open the window to get some fresh air.",
    "vi": "Tôi cũng mở cửa sổ để đón không khí trong lành.",
    "extra": [
      {
        "en": "We use the kitchen to prepare family meals.",
        "vi": "Chúng tôi dùng nhà bếp để chuẩn bị các bữa ăn gia đình."
      },
      {
        "en": "I use my desk to study English in the evening.",
        "vi": "Tôi dùng bàn học để học tiếng Anh vào buổi tối."
      }
    ]
  },
  {
    "title": "9. Present simple with have/has",
    "formula": "S + have/has + object",
    "desc": "Dùng have/has để nói một căn phòng có những đồ vật nào.",
    "example": "It has a refrigerator, a cooker, a sink, some cupboards, and many cooking tools.",
    "vi": "Nó có tủ lạnh, bếp nấu, bồn rửa, một số tủ đựng đồ và nhiều dụng cụ nấu ăn.",
    "extra": [
      {
        "en": "My bedroom has a bed, a desk, and a lamp.",
        "vi": "Phòng ngủ của tôi có giường, bàn và đèn."
      },
      {
        "en": "The living room has a sofa and a coffee table.",
        "vi": "Phòng khách có ghế sofa và bàn trà."
      }
    ]
  },
  {
    "title": "10. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên hoặc điều nên làm.",
    "example": "We should always keep the kitchen clean and safe after preparing food.",
    "vi": "Chúng ta nên luôn giữ nhà bếp sạch sẽ và an toàn sau khi chuẩn bị thức ăn.",
    "extra": [
      {
        "en": "We should clean the table after every family meal.",
        "vi": "Chúng ta nên lau bàn sau mỗi bữa ăn gia đình."
      },
      {
        "en": "Children should use kitchen tools carefully and safely.",
        "vi": "Trẻ em nên sử dụng dụng cụ nhà bếp cẩn thận và an toàn."
      }
    ]
  }
];
