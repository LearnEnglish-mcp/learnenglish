const newGrammarData = [
  {
    "title": "1. Present simple with be",
    "formula": "S + be + noun phrase",
    "desc": "Dùng hiện tại đơn với be để định nghĩa hoặc mô tả cơ quan.",
    "example": "The brain is an important organ inside the head.",
    "vi": "Não là một cơ quan quan trọng bên trong đầu.",
    "extra": [
      {
        "en": "The heart is a strong organ in the chest.",
        "vi": "Tim là một cơ quan khỏe trong lồng ngực."
      },
      {
        "en": "The lung is an organ used for breathing.",
        "vi": "Phổi là một cơ quan dùng để hô hấp."
      }
    ]
  },
  {
    "title": "2. Present simple third person",
    "formula": "S + V-s/es + O",
    "desc": "Dùng hiện tại đơn với ngôi thứ ba số ít để nói chức năng.",
    "example": "The skull protects it from many injuries.",
    "vi": "Hộp sọ bảo vệ não khỏi nhiều chấn thương.",
    "extra": [
      {
        "en": "The heart pumps blood around the body.",
        "vi": "Tim bơm máu đi khắp cơ thể."
      },
      {
        "en": "The liver removes harmful substances from blood.",
        "vi": "Gan loại bỏ các chất có hại khỏi máu."
      }
    ]
  },
  {
    "title": "3. Help + object + bare infinitive",
    "formula": "S + help(s) + O + V",
    "desc": "Dùng help + tân ngữ + động từ nguyên mẫu để nói tác dụng.",
    "example": "It helps us think, learn, remember, speak, and make decisions.",
    "vi": "Não giúp chúng ta suy nghĩ, học, ghi nhớ, nói và đưa ra quyết định.",
    "extra": [
      {
        "en": "Exercise helps people keep the heart strong.",
        "vi": "Tập thể dục giúp mọi người giữ tim khỏe."
      },
      {
        "en": "The lungs help us breathe every moment.",
        "vi": "Phổi giúp chúng ta thở trong từng khoảnh khắc."
      }
    ]
  },
  {
    "title": "4. Coordinated verbs",
    "formula": "S + V + O, V + O, and V + O",
    "desc": "Dùng nhiều động từ song song để liệt kê chức năng.",
    "example": "It also controls movement, breathing, feelings, and the five senses.",
    "vi": "Não cũng kiểm soát vận động, hô hấp, cảm xúc và năm giác quan.",
    "extra": [
      {
        "en": "The brain controls movement and remembers information.",
        "vi": "Não kiểm soát vận động và ghi nhớ thông tin."
      },
      {
        "en": "The heart pumps blood and carries oxygen.",
        "vi": "Tim bơm máu và vận chuyển oxy."
      }
    ]
  },
  {
    "title": "5. But for contrast",
    "formula": "Clause + but + clause",
    "desc": "Dùng but để nối hai ý tương phản.",
    "example": "Different parts of the brain do different jobs, but they work together.",
    "vi": "Các phần khác nhau của não đảm nhiệm những công việc khác nhau, nhưng chúng phối hợp với nhau.",
    "extra": [
      {
        "en": "The organs have different jobs but work together.",
        "vi": "Các cơ quan có nhiệm vụ khác nhau nhưng phối hợp với nhau."
      },
      {
        "en": "The lungs are soft but very important.",
        "vi": "Phổi mềm nhưng rất quan trọng."
      }
    ]
  },
  {
    "title": "6. To-infinitive of purpose",
    "formula": "To + V, S + should + V",
    "desc": "Dùng to-infinitive ở đầu câu để nói mục đích.",
    "example": "To keep the brain healthy, people should sleep enough, eat good food, and exercise often.",
    "vi": "Để giữ não khỏe mạnh, mọi người nên ngủ đủ, ăn thực phẩm tốt và tập thể dục thường xuyên.",
    "extra": [
      {
        "en": "To protect the heart, people should exercise regularly.",
        "vi": "Để bảo vệ tim, mọi người nên tập thể dục đều đặn."
      },
      {
        "en": "To keep the lungs healthy, avoid polluted air.",
        "vi": "Để giữ phổi khỏe mạnh, hãy tránh không khí ô nhiễm."
      }
    ]
  },
  {
    "title": "7. Modal can",
    "formula": "S + can + V + O",
    "desc": "Dùng can để diễn tả khả năng hoặc tác dụng.",
    "example": "Wearing a helmet during sports can protect the brain from serious injury.",
    "vi": "Đội mũ bảo hiểm khi chơi thể thao có thể bảo vệ não khỏi chấn thương nghiêm trọng.",
    "extra": [
      {
        "en": "Regular exercise can make breathing easier.",
        "vi": "Tập thể dục đều đặn có thể giúp hô hấp dễ hơn."
      },
      {
        "en": "A helmet can protect the brain during sports.",
        "vi": "Mũ bảo hiểm có thể bảo vệ não khi chơi thể thao."
      }
    ]
  },
  {
    "title": "8. When-clause",
    "formula": "Main clause + when + clause",
    "desc": "Dùng when để nói điều xảy ra trong một tình huống cụ thể.",
    "example": "The heart beats faster when we run, exercise, or feel excited.",
    "vi": "Tim đập nhanh hơn khi chúng ta chạy, tập thể dục hoặc cảm thấy phấn khích.",
    "extra": [
      {
        "en": "The heart beats faster when people exercise.",
        "vi": "Tim đập nhanh hơn khi mọi người tập thể dục."
      },
      {
        "en": "Breathing becomes deeper when people run.",
        "vi": "Hơi thở trở nên sâu hơn khi mọi người chạy."
      }
    ]
  },
  {
    "title": "9. Comparative adjective",
    "formula": "S + be + comparative + than + noun",
    "desc": "Dùng tính từ so sánh hơn để so sánh hai đối tượng.",
    "example": "The right lung is a little larger than the left lung.",
    "vi": "Phổi phải lớn hơn phổi trái một chút.",
    "extra": [
      {
        "en": "The right lung is larger than the left.",
        "vi": "Phổi phải lớn hơn phổi trái."
      },
      {
        "en": "Healthy lungs make breathing easier than polluted lungs.",
        "vi": "Phổi khỏe giúp hô hấp dễ hơn phổi bị ô nhiễm."
      }
    ]
  },
  {
    "title": "10. May + bare infinitive",
    "formula": "S + may + V + O",
    "desc": "Dùng may để nói khả năng có thể xảy ra.",
    "example": "Wearing a mask in dirty places may also protect the lungs from harmful particles.",
    "vi": "Đeo khẩu trang ở những nơi bẩn có thể giúp bảo vệ phổi khỏi các hạt có hại.",
    "extra": [
      {
        "en": "A mask may protect the lungs from dust.",
        "vi": "Khẩu trang có thể bảo vệ phổi khỏi bụi."
      },
      {
        "en": "Fresh air may help people feel relaxed.",
        "vi": "Không khí trong lành có thể giúp mọi người thư giãn."
      }
    ]
  }
];
