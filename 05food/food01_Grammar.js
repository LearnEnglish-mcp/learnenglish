// ===== food01 GRAMMAR =====

const newGrammarData = [
  {
    "title": "1. Present simple for facts",
    "formula": "S + V(s/es) + complement",
    "desc": "Dùng hiện tại đơn để nêu sự thật hoặc đặc điểm chung.",
    "example": "Street food is popular in many countries around the world.",
    "vi": "Đồ ăn đường phố phổ biến ở nhiều quốc gia trên thế giới.",
    "extra": [
      {
        "en": "Street food is common in busy city areas.",
        "vi": "Đồ ăn đường phố phổ biến ở các khu vực thành phố đông đúc."
      },
      {
        "en": "Fresh meals attract many local customers.",
        "vi": "Những bữa ăn tươi ngon thu hút nhiều khách hàng địa phương."
      }
    ]
  },
  {
    "title": "2. Enjoy + V-ing",
    "formula": "S + enjoy(s) + V-ing + O",
    "desc": "Dùng enjoy với V-ing để nói thích làm một hoạt động.",
    "example": "People enjoy eating quick, tasty meals from small food stalls or carts.",
    "vi": "Mọi người thích ăn những bữa ăn nhanh và ngon từ các quầy hoặc xe bán đồ ăn nhỏ.",
    "extra": [
      {
        "en": "Travelers enjoy trying local dishes at markets.",
        "vi": "Du khách thích thử các món địa phương tại chợ."
      },
      {
        "en": "Families enjoy sharing street food together.",
        "vi": "Các gia đình thích chia sẻ đồ ăn đường phố cùng nhau."
      }
    ]
  },
  {
    "title": "3. Include + noun",
    "formula": "S + include(s) + noun(s)",
    "desc": "Dùng include để liệt kê những thứ thuộc một nhóm.",
    "example": "Popular street foods include sandwiches, noodles, grilled meat, fried rice, and fresh fruit.",
    "vi": "Những món ăn đường phố phổ biến gồm bánh mì kẹp, mì, thịt nướng, cơm chiên và trái cây tươi.",
    "extra": [
      {
        "en": "The menu includes noodles and grilled chicken.",
        "vi": "Thực đơn gồm mì và gà nướng."
      },
      {
        "en": "Street snacks include fruit and small desserts.",
        "vi": "Đồ ăn nhẹ đường phố gồm trái cây và các món tráng miệng nhỏ."
      }
    ]
  },
  {
    "title": "4. Can + bare infinitive",
    "formula": "S + can + V",
    "desc": "Dùng can với động từ nguyên mẫu để nói về khả năng hoặc lựa chọn.",
    "example": "They can eat while walking or sitting nearby.",
    "vi": "Họ có thể ăn trong khi đi bộ hoặc ngồi gần đó.",
    "extra": [
      {
        "en": "Customers can pay with a mobile app.",
        "vi": "Khách hàng có thể thanh toán bằng ứng dụng di động."
      },
      {
        "en": "Visitors can try several dishes at one market.",
        "vi": "Du khách có thể thử vài món tại một khu chợ."
      }
    ]
  },
  {
    "title": "5. Let + object + bare infinitive",
    "formula": "S + let(s) + O + V",
    "desc": "Dùng let với tân ngữ và động từ nguyên mẫu để diễn tả cho phép ai làm gì.",
    "example": "It brings people together and lets visitors enjoy traditional flavors.",
    "vi": "Nó gắn kết mọi người và cho phép du khách thưởng thức những hương vị truyền thống.",
    "extra": [
      {
        "en": "Food markets let visitors taste local dishes.",
        "vi": "Chợ ẩm thực cho phép du khách nếm các món địa phương."
      },
      {
        "en": "Small stalls let customers order meals quickly.",
        "vi": "Các quầy nhỏ cho phép khách hàng gọi món nhanh chóng."
      }
    ]
  },
  {
    "title": "6. When + clause",
    "formula": "S + V + when + S + V",
    "desc": "Dùng when để chỉ thời điểm hoặc tình huống một hành động xảy ra.",
    "example": "People visit food stalls when they feel hungry or want a quick meal.",
    "vi": "Mọi người ghé các quầy đồ ăn khi họ cảm thấy đói hoặc muốn một bữa ăn nhanh.",
    "extra": [
      {
        "en": "Customers order food when they feel hungry.",
        "vi": "Khách hàng gọi món khi họ cảm thấy đói."
      },
      {
        "en": "Sellers become busy when many visitors arrive.",
        "vi": "Người bán trở nên bận rộn khi nhiều du khách đến."
      }
    ]
  },
  {
    "title": "7. Before + V-ing",
    "formula": "S + V + before + V-ing",
    "desc": "Dùng before + V-ing để nói một hành động xảy ra trước một hành động khác.",
    "example": "Customers usually wait only a few minutes before receiving their meals.",
    "vi": "Khách hàng thường chỉ chờ vài phút trước khi nhận bữa ăn của mình.",
    "extra": [
      {
        "en": "People check the menu before ordering food.",
        "vi": "Mọi người xem thực đơn trước khi gọi món."
      },
      {
        "en": "Sellers wash their hands before preparing meals.",
        "vi": "Người bán rửa tay trước khi chuẩn bị món ăn."
      }
    ]
  },
  {
    "title": "8. Without + V-ing",
    "formula": "S + V + without + V-ing",
    "desc": "Dùng without + V-ing để diễn tả làm việc gì mà không thực hiện hành động khác.",
    "example": "It is a good choice for busy people who want tasty food without spending too much money.",
    "vi": "Đây là lựa chọn tốt cho những người bận rộn muốn món ăn ngon mà không phải tiêu quá nhiều tiền.",
    "extra": [
      {
        "en": "Students can eat well without spending much money.",
        "vi": "Học sinh có thể ăn ngon mà không tiêu nhiều tiền."
      },
      {
        "en": "Customers leave without waiting for a long time.",
        "vi": "Khách hàng rời đi mà không phải chờ lâu."
      }
    ]
  },
  {
    "title": "9. Because + clause",
    "formula": "S + V + because + S + V",
    "desc": "Dùng because để đưa ra lý do.",
    "example": "I like eating it because it has a wonderful smell and rich flavor.",
    "vi": "Tôi thích ăn món này vì nó có mùi thơm tuyệt vời và hương vị đậm đà.",
    "extra": [
      {
        "en": "I choose grilled food because it tastes delicious.",
        "vi": "Tôi chọn món nướng vì nó có vị ngon."
      },
      {
        "en": "We visit this stall because the seller is friendly.",
        "vi": "Chúng tôi ghé quầy này vì người bán thân thiện."
      }
    ]
  },
  {
    "title": "10. Adverb of frequency",
    "formula": "S + usually/always/never + V",
    "desc": "Dùng trạng từ tần suất để nói mức độ thường xuyên của một hành động.",
    "example": "I usually buy this meal from a friendly street food seller near my school.",
    "vi": "Tôi thường mua bữa ăn này từ một người bán đồ ăn đường phố thân thiện gần trường.",
    "extra": [
      {
        "en": "We usually visit the market after school.",
        "vi": "Chúng tôi thường ghé chợ sau giờ học."
      },
      {
        "en": "The seller always prepares fresh meals carefully.",
        "vi": "Người bán luôn chuẩn bị các bữa ăn tươi cẩn thận."
      }
    ]
  }
];
