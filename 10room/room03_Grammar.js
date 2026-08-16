// ===== room03 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Be located",
    "formula": "S + be + located + place",
    "desc": "Dùng be located để mô tả vị trí.",
    "example": "The guest room is located on the ground floor, near the bathroom.",
    "vi": "Phòng dành cho khách nằm ở tầng trệt, gần phòng tắm.",
    "extra": [
      {
        "en": "The laundry room is located near the kitchen.",
        "vi": "Phòng giặt nằm gần nhà bếp."
      },
      {
        "en": "The garage is located beside the house.",
        "vi": "Ga-ra nằm bên cạnh ngôi nhà."
      }
    ]
  },
  {
    "title": "2. There are + plural noun",
    "formula": "There are + plural noun + place",
    "desc": "Dùng There are để nói có nhiều đồ vật ở một nơi.",
    "example": "There are also clean blankets, pillows, and towels for visitors.",
    "vi": "Ngoài ra còn có chăn, gối và khăn sạch dành cho khách.",
    "extra": [
      {
        "en": "There are several boxes in the storage room.",
        "vi": "Có vài chiếc hộp trong phòng chứa đồ."
      },
      {
        "en": "There are two motorbikes inside the garage.",
        "vi": "Có hai xe máy trong ga-ra."
      }
    ]
  },
  {
    "title": "3. When-clause",
    "formula": "When + clause, main clause",
    "desc": "Dùng when để nói một tình huống và điều xảy ra trong tình huống đó.",
    "example": "When relatives or friends stay at our house, they sleep in this room.",
    "vi": "Khi người thân hoặc bạn bè ở lại nhà chúng tôi, họ ngủ trong căn phòng này.",
    "extra": [
      {
        "en": "When guests arrive, we show them the clean guest room.",
        "vi": "Khi khách đến, chúng tôi chỉ cho họ phòng dành cho khách sạch sẽ."
      },
      {
        "en": "When the clothes are dry, we organize them carefully.",
        "vi": "Khi quần áo khô, chúng tôi sắp xếp chúng cẩn thận."
      }
    ]
  },
  {
    "title": "4. Before-clause",
    "formula": "Before + clause, main clause",
    "desc": "Dùng before để nói một hành động xảy ra trước hành động khác.",
    "example": "Before they arrive, my family cleans the room, changes the bedsheets, and prepares some drinking water.",
    "vi": "Trước khi họ đến, gia đình tôi dọn phòng, thay ga giường và chuẩn bị một ít nước uống.",
    "extra": [
      {
        "en": "Before visitors arrive, we put clean towels in the room.",
        "vi": "Trước khi khách đến, chúng tôi đặt khăn sạch trong phòng."
      },
      {
        "en": "Before washing clothes, we separate white and colored items.",
        "vi": "Trước khi giặt quần áo, chúng tôi tách đồ trắng và đồ màu."
      }
    ]
  },
  {
    "title": "5. Want + object + to-infinitive",
    "formula": "S + want + O + to + V",
    "desc": "Dùng want + tân ngữ + to-infinitive để nói mong muốn ai đó làm hoặc cảm thấy điều gì.",
    "example": "We want our guests to feel welcome.",
    "vi": "Chúng tôi muốn khách cảm thấy được chào đón.",
    "extra": [
      {
        "en": "We want visitors to feel comfortable in our home.",
        "vi": "Chúng tôi muốn khách cảm thấy thoải mái trong nhà."
      },
      {
        "en": "Parents want children to stay away from cleaning products.",
        "vi": "Cha mẹ muốn trẻ tránh xa các sản phẩm vệ sinh."
      }
    ]
  },
  {
    "title": "6. Present simple with contain",
    "formula": "S + contain(s) + object",
    "desc": "Dùng contain để nói một nơi hoặc vật chứa những gì.",
    "example": "It contains a washing machine, some baskets, detergent, clothes hangers, and cleaning tools.",
    "vi": "Phòng có máy giặt, vài chiếc giỏ, chất giặt tẩy, móc quần áo và dụng cụ vệ sinh.",
    "extra": [
      {
        "en": "The storage room contains boxes and old books.",
        "vi": "Phòng chứa đồ có các hộp và sách cũ."
      },
      {
        "en": "The garage contains tools and cleaning equipment.",
        "vi": "Ga-ra có dụng cụ và thiết bị vệ sinh."
      }
    ]
  },
  {
    "title": "7. Before + -ing",
    "formula": "Before + V-ing, S + V",
    "desc": "Dùng before + V-ing để nói việc cần làm trước một hành động khác.",
    "example": "We separate white clothes from colored clothes before washing them.",
    "vi": "Chúng tôi tách quần áo trắng khỏi quần áo màu trước khi giặt.",
    "extra": [
      {
        "en": "We check pockets before washing clothes in the machine.",
        "vi": "Chúng tôi kiểm tra túi trước khi giặt quần áo bằng máy."
      },
      {
        "en": "We organize tools before putting them into storage.",
        "vi": "Chúng tôi sắp xếp dụng cụ trước khi cất vào kho."
      }
    ]
  },
  {
    "title": "8. Should + bare infinitive",
    "formula": "S + should + V",
    "desc": "Dùng should để đưa ra lời khuyên về an toàn và tổ chức.",
    "example": "We should store cleaning products safely and keep them away from children.",
    "vi": "Chúng ta nên cất các sản phẩm vệ sinh an toàn và để chúng xa trẻ em.",
    "extra": [
      {
        "en": "We should keep the garage door locked at night.",
        "vi": "Chúng ta nên giữ cửa ga-ra được khóa vào ban đêm."
      },
      {
        "en": "We should remove broken objects from the storage room.",
        "vi": "Chúng ta nên bỏ các đồ vật bị hỏng khỏi phòng chứa đồ."
      }
    ]
  },
  {
    "title": "9. Relative clause with where",
    "formula": "noun + where + clause",
    "desc": "Dùng where để tạo mệnh đề quan hệ chỉ nơi chốn.",
    "example": "It is a small room where my family keeps things that we do not use every day.",
    "vi": "Đây là một căn phòng nhỏ nơi gia đình tôi cất những thứ mà chúng tôi không dùng hằng ngày.",
    "extra": [
      {
        "en": "The garage is a place where we keep our vehicles.",
        "vi": "Ga-ra là nơi chúng tôi để các phương tiện."
      },
      {
        "en": "The laundry room is where we wash and organize clothes.",
        "vi": "Phòng giặt là nơi chúng tôi giặt và sắp xếp quần áo."
      }
    ]
  },
  {
    "title": "10. Protect + object + from",
    "formula": "S + protect(s) + O + from + noun",
    "desc": "Dùng protect ... from ... để nói bảo vệ ai hoặc vật khỏi một nguy cơ.",
    "example": "The garage protects our vehicles from rain, sunlight, and theft.",
    "vi": "Ga-ra bảo vệ các phương tiện của chúng tôi khỏi mưa, ánh nắng và trộm cắp.",
    "extra": [
      {
        "en": "A locked door protects the garage from theft.",
        "vi": "Một cánh cửa được khóa bảo vệ ga-ra khỏi trộm cắp."
      },
      {
        "en": "A roof protects vehicles from rain and strong sunlight.",
        "vi": "Mái che bảo vệ phương tiện khỏi mưa và ánh nắng mạnh."
      }
    ]
  }
];
