const newGrammarData = [
  {
    "title": "1. Past participle phrase",
    "formula": "Noun + V3 phrase",
    "desc": "Dùng cụm phân từ quá khứ để bổ nghĩa cho danh từ.",
    "example": "Banh cuon is a soft Vietnamese dish made from thin rice sheets.",
    "vi": "Bánh cuốn là một món ăn Việt Nam mềm được làm từ những lá bánh gạo mỏng.",
    "extra": [
      {
        "en": "This is a dish made from thin rice sheets.",
        "vi": "Đây là món ăn làm từ những lá bánh gạo mỏng."
      },
      {
        "en": "Banh bot loc is a cake made from tapioca flour.",
        "vi": "Bánh bột lọc là loại bánh làm từ bột năng."
      }
    ]
  },
  {
    "title": "2. Passive voice with be eaten",
    "formula": "S + be + V3 + time",
    "desc": "Dùng bị động để nói món ăn thường được dùng vào lúc nào.",
    "example": "It is commonly eaten for breakfast, but many people also enjoy it at lunch or dinner.",
    "vi": "Món này thường được ăn vào bữa sáng, nhưng nhiều người cũng thưởng thức vào bữa trưa hoặc bữa tối.",
    "extra": [
      {
        "en": "Banh cuon is often eaten for breakfast.",
        "vi": "Bánh cuốn thường được ăn vào bữa sáng."
      },
      {
        "en": "Banh beo is served as a light snack.",
        "vi": "Bánh bèo được phục vụ như một món ăn nhẹ."
      }
    ]
  },
  {
    "title": "3. To-infinitive of purpose",
    "formula": "To + V + O, S + V + O",
    "desc": "Dùng to-infinitive đầu câu để nói mục đích.",
    "example": "To make the sheets, cooks spread rice batter over a hot cloth.",
    "vi": "Để làm lá bánh, người nấu tráng bột gạo trên một tấm vải nóng.",
    "extra": [
      {
        "en": "To make the filling, cooks prepare pork and mushrooms.",
        "vi": "Để làm nhân, người nấu chuẩn bị thịt lợn và nấm."
      },
      {
        "en": "To serve the rolls, cooks add fresh herbs.",
        "vi": "Để phục vụ bánh cuốn, người nấu thêm rau thơm tươi."
      }
    ]
  },
  {
    "title": "4. Present simple with become",
    "formula": "S + become(s) + adjective",
    "desc": "Dùng become + tính từ để mô tả sự thay đổi trạng thái.",
    "example": "It becomes smooth, soft, and slightly clear.",
    "vi": "Nó trở nên mịn, mềm và hơi trong.",
    "extra": [
      {
        "en": "The steamed layer becomes soft and smooth.",
        "vi": "Lớp bánh hấp trở nên mềm và mịn."
      },
      {
        "en": "The cooked dough becomes clear and chewy.",
        "vi": "Bột đã nấu trở nên trong và dai."
      }
    ]
  },
  {
    "title": "5. Present simple with contain",
    "formula": "S + contain(s) + O",
    "desc": "Dùng contain để mô tả thành phần bên trong.",
    "example": "The filling often contains minced pork, mushrooms, and onions.",
    "vi": "Nhân thường gồm thịt lợn băm, nấm và hành.",
    "extra": [
      {
        "en": "The filling contains pork, shrimp, and onions.",
        "vi": "Phần nhân có thịt lợn, tôm và hành."
      },
      {
        "en": "This topping contains dried shrimp and onion oil.",
        "vi": "Phần topping này có tôm khô và dầu hành."
      }
    ]
  },
  {
    "title": "6. So for result",
    "formula": "Clause, so + clause",
    "desc": "Dùng so để nối nguyên nhân với kết quả.",
    "example": "It is not too heavy, so it is suitable for all ages.",
    "vi": "Món này không quá nặng bụng nên phù hợp với mọi lứa tuổi.",
    "extra": [
      {
        "en": "The dish is light, so people eat it easily.",
        "vi": "Món ăn nhẹ nên mọi người dễ ăn."
      },
      {
        "en": "The rolls are soft, so they suit many ages.",
        "vi": "Các cuốn bánh mềm nên phù hợp nhiều lứa tuổi."
      }
    ]
  },
  {
    "title": "7. After + V-ing",
    "formula": "After + V-ing, S + V + O",
    "desc": "Dùng after + V-ing để nói trình tự chế biến.",
    "example": "After steaming, cooks add dried shrimp, green onion oil, crispy bread, or pork skin on top.",
    "vi": "Sau khi hấp, người nấu thêm tôm khô, dầu hành xanh, bánh mì giòn hoặc da lợn lên trên.",
    "extra": [
      {
        "en": "After steaming, cooks add the toppings.",
        "vi": "Sau khi hấp, người nấu thêm topping."
      },
      {
        "en": "After cooking, people serve the cake with sauce.",
        "vi": "Sau khi nấu, mọi người phục vụ bánh với nước mắm."
      }
    ]
  },
  {
    "title": "8. While + V-ing",
    "formula": "S + V + O + while + V-ing",
    "desc": "Dùng while + V-ing để nói hành động đang diễn ra đồng thời.",
    "example": "Visitors often enjoy it as a snack while exploring markets and traditional food streets.",
    "vi": "Du khách thường thưởng thức bánh như một món ăn nhẹ khi khám phá chợ và những con phố ẩm thực truyền thống.",
    "extra": [
      {
        "en": "Visitors eat local snacks while exploring markets.",
        "vi": "Du khách ăn món địa phương khi khám phá chợ."
      },
      {
        "en": "Families talk while enjoying traditional cakes together.",
        "vi": "Các gia đình trò chuyện trong khi cùng thưởng thức bánh truyền thống."
      }
    ]
  },
  {
    "title": "9. While for contrast",
    "formula": "Clause, while + clause",
    "desc": "Dùng while để đối chiếu hai phần hoặc hai tình huống.",
    "example": "The outside is soft and chewy, while the inside is salty and rich.",
    "vi": "Bên ngoài mềm và dai, trong khi phần bên trong mặn và đậm đà.",
    "extra": [
      {
        "en": "The outside is chewy, while the filling is rich.",
        "vi": "Bên ngoài dai, trong khi phần nhân đậm đà."
      },
      {
        "en": "Some cakes are steamed, while others are boiled.",
        "vi": "Một số bánh được hấp, trong khi những loại khác được luộc."
      }
    ]
  },
  {
    "title": "10. Without + noun",
    "formula": "S + be + V3 + without + noun",
    "desc": "Dùng without + danh từ để nói không có thứ gì.",
    "example": "Some cakes are wrapped in banana leaves before steaming, while others are boiled without leaves.",
    "vi": "Một số bánh được gói trong lá chuối trước khi hấp, trong khi những loại khác được luộc không có lá.",
    "extra": [
      {
        "en": "Some cakes are cooked without banana leaves.",
        "vi": "Một số bánh được nấu không có lá chuối."
      },
      {
        "en": "The filling can be served without chili.",
        "vi": "Phần nhân có thể được phục vụ không có ớt."
      }
    ]
  }
];
