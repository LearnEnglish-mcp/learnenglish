// ============================================================
// DỮ LIỆU TỪ VỰNG - 50 TỪ (DỰA TRÊN DANH SÁCH ĐÃ CHO)
// ============================================================
const vocabData = [
    { id: 1, word: "brain", type: "n.", phonetic: "/breɪn/", tip: "brây-n", meaning: "Não", cat: "n",
        ex1: "The brain controls everything you do.", ex1_vi: "Bộ não điều khiển mọi thứ bạn làm.",
        ex2: "Your brain is very powerful.", ex2_vi: "Bộ não của bạn rất mạnh mẽ.",
        ex3: "Scientists study the brain.", ex3_vi: "Các nhà khoa học nghiên cứu bộ não." },
    { id: 2, word: "head", type: "n.", phonetic: "/hed/", tip: "hét", meaning: "Đầu", cat: "n",
        ex1: "Your brain is inside your head.", ex1_vi: "Bộ não của bạn ở bên trong đầu.",
        ex2: "He shook his head.", ex2_vi: "Anh ấy lắc đầu.",
        ex3: "She hit her head on the door.", ex3_vi: "Cô ấy đập đầu vào cửa." },
    { id: 3, word: "inside", type: "prep.", phonetic: "/ˌɪnˈsaɪd/", tip: "in-xai", meaning: "Bên trong", cat: "adv",
        ex1: "Your brain is inside your head.", ex1_vi: "Bộ não của bạn ở bên trong đầu.",
        ex2: "Look inside the box.", ex2_vi: "Nhìn vào bên trong hộp.",
        ex3: "The keys are inside the drawer.", ex3_vi: "Chìa khóa ở bên trong ngăn kéo." },
    { id: 4, word: "helps", type: "v.", phonetic: "/helps/", tip: "hép", meaning: "Giúp", cat: "v",
        ex1: "It helps you think and learn.", ex1_vi: "Nó giúp bạn suy nghĩ và học hỏi.",
        ex2: "Exercise helps your brain.", ex2_vi: "Tập thể dục giúp bộ não của bạn.",
        ex3: "Reading helps you relax.", ex3_vi: "Đọc sách giúp bạn thư giãn." },
    { id: 5, word: "think", type: "v.", phonetic: "/θɪŋk/", tip: "thính", meaning: "Suy nghĩ", cat: "v",
        ex1: "You need to think carefully.", ex1_vi: "Bạn cần suy nghĩ cẩn thận.",
        ex2: "I think it's a good idea.", ex2_vi: "Tôi nghĩ đó là một ý kiến hay.",
        ex3: "Think before you speak.", ex3_vi: "Hãy suy nghĩ trước khi nói." },
    { id: 6, word: "learn", type: "v.", phonetic: "/lɜːrn/", tip: "lơn", meaning: "Học", cat: "v",
        ex1: "You can learn many things.", ex1_vi: "Bạn có thể học nhiều điều.",
        ex2: "Children learn fast.", ex2_vi: "Trẻ em học rất nhanh.",
        ex3: "I want to learn English.", ex3_vi: "Tôi muốn học tiếng Anh." },
    { id: 7, word: "feel", type: "v.", phonetic: "/fiːl/", tip: "phil", meaning: "Cảm thấy", cat: "v",
        ex1: "I feel happy today.", ex1_vi: "Hôm nay tôi cảm thấy vui.",
        ex2: "She feels tired.", ex2_vi: "Cô ấy cảm thấy mệt.",
        ex3: "How do you feel?", ex3_vi: "Bạn cảm thấy thế nào?" },
    { id: 8, word: "and", type: "conj.", phonetic: "/ænd/", tip: "án", meaning: "Và", cat: "conj",
        ex1: "Think, learn, and move.", ex1_vi: "Suy nghĩ, học hỏi và di chuyển.",
        ex2: "I like apples and oranges.", ex2_vi: "Tôi thích táo và cam.",
        ex3: "She sings and dances.", ex3_vi: "Cô ấy hát và nhảy." },
    { id: 9, word: "move", type: "v.", phonetic: "/muːv/", tip: "mu-v", meaning: "Di chuyển", cat: "v",
        ex1: "Your brain helps you move.", ex1_vi: "Bộ não giúp bạn di chuyển.",
        ex2: "Please move your car.", ex2_vi: "Xin hãy di chuyển xe của bạn.",
        ex3: "The earth moves around the sun.", ex3_vi: "Trái đất quay quanh mặt trời." },
    { id: 10, word: "sends", type: "v.", phonetic: "/sendz/", tip: "xénz", meaning: "Gửi", cat: "v",
        ex1: "The brain sends messages.", ex1_vi: "Bộ não gửi các tin nhắn.",
        ex2: "She sends emails every day.", ex2_vi: "Cô ấy gửi email mỗi ngày.",
        ex3: "He sends a letter to his friend.", ex3_vi: "Anh ấy gửi một lá thư cho bạn mình." },
    { id: 11, word: "messages", type: "n.", phonetic: "/ˈmesɪdʒɪz/", tip: "mét-xít", meaning: "Tin nhắn", cat: "n",
        ex1: "The brain sends messages to the body.", ex1_vi: "Bộ não gửi tin nhắn đến cơ thể.",
        ex2: "I received a message from her.", ex2_vi: "Tôi nhận được một tin nhắn từ cô ấy.",
        ex3: "Text messages are convenient.", ex3_vi: "Tin nhắn văn bản rất tiện lợi." },
    { id: 12, word: "to", type: "prep.", phonetic: "/tuː/", tip: "tu", meaning: "Đến", cat: "adv",
        ex1: "Go to school.", ex1_vi: "Đến trường.",
        ex2: "She gave it to me.", ex2_vi: "Cô ấy đã đưa nó cho tôi.",
        ex3: "I listen to music.", ex3_vi: "Tôi nghe nhạc." },
    { id: 13, word: "rest", type: "n.", phonetic: "/rest/", tip: "rét", meaning: "Phần còn lại", cat: "n",
        ex1: "The brain sends messages to the rest of the body.", ex1_vi: "Bộ não gửi tin nhắn đến phần còn lại của cơ thể.",
        ex2: "The rest of the team is waiting.", ex2_vi: "Phần còn lại của đội đang chờ.",
        ex3: "I'll do the rest tomorrow.", ex3_vi: "Tôi sẽ làm phần còn lại vào ngày mai." },
    { id: 14, word: "body", type: "n.", phonetic: "/ˈbɒdi/", tip: "bó-di", meaning: "Cơ thể", cat: "n",
        ex1: "Your brain controls your body.", ex1_vi: "Bộ não điều khiển cơ thể bạn.",
        ex2: "The body needs rest.", ex2_vi: "Cơ thể cần nghỉ ngơi.",
        ex3: "She has a healthy body.", ex3_vi: "Cô ấy có một cơ thể khỏe mạnh." },
    { id: 15, word: "controls", type: "v.", phonetic: "/kənˈtroʊlz/", tip: "cần-tróu", meaning: "Điều khiển", cat: "v",
        ex1: "It controls everything you do.", ex1_vi: "Nó điều khiển mọi thứ bạn làm.",
        ex2: "The teacher controls the class.", ex2_vi: "Giáo viên điều khiển lớp học.",
        ex3: "He controls the machine.", ex3_vi: "Anh ấy điều khiển máy móc." },
    { id: 16, word: "everything", type: "pron.", phonetic: "/ˈevriθɪŋ/", tip: "ép-ri-thinh", meaning: "Mọi thứ",
        cat: "n",
        ex1: "Your brain controls everything.", ex1_vi: "Bộ não điều khiển mọi thứ.",
        ex2: "Everything is ready.", ex2_vi: "Mọi thứ đã sẵn sàng.",
        ex3: "He knows everything.", ex3_vi: "Anh ấy biết mọi thứ." },
    { id: 17, word: "do", type: "v.", phonetic: "/duː/", tip: "du", meaning: "Làm", cat: "v",
        ex1: "Everything you do.", ex1_vi: "Mọi thứ bạn làm.",
        ex2: "What do you do?", ex2_vi: "Bạn làm nghề gì?",
        ex3: "I do my homework.", ex3_vi: "Tôi làm bài tập về nhà." },
    { id: 18, word: "even", type: "adv.", phonetic: "/ˈiːvn/", tip: "í-vn", meaning: "Thậm chí", cat: "adv",
        ex1: "It controls even blinking or smiling.", ex1_vi: "Nó điều khiển cả chớp mắt hay cười.",
        ex2: "Even a child can do it.", ex2_vi: "Thậm chí một đứa trẻ cũng có thể làm được.",
        ex3: "She didn't even say sorry.", ex3_vi: "Cô ấy thậm chí không xin lỗi." },
    { id: 19, word: "blinking", type: "v.", phonetic: "/ˈblɪŋkɪŋ/", tip: "blính-kinh", meaning: "Chớp mắt", cat: "v",
        ex1: "Your brain controls blinking.", ex1_vi: "Bộ não điều khiển việc chớp mắt.",
        ex2: "He was blinking rapidly.", ex2_vi: "Anh ấy đang chớp mắt nhanh.",
        ex3: "Blinking is automatic.", ex3_vi: "Chớp mắt là tự động." },
    { id: 20, word: "or", type: "conj.", phonetic: "/ɔːr/", tip: "o", meaning: "Hoặc", cat: "conj",
        ex1: "Blinking or smiling.", ex1_vi: "Chớp mắt hoặc cười.",
        ex2: "Do you want tea or coffee?", ex2_vi: "Bạn muốn trà hay cà phê?",
        ex3: "You can stay or leave.", ex3_vi: "Bạn có thể ở lại hoặc rời đi." },
    { id: 21, word: "smiling", type: "v.", phonetic: "/ˈsmaɪlɪŋ/", tip: "x-mai-linh", meaning: "Cười", cat: "v",
        ex1: "Your brain controls smiling.", ex1_vi: "Bộ não điều khiển việc cười.",
        ex2: "She is smiling at me.", ex2_vi: "Cô ấy đang cười với tôi.",
        ex3: "Smiling makes you happy.", ex3_vi: "Cười làm bạn hạnh phúc." },
    { id: 22, word: "stores", type: "v.", phonetic: "/stɔːrz/", tip: "x-tó", meaning: "Lưu trữ", cat: "v",
        ex1: "Your brain stores memories.", ex1_vi: "Bộ não lưu trữ ký ức.",
        ex2: "The shop stores goods.", ex2_vi: "Cửa hàng lưu trữ hàng hóa.",
        ex3: "Data is stored in the computer.", ex3_vi: "Dữ liệu được lưu trữ trong máy tính." },
    { id: 23, word: "memories", type: "n.", phonetic: "/ˈmeməriz/", tip: "mé-mờ-ri", meaning: "Ký ức", cat: "n",
        ex1: "Your brain stores memories.", ex1_vi: "Bộ não lưu trữ ký ức.",
        ex2: "I have good memories of my childhood.", ex2_vi: "Tôi có những ký ức đẹp về thời thơ ấu.",
        ex3: "Memories fade over time.", ex3_vi: "Ký ức phai nhạt theo thời gian." },
    { id: 24, word: "make", type: "v.", phonetic: "/meɪk/", tip: "mây", meaning: "Tạo ra", cat: "v",
        ex1: "It helps you make choices.", ex1_vi: "Nó giúp bạn tạo ra các lựa chọn.",
        ex2: "She makes delicious cakes.", ex2_vi: "Cô ấy làm bánh ngon.",
        ex3: "Can you make a decision?", ex3_vi: "Bạn có thể đưa ra quyết định không?" },
    { id: 25, word: "choices", type: "n.", phonetic: "/ˈtʃɔɪsɪz/", tip: "chói-xít", meaning: "Lựa chọn", cat: "n",
        ex1: "You have many choices.", ex1_vi: "Bạn có nhiều lựa chọn.",
        ex2: "We need to make choices.", ex2_vi: "Chúng ta cần đưa ra các lựa chọn.",
        ex3: "Good choices lead to success.", ex3_vi: "Lựa chọn tốt dẫn đến thành công." },
    { id: 26, word: "never", type: "adv.", phonetic: "/ˈnevər/", tip: "né-vờ", meaning: "Không bao giờ", cat: "adv",
        ex1: "It never stops working.", ex1_vi: "Nó không bao giờ ngừng làm việc.",
        ex2: "I never forget your face.", ex2_vi: "Tôi không bao giờ quên khuôn mặt của bạn.",
        ex3: "She never lies.", ex3_vi: "Cô ấy không bao giờ nói dối." },
    { id: 27, word: "stops", type: "v.", phonetic: "/stɒps/", tip: "x-tóp", meaning: "Dừng lại", cat: "v",
        ex1: "The brain never stops working.", ex1_vi: "Bộ não không bao giờ ngừng làm việc.",
        ex2: "The rain stops.", ex2_vi: "Cơn mưa dừng lại.",
        ex3: "He stops running.", ex3_vi: "Anh ấy dừng chạy." },
    { id: 28, word: "working", type: "v.", phonetic: "/ˈwɜːrkɪŋ/", tip: "wớc-kinh", meaning: "Làm việc", cat: "v",
        ex1: "It never stops working.", ex1_vi: "Nó không bao giờ ngừng làm việc.",
        ex2: "She is working hard.", ex2_vi: "Cô ấy đang làm việc chăm chỉ.",
        ex3: "The machine is working.", ex3_vi: "Máy móc đang hoạt động." },
    { id: 29, word: "when", type: "conj.", phonetic: "/wen/", tip: "uên", meaning: "Khi", cat: "conj",
        ex1: "Even when you sleep.", ex1_vi: "Ngay cả khi bạn ngủ.",
        ex2: "When I arrived, she was sleeping.", ex2_vi: "Khi tôi đến, cô ấy đang ngủ.",
        ex3: "Tell me when you are ready.", ex3_vi: "Hãy nói cho tôi khi bạn sẵn sàng." },
    { id: 30, word: "sleep", type: "v.", phonetic: "/sliːp/", tip: "x-líp", meaning: "Ngủ", cat: "v",
        ex1: "Your brain works when you sleep.", ex1_vi: "Bộ não hoạt động khi bạn ngủ.",
        ex2: "I need to sleep.", ex2_vi: "Tôi cần ngủ.",
        ex3: "Sleep is important for health.", ex3_vi: "Giấc ngủ quan trọng cho sức khỏe." },
    { id: 31, word: "keep", type: "v.", phonetic: "/kiːp/", tip: "kip", meaning: "Giữ", cat: "v",
        ex1: "To keep your brain strong.", ex1_vi: "Để giữ cho bộ não của bạn khỏe mạnh.",
        ex2: "Please keep quiet.", ex2_vi: "Xin hãy giữ yên lặng.",
        ex3: "She keeps her room tidy.", ex3_vi: "Cô ấy giữ phòng của mình ngăn nắp." },
    { id: 32, word: "strong", type: "adj.", phonetic: "/strɒŋ/", tip: "x-trọng", meaning: "Khỏe mạnh", cat: "adj",
        ex1: "Your brain is strong.", ex1_vi: "Bộ não của bạn rất khỏe mạnh.",
        ex2: "He has strong muscles.", ex2_vi: "Anh ấy có cơ bắp khỏe mạnh.",
        ex3: "She is a strong person.", ex3_vi: "Cô ấy là một người mạnh mẽ." },
    { id: 33, word: "eat", type: "v.", phonetic: "/iːt/", tip: "ít", meaning: "Ăn", cat: "v",
        ex1: "Eat healthy foods.", ex1_vi: "Ăn thực phẩm lành mạnh.",
        ex2: "I eat breakfast every day.", ex2_vi: "Tôi ăn sáng mỗi ngày.",
        ex3: "She eats vegetables.", ex3_vi: "Cô ấy ăn rau củ." },
    { id: 34, word: "healthy", type: "adj.", phonetic: "/ˈhelθi/", tip: "hén-thi", meaning: "Lành mạnh", cat: "adj",
        ex1: "Eat healthy foods.", ex1_vi: "Ăn thực phẩm lành mạnh.",
        ex2: "She is healthy.", ex2_vi: "Cô ấy khỏe mạnh.",
        ex3: "Healthy living is important.", ex3_vi: "Sống lành mạnh rất quan trọng." },
    { id: 35, word: "foods", type: "n.", phonetic: "/fuːdz/", tip: "phút", meaning: "Thực phẩm", cat: "n",
        ex1: "Eat healthy foods.", ex1_vi: "Ăn thực phẩm lành mạnh.",
        ex2: "I like Italian foods.", ex2_vi: "Tôi thích đồ ăn Ý.",
        ex3: "Fresh foods are good.", ex3_vi: "Thực phẩm tươi sống rất tốt." },
    { id: 36, word: "get", type: "v.", phonetic: "/ɡet/", tip: "gét", meaning: "Nhận", cat: "v",
        ex1: "Get rest.", ex1_vi: "Nhận sự nghỉ ngơi.",
        ex2: "I get a lot of homework.", ex2_vi: "Tôi nhận được nhiều bài tập về nhà.",
        ex3: "She gets up early.", ex3_vi: "Cô ấy thức dậy sớm." },
    { id: 37, word: "rest2", type: "n.", phonetic: "/rest/", tip: "rét", meaning: "Nghỉ ngơi", cat: "n",
        ex1: "Get rest.", ex1_vi: "Nghỉ ngơi.",
        ex2: "I need a rest.", ex2_vi: "Tôi cần nghỉ ngơi.",
        ex3: "Rest is good for the brain.", ex3_vi: "Nghỉ ngơi tốt cho bộ não." },
    { id: 38, word: "solve", type: "v.", phonetic: "/sɒlv/", tip: "xón", meaning: "Giải", cat: "v",
        ex1: "Solve puzzles.", ex1_vi: "Giải câu đố.",
        ex2: "She solves problems quickly.", ex2_vi: "Cô ấy giải quyết vấn đề nhanh chóng.",
        ex3: "He solved the math equation.", ex3_vi: "Anh ấy đã giải được phương trình toán học." },
    { id: 39, word: "puzzles", type: "n.", phonetic: "/ˈpʌzlz/", tip: "pát-zồ", meaning: "Câu đố", cat: "n",
        ex1: "Solve puzzles.", ex1_vi: "Giải câu đố.",
        ex2: "I enjoy doing crossword puzzles.", ex2_vi: "Tôi thích giải ô chữ.",
        ex3: "Puzzles are fun.", ex3_vi: "Câu đố rất thú vị." },
    { id: 40, word: "read", type: "v.", phonetic: "/riːd/", tip: "rít", meaning: "Đọc", cat: "v",
        ex1: "Read books.", ex1_vi: "Đọc sách.",
        ex2: "I read a book every week.", ex2_vi: "Tôi đọc một cuốn sách mỗi tuần.",
        ex3: "She reads the newspaper.", ex3_vi: "Cô ấy đọc báo." },
    { id: 41, word: "books", type: "n.", phonetic: "/bʊks/", tip: "búc", meaning: "Sách", cat: "n",
        ex1: "Read books.", ex1_vi: "Đọc sách.",
        ex2: "I have many books.", ex2_vi: "Tôi có nhiều sách.",
        ex3: "Books are a source of knowledge.", ex3_vi: "Sách là nguồn tri thức." },
    { id: 42, word: "soft", type: "adj.", phonetic: "/sɒft/", tip: "xót", meaning: "Mềm", cat: "adj",
        ex1: "Your brain is soft.", ex1_vi: "Bộ não của bạn mềm.",
        ex2: "The pillow is soft.", ex2_vi: "Cái gối mềm.",
        ex3: "She has soft skin.", ex3_vi: "Cô ấy có làn da mềm mại." },
    { id: 43, word: "needs", type: "v.", phonetic: "/niːdz/", tip: "nít", meaning: "Cần", cat: "v",
        ex1: "It needs protection.", ex1_vi: "Nó cần sự bảo vệ.",
        ex2: "She needs help.", ex2_vi: "Cô ấy cần giúp đỡ.",
        ex3: "We need food and water.", ex3_vi: "Chúng ta cần thức ăn và nước uống." },
    { id: 44, word: "protection", type: "n.", phonetic: "/prəˈtekʃn/", tip: "prờ-téc-sờn", meaning: "Sự bảo vệ",
        cat: "n",
        ex1: "It needs protection.", ex1_vi: "Nó cần sự bảo vệ.",
        ex2: "The helmet provides protection.", ex2_vi: "Mũ bảo hiểm cung cấp sự bảo vệ.",
        ex3: "We need protection from the sun.", ex3_vi: "Chúng ta cần bảo vệ khỏi ánh nắng mặt trời." },
    { id: 45, word: "so", type: "conj.", phonetic: "/soʊ/", tip: "xâu", meaning: "Vì vậy", cat: "conj",
        ex1: "It is soft, so it needs protection.", ex1_vi: "Nó mềm, vì vậy nó cần bảo vệ.",
        ex2: "It was raining, so I stayed home.", ex2_vi: "Trời mưa, vì vậy tôi ở nhà.",
        ex3: "She is busy, so she can't come.", ex3_vi: "Cô ấy bận, vì vậy cô ấy không thể đến." },
    { id: 46, word: "skull", type: "n.", phonetic: "/skʌl/", tip: "x-cân", meaning: "Hộp sọ", cat: "n",
        ex1: "Your skull protects your brain.", ex1_vi: "Hộp sọ của bạn bảo vệ bộ não.",
        ex2: "The skull is a hard bone.", ex2_vi: "Hộp sọ là một xương cứng.",
        ex3: "He hit his skull.", ex3_vi: "Anh ấy đập vào hộp sọ." },
    { id: 47, word: "keeps", type: "v.", phonetic: "/kiːps/", tip: "kíp", meaning: "Giữ", cat: "v",
        ex1: "Your skull keeps it safe.", ex1_vi: "Hộp sọ giữ nó an toàn.",
        ex2: "She keeps her money in a bank.", ex2_vi: "Cô ấy giữ tiền trong ngân hàng.",
        ex3: "He keeps his room clean.", ex3_vi: "Anh ấy giữ phòng sạch sẽ." },
    { id: 48, word: "safe", type: "adj.", phonetic: "/seɪf/", tip: "xây-ph", meaning: "An toàn", cat: "adj",
        ex1: "Your brain is safe inside your skull.", ex1_vi: "Bộ não của bạn an toàn bên trong hộp sọ.",
        ex2: "Is it safe to swim here?", ex2_vi: "Bơi ở đây có an toàn không?",
        ex3: "She feels safe.", ex3_vi: "Cô ấy cảm thấy an toàn." },
    { id: 49, word: "like", type: "prep.", phonetic: "/laɪk/", tip: "lai", meaning: "Như là", cat: "adv",
        ex1: "It works like a helmet.", ex1_vi: "Nó hoạt động như một cái mũ bảo hiểm.",
        ex2: "She looks like her mother.", ex2_vi: "Cô ấy trông giống mẹ cô ấy.",
        ex3: "He runs like a cheetah.", ex3_vi: "Anh ấy chạy như một con báo." },
    { id: 50, word: "helmet", type: "n.", phonetic: "/ˈhelmɪt/", tip: "hén-mít", meaning: "Mũ bảo hiểm", cat: "n",
        ex1: "Your skull keeps it safe like a helmet.", ex1_vi: "Hộp sọ giữ nó an toàn như một cái mũ bảo hiểm.",
        ex2: "Wear a helmet when cycling.", ex2_vi: "Đội mũ bảo hiểm khi đi xe đạp.",
        ex3: "The helmet protects your head.", ex3_vi: "Mũ bảo hiểm bảo vệ đầu của bạn." }
];

// ============================================================
// DANH SÁCH TỪ VỰNG CỦA BÀI (THEO THỨ TỰ XUẤT HIỆN)
// ============================================================
const readingVocabOrder = [
    "brain", "head", "inside", "helps", "think", "learn", "feel", "and", "move",
    "sends", "messages", "to", "rest", "body", "controls", "everything", "do",
    "even", "blinking", "or", "smiling", "stores", "memories", "make", "choices",
    "never", "stops", "working", "when", "sleep", "keep", "strong", "eat", "healthy",
    "foods", "get", "rest2", "solve", "puzzles", "read", "books", "soft", "needs",
    "protection", "so", "skull", "keeps", "safe", "like", "helmet"
];

// ============================================================
// CÁC DỮ LIỆU KHÁC
// ============================================================
const grammarData = [{
    title: "Present Simple (Khẳng định)",
    formula: "S + V(s/es) + O",
    desc: "Diễn tả sự thật hiển nhiên, thói quen.",
    example: "Your brain controls everything.",
    vi: "Bộ não của bạn điều khiển mọi thứ.",
    detail: "Thêm -s/-es với ngôi thứ ba số ít.",
    extra: [
        { en: "It helps you think.", vi: "Nó giúp bạn suy nghĩ." },
        { en: "The skull protects the brain.", vi: "Hộp sọ bảo vệ bộ não." }
    ]
}, {
    title: "Present Simple (Phủ định)",
    formula: "S + do/does not + V",
    desc: "Diễn tả điều gì đó không xảy ra.",
    example: "It never stops working.",
    vi: "Nó không bao giờ ngừng làm việc.",
    detail: "Dùng 'never' thay cho 'do not' để nhấn mạnh.",
    extra: [
        { en: "He does not sleep well.", vi: "Anh ấy không ngủ ngon." },
        { en: "She doesn't eat meat.", vi: "Cô ấy không ăn thịt." }
    ]
}, {
    title: "Modal Verb: can",
    formula: "S + can + V",
    desc: "Diễn tả khả năng.",
    example: "You can learn many things.",
    vi: "Bạn có thể học nhiều điều.",
    detail: "Can không thay đổi theo ngôi.",
    extra: [
        { en: "I can solve puzzles.", vi: "Tôi có thể giải câu đố." },
        { en: "She can read fast.", vi: "Cô ấy có thể đọc nhanh." }
    ]
}, {
    title: "Imperative (Câu mệnh lệnh)",
    formula: "V + O",
    desc: "Dùng để đưa ra lời khuyên hoặc mệnh lệnh.",
    example: "Eat healthy foods.",
    vi: "Ăn thực phẩm lành mạnh.",
    detail: "Thường không có chủ ngữ.",
    extra: [
        { en: "Get rest.", vi: "Nghỉ ngơi." },
        { en: "Read books.", vi: "Đọc sách." }
    ]
}, {
    title: "Possessive Adjectives",
    formula: "my, your, his, her, its, our, their + N",
    desc: "Chỉ sự sở hữu.",
    example: "Your brain is powerful.",
    vi: "Bộ não của bạn rất mạnh mẽ.",
    detail: "Đứng trước danh từ.",
    extra: [
        { en: "His head hurts.", vi: "Đầu của anh ấy bị đau." },
        { en: "Our body needs rest.", vi: "Cơ thể chúng ta cần nghỉ ngơi." }
    ]
}, {
    title: "Conjunctions: and, or, so",
    formula: "Clause + and/or/so + Clause",
    desc: "Nối các mệnh đề.",
    example: "It helps you think, learn, and move.",
    vi: "Nó giúp bạn suy nghĩ, học hỏi và di chuyển.",
    detail: "'and' thêm thông tin, 'or' lựa chọn, 'so' chỉ kết quả.",
    extra: [
        { en: "Eat healthy foods and get rest.", vi: "Ăn thực phẩm lành mạnh và nghỉ ngơi." },
        { en: "It's soft, so it needs protection.", vi: "Nó mềm, vì vậy nó cần bảo vệ." }
    ]
}, {
    title: "Prepositions: inside, to, of, like",
    formula: "N + preposition + N",
    desc: "Chỉ vị trí, hướng, so sánh.",
    example: "Your brain is inside your head.",
    vi: "Bộ não của bạn ở bên trong đầu.",
    detail: "'like' được dùng để so sánh.",
    extra: [
        { en: "Messages to the body.", vi: "Tin nhắn đến cơ thể." },
        { en: "Protection of the brain.", vi: "Sự bảo vệ của bộ não." },
        { en: "Like a helmet.", vi: "Như một cái mũ bảo hiểm." }
    ]
}, {
    title: "Gerund as Object",
    formula: "V-ing + O",
    desc: "Động từ thêm -ing làm tân ngữ.",
    example: "Your brain controls blinking.",
    vi: "Bộ não điều khiển việc chớp mắt.",
    detail: "Sau một số động từ như 'control', 'enjoy'.",
    extra: [
        { en: "I enjoy reading.", vi: "Tôi thích đọc sách." },
        { en: "He likes solving puzzles.", vi: "Anh ấy thích giải câu đố." }
    ]
}];

const essayData = [{
    text: "Your brain is inside your head. It helps you think, learn, feel, and move.",
    vi: "Bộ não của bạn ở bên trong đầu. Nó giúp bạn suy nghĩ, học hỏi, cảm thấy và di chuyển."
}, {
    text: "The brain sends messages to the rest of your body. It controls everything you do—even blinking or smiling.",
    vi: "Bộ não gửi tin nhắn đến phần còn lại của cơ thể bạn. Nó điều khiển mọi thứ bạn làm—thậm chí chớp mắt hay cười."
}, {
    text: "Your brain also stores memories and helps you make choices. It never stops working, even when you sleep!",
    vi: "Bộ não của bạn cũng lưu trữ ký ức và giúp bạn đưa ra các lựa chọn. Nó không bao giờ ngừng làm việc, ngay cả khi bạn ngủ!"
}, {
    text: "To keep your brain strong, eat healthy foods, get rest, and solve puzzles or read books. Your brain is soft and needs protection, so your skull keeps it safe like a helmet. It is the boss of your body!",
    vi: "Để giữ cho bộ não của bạn khỏe mạnh, hãy ăn thực phẩm lành mạnh, nghỉ ngơi, và giải câu đố hoặc đọc sách. Bộ não của bạn mềm và cần được bảo vệ, vì vậy hộp sọ giữ nó an toàn như một cái mũ bảo hiểm. Nó là người chỉ huy của cơ thể bạn!"
}];

const ex1Data = [
    { q: "Your brain is inside your ______.", a: "head" },
    { q: "It helps you think, learn, feel, and ______.", a: "move" },
    { q: "The brain sends ______ to the rest of your body.", a: "messages" },
    { q: "It controls everything you do—even ______ or smiling.", a: "blinking" },
    { q: "Your brain also stores ______.", a: "memories" },
    { q: "It never ______ working.", a: "stops" },
    { q: "To keep your brain strong, eat healthy ______.", a: "foods" },
    { q: "Get ______ and solve puzzles.", a: "rest" },
    { q: "Your brain is ______ and needs protection.", a: "soft" },
    { q: "Your ______ keeps it safe like a helmet.", a: "skull" },
    { q: "The brain is the ______ of your body.", a: "boss" },
    { q: "You can read ______ to exercise your brain.", a: "books" },
    { q: "Solving ______ is good for the brain.", a: "puzzles" },
    { q: "______ healthy foods for your brain.", a: "Eat" },
    { q: "Your brain helps you ______ choices.", a: "make" }
];

const ex2Data = [
    { q: "Your brain is inside your ______.", a: "head", opts: ["head", "foot", "hand", "leg"] },
    { q: "It helps you ______, learn, feel, and move.", a: "think", opts: ["think", "play", "eat", "sleep"] },
    { q: "The brain sends messages to the ______ of your body.", a: "rest", opts: ["rest", "front", "back", "side"] },
    { q: "It controls everything you do—even ______ or smiling.", a: "blinking", opts: ["blinking", "running", "jumping",
            "eating"
        ] },
    { q: "Your brain also stores ______.", a: "memories", opts: ["memories", "money", "clothes", "food"] },
    { q: "It never ______ working.", a: "stops", opts: ["stops", "starts", "continues", "finishes"] },
    { q: "To keep your brain strong, eat healthy ______.", a: "foods", opts: ["foods", "drinks", "snacks", "meals"] },
    { q: "Get ______ and solve puzzles.", a: "rest", opts: ["rest", "money", "food", "water"] },
    { q: "Your brain is ______ and needs protection.", a: "soft", opts: ["soft", "hard", "cold", "hot"] },
    { q: "Your ______ keeps it safe like a helmet.", a: "skull", opts: ["skull", "heart", "lung", "stomach"] },
    { q: "The brain is the ______ of your body.", a: "boss", opts: ["boss", "worker", "servant", "guest"] },
    { q: "You can read ______ to exercise your brain.", a: "books", opts: ["books", "magazines", "newspapers",
            "letters"
        ] },
    { q: "Solving ______ is good for the brain.", a: "puzzles", opts: ["puzzles", "problems", "questions",
            "exercises"
        ] },
    { q: "______ healthy foods for your brain.", a: "Eat", opts: ["Eat", "Drink", "Cook", "Buy"] },
    { q: "Your brain helps you ______ choices.", a: "make", opts: ["make", "do", "take", "give"] }
];

const ex3Data = [
    { word: "brain", mean: "Não" },
    { word: "head", mean: "Đầu" },
    { word: "inside", mean: "Bên trong" },
    { word: "messages", mean: "Tin nhắn" },
    { word: "body", mean: "Cơ thể" },
    { word: "controls", mean: "Điều khiển" },
    { word: "memories", mean: "Ký ức" },
    { word: "choices", mean: "Lựa chọn" },
    { word: "skull", mean: "Hộp sọ" },
    { word: "helmet", mean: "Mũ bảo hiểm" },
    { word: "healthy", mean: "Lành mạnh" },
    { word: "puzzles", mean: "Câu đố" },
    { word: "books", mean: "Sách" },
    { word: "protection", mean: "Sự bảo vệ" },
    { word: "boss", mean: "Người chỉ huy" }
];

const ex4Data = vocabData.map(v => ({ word: v.word, mean: v.meaning }));

const ex5Data = [
    "Your brain is inside your head.",
    "It helps you think and learn.",
    "The brain sends messages to your body.",
    "It controls everything you do.",
    "Your brain stores memories.",
    "It never stops working.",
    "Eat healthy foods for your brain.",
    "Get rest and solve puzzles.",
    "Your skull protects your brain.",
    "The brain is the boss of your body."
];

const ex6Data = [
    { id: 1, words: ["brain", "head", "inside", "your", "is"], correct: "your brain is inside your head" },
    { id: 2, words: ["you", "helps", "think", "it", "learn"], correct: "it helps you think learn" },
    { id: 3, words: ["body", "messages", "sends", "the", "to", "brain"], correct: "the brain sends messages to the body" },
    { id: 4, words: ["everything", "controls", "it", "you", "do"], correct: "it controls everything you do" },
    { id: 5, words: ["memories", "brain", "also", "stores", "your"], correct: "your brain also stores memories" },
    { id: 6, words: ["never", "working", "it", "stops"], correct: "it never stops working" },
    { id: 7, words: ["foods", "eat", "healthy", "brain", "for", "your"], correct: "eat healthy foods for your brain" },
    { id: 8, words: ["and", "puzzles", "solve", "rest", "get"], correct: "get rest and solve puzzles" },
    { id: 9, words: ["protects", "skull", "brain", "your", "the"], correct: "the skull protects your brain" },
    { id: 10, words: ["boss", "brain", "the", "body", "is", "of", "the"], correct: "the brain is the boss of the body" }
];

const ex7Data = [
    { q: "Where is your brain?", a: "Inside your head." },
    { q: "What does the brain help you do?", a: "Think, learn, feel, and move." },
    { q: "What does the brain send to the body?", a: "Messages." },
    { q: "What does the brain control?", a: "Everything you do, even blinking or smiling." },
    { q: "Does the brain store memories?", a: "Yes, it stores memories." },
    { q: "Does the brain ever stop working?", a: "No, it never stops working." },
    { q: "How can you keep your brain strong?", a: "Eat healthy foods, get rest, solve puzzles, or read books." },
    { q: "Why does your brain need protection?", a: "Because it is soft." },
    { q: "What protects your brain?", a: "Your skull." },
    { q: "What is the brain compared to?", a: "A helmet." }
];

const analysisData = [
    { sentence: "Your brain is inside your head.", structure: "S + be + prepositional phrase.",
        translation: "Bộ não của bạn ở bên trong đầu.",
        pos: "Your (tính từ sở hữu), brain (danh từ), is (động từ to be), inside (giới từ), your (tính từ sở hữu), head (danh từ)." },
    { sentence: "It helps you think, learn, feel, and move.",
        structure: "S + V + O + (to) V (nguyên mẫu).", translation: "Nó giúp bạn suy nghĩ, học hỏi, cảm thấy và di chuyển.",
        pos: "It (đại từ), helps (động từ), you (đại từ), think (động từ nguyên mẫu), learn (động từ nguyên mẫu), feel (động từ nguyên mẫu), and (liên từ), move (động từ nguyên mẫu)." },
    { sentence: "The brain sends messages to the rest of your body.",
        structure: "S + V + O + prepositional phrase.", translation: "Bộ não gửi tin nhắn đến phần còn lại của cơ thể bạn.",
        pos: "The (mạo từ), brain (danh từ), sends (động từ), messages (danh từ), to (giới từ), the (mạo từ), rest (danh từ), of (giới từ), your (tính từ sở hữu), body (danh từ)." },
    { sentence: "It controls everything you do—even blinking or smiling.",
        structure: "S + V + O + mệnh đề quan hệ + bổ ngữ.", translation: "Nó điều khiển mọi thứ bạn làm—thậm chí chớp mắt hay cười.",
        pos: "It (đại từ), controls (động từ), everything (đại từ), you (đại từ), do (động từ), even (trạng từ), blinking (V-ing), or (liên từ), smiling (V-ing)." },
    { sentence: "Your brain also stores memories and helps you make choices.",
        structure: "S + V + O + and + V + O.", translation: "Bộ não của bạn cũng lưu trữ ký ức và giúp bạn đưa ra các lựa chọn.",
        pos: "Your (tính từ sở hữu), brain (danh từ), also (trạng từ), stores (động từ), memories (danh từ), and (liên từ), helps (động từ), you (đại từ), make (động từ nguyên mẫu), choices (danh từ)." },
    { sentence: "It never stops working, even when you sleep!",
        structure: "S + adv + V + V-ing + mệnh đề phụ.", translation: "Nó không bao giờ ngừng làm việc, ngay cả khi bạn ngủ!",
        pos: "It (đại từ), never (trạng từ), stops (động từ), working (V-ing), even (trạng từ), when (liên từ), you (đại từ), sleep (động từ)." },
    { sentence: "To keep your brain strong, eat healthy foods, get rest, and solve puzzles or read books.",
        structure: "To V + O, mệnh đề mệnh lệnh.", translation: "Để giữ cho bộ não của bạn khỏe mạnh, hãy ăn thực phẩm lành mạnh, nghỉ ngơi, và giải câu đố hoặc đọc sách.",
        pos: "To keep (động từ nguyên mẫu), your (tính từ sở hữu), brain (danh từ), strong (tính từ), eat (động từ), healthy (tính từ), foods (danh từ), get (động từ), rest (danh từ), and (liên từ), solve (động từ), puzzles (danh từ), or (liên từ), read (động từ), books (danh từ)." },
    { sentence: "Your brain is soft and needs protection, so your skull keeps it safe like a helmet.",
        structure: "S + be + adj + and + V + O, so + S + V + O + adj + like + N.",
        translation: "Bộ não của bạn mềm và cần được bảo vệ, vì vậy hộp sọ giữ nó an toàn như một cái mũ bảo hiểm.",
        pos: "Your (tính từ sở hữu), brain (danh từ), is (động từ to be), soft (tính từ), and (liên từ), needs (động từ), protection (danh từ), so (liên từ), your (tính từ sở hữu), skull (danh từ), keeps (động từ), it (đại từ), safe (tính từ), like (giới từ), a (mạo từ), helmet (danh từ)." },
    { sentence: "It is the boss of your body!",
        structure: "S + be + the + N + prepositional phrase.", translation: "Nó là người chỉ huy của cơ thể bạn!",
        pos: "It (đại từ), is (động từ to be), the (mạo từ), boss (danh từ), of (giới từ), your (tính từ sở hữu), body (danh từ)." }
];

// ============================================================
// JAVASCRIPT - GIỮ NGUYÊN LOGIC
// ============================================================
let currentExercise = 1;
let activeParagraph = null;
let isSpeaking = false;
let audio = document.getElementById('main-audio');
let matchAnswers = {};
let flashcardIndex = 0;
let wordOrderAnswers = {};
let typingIndex = 0;
let learnedWords = JSON.parse(localStorage.getItem('learnedWords') || '[]');
let favoriteWords = JSON.parse(localStorage.getItem('favoriteWords') || '[]');
let currentFilter = 'all';
let showLearnedOnly = false;
let startTime = Date.now();
let speechRate = 0.85;
let selectedVoice = '';

const recording = {
    recorder: null,
    chunks: [],
    url: null,
    isRecording: false,
    activeIndex: null,
    recordedIndex: null
};

let paragraphLoop = {
    active: false,
    index: null,
    utterance: null,
    text: ''
};

let isLooping = false;
let isParagraphToggling = false;
let loopUtterance = null;
let fullRecorder = null;
let fullAudioChunks = [];
let fullRecordingUrl = null;
let isFullRecording = false;

// ===== HÀM TIỆN ÍCH =====
function formatTime(sec) {
    if (isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ':' + String(s).padStart(2, '0');
}

function playAudio(text, cb) {
    // Dừng tất cả audio đang phát
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    
    // Dừng audio player nếu đang phát
    const mainAudio = document.getElementById('main-audio');
    if (mainAudio && !mainAudio.paused) {
        mainAudio.pause();
        mainAudio.currentTime = 0;
    }
    
    // Dừng loop nếu đang chạy
    if (isLooping) {
        stopLoop();
    }
    
    // Dừng paragraph loop nếu đang chạy
    if (paragraphLoop.active) {
        stopAllAudio();
    }
    
    if (!window.speechSynthesis) return false;
    
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = speechRate;
    u.pitch = 1;
    if (selectedVoice) {
        const voices = window.speechSynthesis.getVoices();
        const selected = voices.find(v => v.name === selectedVoice);
        if (selected) u.voice = selected;
    }
    if (cb) u.onend = cb;
    window.speechSynthesis.speak(u);
    isSpeaking = true;
    document.getElementById('tts-status')?.classList.remove('hidden');
    document.getElementById('tts-play')?.classList.add('hidden');
    document.getElementById('tts-stop')?.classList.remove('hidden');
    return true;
}

function stopAllAudio() {
    // Dừng text-to-speech
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    
    // Dừng audio player
    const mainAudio = document.getElementById('main-audio');
    if (mainAudio) {
        mainAudio.pause();
        mainAudio.currentTime = 0;
        // Cập nhật UI audio
        document.getElementById('audio-progress-bar').style.width = '0%';
        document.getElementById('audio-current').textContent = '0:00';
    }
    
    isSpeaking = false;
    activeParagraph = null;
    
    // Dừng paragraph loop
    if (paragraphLoop.active) {
        paragraphLoop.active = false;
        paragraphLoop.index = null;
        paragraphLoop.utterance = null;
        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById('p-btn-' + i);
            if (btn) {
                btn.textContent = '🔁 Nghe lặp';
                btn.className = 'flex items-center justify-center gap-1 px-3 py-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-xl transition font-medium text-slate-700 text-sm';
            }
        }
    }
    
    // Dừng loop toàn bài
    if (isLooping) {
        isLooping = false;
        loopUtterance = null;
        document.getElementById('btn-play-loop')?.classList.remove('hidden');
        document.getElementById('btn-stop-loop')?.classList.add('hidden');
    }
    
    // Cập nhật UI
    document.getElementById('tts-status')?.classList.add('hidden');
    document.getElementById('tts-play')?.classList.remove('hidden');
    document.getElementById('tts-stop')?.classList.add('hidden');
    document.getElementById('reading-indicator')?.classList.add('hidden');
    document.getElementById('cancel-read')?.classList.add('hidden');
    
    // Xóa active state của các đoạn
    for (let i = 0; i < 4; i++) {
        const card = document.getElementById('para-card-' + i);
        if (card) card.classList.remove('active');
    }
}

function updateAudioProgress() {
    if (audio) {
        const pct = (audio.currentTime / audio.duration) * 100 || 0;
        document.getElementById('audio-progress-bar').style.width = pct + '%';
        document.getElementById('audio-current').textContent = formatTime(audio.currentTime);
        document.getElementById('audio-duration-label').textContent = formatTime(audio.duration);
    }
}

function seekAudio(e) {
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    audio.currentTime = x * audio.duration;
}

function showToast(message, type = 'success', duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast';
    if (type === 'error') toast.classList.add('error');
    else if (type === 'warning') toast.classList.add('warning');
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const btn = document.querySelector('.dark-toggle');
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    localStorage.setItem('darkMode', document.body.classList.contains('dark') ? 'true' : 'false');
    showToast(document.body.classList.contains('dark') ? '🌙 Chế độ tối' : '☀️ Chế độ sáng', 'success', 1500);
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.() || document.documentElement.webkitRequestFullscreen?.();
        showToast('⛶ Toàn màn hình', 'success', 1500);
    } else {
        document.exitFullscreen?.() || document.webkitExitFullscreen?.();
        showToast('⛶ Thoát toàn màn hình', 'success', 1500);
    }
}

function exportData() {
    const data = {
        learnedWords,
        favoriteWords,
        score: document.getElementById('score-badge')?.textContent || '0/100',
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `brain_backup_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('📤 Xuất dữ liệu thành công!', 'success');
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.learnedWords) {
                learnedWords = data.learnedWords;
                localStorage.setItem('learnedWords', JSON.stringify(learnedWords));
            }
            if (data.favoriteWords) {
                favoriteWords = data.favoriteWords;
                localStorage.setItem('favoriteWords', JSON.stringify(favoriteWords));
            }
            if (data.score) {
                document.getElementById('score-badge').textContent = data.score;
            }
            renderVocab(document.getElementById('vocab-search')?.value || '');
            updateProgress();
            showToast('📥 Nhập dữ liệu thành công!', 'success');
        } catch (err) {
            showToast('❌ Lỗi: File không hợp lệ!', 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function switchTab(id) {
    if (recording.isRecording) stopRecording();
    if (paragraphLoop.active) {
        stopAllAudio();
    }
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.getElementById('tab-' + id).classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btn-' + id).classList.add('active');
    window.scrollTo(0, 0);
}

// ===== MODAL VÀ TỪ VỰNG =====
function showWord(id) {
    const w = vocabData.find(v => v.id === id);
    if (!w) return;
    const modal = document.getElementById('word-modal');
    const body = document.getElementById('modal-body');
    const catMap = { n: 'Danh từ', v: 'Động từ', adj: 'Tính từ', adv: 'Trạng từ', conj: 'Liên từ' };
    const isLearned = learnedWords.includes(w.id);
    const isFav = favoriteWords.includes(w.id);

    body.innerHTML = `
        <div class="flex justify-between items-start">
            <div>
                <h2 class="text-3xl font-extrabold text-blue-600">${w.word}</h2>
                <p class="text-slate-400 text-sm">${w.type} ${w.phonetic}</p>
                <span class="badge-cat ${w.cat}">${catMap[w.cat] || ''}</span>
            </div>
            <div class="flex items-center gap-2">
                <button onclick="toggleFavorite(${w.id})" class="star-btn ${isFav ? 'active' : ''}" title="Yêu thích">⭐</button>
                <button onclick="playAudio('${w.word}')" class="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition text-xl">🔊</button>
            </div>
        </div>
        <div class="bg-blue-50/70 p-4 rounded-2xl border border-blue-100">
            <p class="text-xs text-blue-500 font-bold uppercase tracking-wider">Nghĩa</p>
            <p class="text-xl font-bold text-slate-800">${w.meaning}</p>
            <p class="text-xs text-slate-400">${w.tip}</p>
        </div>
        <div class="border-t pt-4">
            <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">📖 3 Ví dụ phong phú</p>
            <ul class="example-list">
                <li>
                    <span class="en">"${w.ex1}"</span>
                    <span class="vi">📝 ${w.ex1_vi}</span>
                    <button onclick="playAudio('${w.ex1.replace(/'/g, "\\'")}')" class="text-[10px] text-blue-600 font-bold hover:underline mt-1">🔊 Nghe</button>
                </li>
                <li>
                    <span class="en">"${w.ex2}"</span>
                    <span class="vi">📝 ${w.ex2_vi}</span>
                    <button onclick="playAudio('${w.ex2.replace(/'/g, "\\'")}')" class="text-[10px] text-blue-600 font-bold hover:underline mt-1">🔊 Nghe</button>
                </li>
                <li>
                    <span class="en">"${w.ex3}"</span>
                    <span class="vi">📝 ${w.ex3_vi}</span>
                    <button onclick="playAudio('${w.ex3.replace(/'/g, "\\'")}')" class="text-[10px] text-blue-600 font-bold hover:underline mt-1">🔊 Nghe</button>
                </li>
            </ul>
        </div>
        <div class="mt-4 flex justify-between">
            <button onclick="toggleLearned(${w.id})" class="px-4 py-2 rounded-xl text-sm font-bold ${isLearned ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-700'} transition hover:scale-105">
                ${isLearned ? '✅ Đã học' : '📌 Đánh dấu đã học'}
            </button>
            <button onclick="toggleFavorite(${w.id})" class="px-4 py-2 rounded-xl text-sm font-bold ${isFav ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-700'} transition hover:scale-105">
                ${isFav ? '⭐ Yêu thích' : '☆ Thêm yêu thích'}
            </button>
        </div>
    `;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.dataset.currentId = id;
}

function closeModal() {
    const modal = document.getElementById('word-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function toggleFavorite(id) {
    if (favoriteWords.includes(id)) {
        favoriteWords = favoriteWords.filter(x => x !== id);
        showToast('⭐ Đã bỏ yêu thích', 'warning', 1500);
    } else {
        favoriteWords.push(id);
        showToast('⭐ Đã thêm vào yêu thích', 'success', 1500);
    }
    localStorage.setItem('favoriteWords', JSON.stringify(favoriteWords));
    renderVocab(document.getElementById('vocab-search')?.value || '');
    updateProgress();
    const modal = document.getElementById('word-modal');
    if (!modal.classList.contains('hidden')) {
        showWord(parseInt(modal.dataset.currentId));
    }
}

function toggleLearned(id) {
    if (learnedWords.includes(id)) {
        learnedWords = learnedWords.filter(x => x !== id);
    } else {
        learnedWords.push(id);
        showToast('📌 Đã đánh dấu đã học!', 'success', 1500);
    }
    localStorage.setItem('learnedWords', JSON.stringify(learnedWords));
    renderVocab(document.getElementById('vocab-search')?.value || '');
    updateProgress();
    const modal = document.getElementById('word-modal');
    if (!modal.classList.contains('hidden')) {
        showWord(id);
    }
}

function toggleLearnedFilter() {
    showLearnedOnly = !showLearnedOnly;
    const btn = document.getElementById('learned-toggle');
    btn.classList.toggle('bg-blue-100');
    btn.classList.toggle('border-blue-300');
    btn.textContent = showLearnedOnly ? '📌 Tất cả' : '📌 Đã học';
    renderVocab(document.getElementById('vocab-search')?.value || '');
}

function filterVocab(cat) {
    currentFilter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
    if (btn) btn.classList.add('active');
    renderVocab(document.getElementById('vocab-search')?.value || '');
}

function shuffleVocab() {
    const grid = document.getElementById('vocab-grid');
    const cards = Array.from(grid.children);
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        grid.appendChild(cards[j]);
    }
    showToast('🎲 Đã xáo trộn!', 'success', 1500);
}



function renderVocab(search = '') {
    const grid = document.getElementById('vocab-grid');
    let filtered = vocabData.filter(v =>
        v.word.toLowerCase().includes(search.toLowerCase()) ||
        v.meaning.toLowerCase().includes(search.toLowerCase())
    );
    if (currentFilter === 'fav') {
        filtered = filtered.filter(v => favoriteWords.includes(v.id));
    } else if (currentFilter !== 'all') {
        filtered = filtered.filter(v => v.cat === currentFilter);
    }
    if (showLearnedOnly) {
        filtered = filtered.filter(v => learnedWords.includes(v.id));
    }
    const emojis = ['🧠'];
//	['🧠', '👤', '🔍', '🤔', '📖', '💪', '🧩', '📚', '🛡️', '🏋️', '🥗', '😴', '🧘', '🚴', '📝', '✏️', '📌', '⭐', '🎯', '🏆', '⭐'];
    grid.innerHTML = filtered.map((v, i) => {
        const isLearned = learnedWords.includes(v.id);
        const isFav = favoriteWords.includes(v.id);
        return `
        <div onclick="showWord(${v.id})" class="vocab-card bg-white p-4 rounded-2xl border border-slate-100 shadow-soft hover:border-blue-200 cursor-pointer ${isLearned ? 'border-l-4 border-l-blue-500' : ''} ${isFav ? 'border-t-4 border-t-amber-400' : ''}">
            <div class="flex justify-between items-start">
                <span class="text-[10px] text-slate-400 font-bold">#${v.id}</span>
                <span class="badge-cat ${v.cat}">${v.cat === 'n' ? 'Danh từ' : v.cat === 'v' ? 'Động từ' : v.cat === 'adj' ? 'Tính từ' : v.cat === 'adv' ? 'Trạng từ' : 'Liên từ'}</span>
            </div>
            <div class="text-3xl text-center my-1">${emojis[(v.id-1) % emojis.length]}</div>
            <h4 class="text-lg font-bold text-slate-800 text-center hover:text-blue-600 transition">${v.word} ${isFav ? '⭐' : ''}</h4>
            <p class="text-[10px] text-slate-400 text-center italic">${v.phonetic}</p>
            <p class="text-sm text-slate-600 border-t border-slate-100 pt-2 mt-2 text-center font-medium">${v.meaning}</p>
            <p class="text-[10px] text-slate-400 text-center mt-1 truncate">📖 3 ví dụ</p>
            ${isLearned ? '<div class="text-[10px] text-blue-600 font-bold text-center mt-1">✅ Đã học</div>' : ''}
        </div>
    `}).join('');
    updateProgress();
}







function updateProgress() {
    const total = vocabData.length;
    const learned = learnedWords.length;
    const favs = favoriteWords.length;

    const vocabProgressText = document.getElementById('vocab-progress-text');
    const vocabProgressFill = document.getElementById('vocab-progress-fill');
    const exerciseProgressText = document.getElementById('exercise-progress-text');
    const exerciseProgressFill = document.getElementById('exercise-progress-fill');
    const statLearned = document.getElementById('stat-learned');
    const statFavorites = document.getElementById('stat-favorites');
    const statScore = document.getElementById('stat-score');
    const statTime = document.getElementById('stat-time');

    if (vocabProgressText) vocabProgressText.textContent = `${learned}/${total}`;
    if (vocabProgressFill) vocabProgressFill.style.width = `${(learned/total)*100}%`;

    const scoreText = document.getElementById('score-badge');
    const done = scoreText ? parseInt(scoreText.textContent.split('/')[0]) || 0 : 0;
    if (exerciseProgressText) exerciseProgressText.textContent = `${done}/100`;
    if (exerciseProgressFill) exerciseProgressFill.style.width = `${done}%`;

    if (statLearned) statLearned.textContent = learned;
    if (statFavorites) statFavorites.textContent = favs;
    if (statScore) statScore.textContent = done;
    const minutes = Math.round((learned * 1 + done * 0.5) / 60 * 100) / 100;
    if (statTime) statTime.textContent = minutes.toFixed(1);
}

// ===== RENDER BÀI ĐỌC TỔNG QUAN =====
function renderDashboardEssay() {
    const container = document.getElementById('essay-preview');
    const transContainer = document.getElementById('essay-translation');

    const vocabMap = {};
    vocabData.forEach(v => { vocabMap[v.word.toLowerCase()] = v; });

    const fullText = essayData.map(p => p.text).join(' ');
    const fullTranslation = essayData.map(p => p.vi).join(' ');

    const words = fullText.split(/(\s+|[.,!?;:])/);
    const processed = words.map(token => {
        const trimmed = token.replace(/^[^a-zA-Z']+/, '').replace(/[^a-zA-Z']+$/, '');
        const lower = trimmed.toLowerCase();
        if (vocabMap[lower]) {
            return `<span class="clickable-word" onclick="showWord(${vocabMap[lower].id})">${token}</span>`;
        }
        return token;
    }).join('');

    container.innerHTML = `<p class="mb-0">${processed}</p>`;
    transContainer.innerHTML = `<p class="mb-0">${fullTranslation}</p>`;
}

// ===== NGHE LẶP TỔNG QUAN =====
function playLoop() {
    if (isLooping) { stopLoop(); return; }
    const full = essayData.map(p => p.text).join('. ');
    if (!window.speechSynthesis) return showToast('❌ Trình duyệt không hỗ trợ', 'error');
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(full);
    u.lang = 'en-US';
    u.rate = speechRate;
    u.pitch = 1;
    if (selectedVoice) {
        const voices = window.speechSynthesis.getVoices();
        const selected = voices.find(v => v.name === selectedVoice);
        if (selected) u.voice = selected;
    }
    u.onend = function() {
        if (isLooping) {
            const next = new SpeechSynthesisUtterance(full);
            next.lang = 'en-US';
            next.rate = speechRate;
            next.pitch = 1;
            if (selectedVoice) {
                const voices = window.speechSynthesis.getVoices();
                const selected = voices.find(v => v.name === selectedVoice);
                if (selected) next.voice = selected;
            }
            next.onend = this.onend;
            window.speechSynthesis.speak(next);
            loopUtterance = next;
        }
    };
    isLooping = true;
    loopUtterance = u;
    window.speechSynthesis.speak(u);
    document.getElementById('btn-play-loop').classList.add('hidden');
    document.getElementById('btn-stop-loop').classList.remove('hidden');
    showToast('🔁 Đang đọc lặp...', 'success', 2000);
}

function stopLoop() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    isLooping = false;
    loopUtterance = null;
    document.getElementById('btn-play-loop').classList.remove('hidden');
    document.getElementById('btn-stop-loop').classList.add('hidden');
    showToast('⏹ Đã dừng', 'warning', 1500);
}

// ===== GHI ÂM TOÀN BÀI =====
async function toggleFullRecording() {
    const btn = document.getElementById('btn-record-full');
    if (isFullRecording) {
        if (fullRecorder && fullRecorder.state === 'recording') fullRecorder.stop();
        return;
    }
    if (fullRecordingUrl) {
        URL.revokeObjectURL(fullRecordingUrl);
        fullRecordingUrl = null;
        fullAudioChunks = [];
    }
    const oldPlay = document.getElementById('play-full-recording');
    if (oldPlay) oldPlay.remove();
    const oldDel = document.getElementById('delete-full-recording');
    if (oldDel) oldDel.remove();

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        fullRecorder = new MediaRecorder(stream);
        fullAudioChunks = [];
        fullRecorder.ondataavailable = e => fullAudioChunks.push(e.data);
        fullRecorder.onstop = () => {
            const blob = new Blob(fullAudioChunks, { type: 'audio/webm' });
            fullRecordingUrl = URL.createObjectURL(blob);
            isFullRecording = false;
            btn.classList.remove('recording');
            btn.textContent = '🎤 Ghi âm';
            showToast('✅ Đã ghi âm toàn bài!', 'success', 1500);
            stream.getTracks().forEach(t => t.stop());

            const parent = btn.parentNode;
            const playBtn = document.createElement('button');
            playBtn.id = 'play-full-recording';
            playBtn.className = 'text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-xl border border-amber-200 transition flex items-center gap-1';
            playBtn.innerHTML = '▶️ Nghe lại';
            playBtn.onclick = () => {
                if (fullRecordingUrl) {
                    const a = new Audio(fullRecordingUrl);
                    a.play();
                    showToast('▶️ Đang phát bản ghi', 'success', 1500);
                }
            };
            const delBtn = document.createElement('button');
            delBtn.id = 'delete-full-recording';
            delBtn.className = 'text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-xl border border-red-200 transition flex items-center gap-1';
            delBtn.innerHTML = '🗑️ Xóa';
            delBtn.onclick = function() {
                if (fullRecordingUrl) {
                    URL.revokeObjectURL(fullRecordingUrl);
                    fullRecordingUrl = null;
                    fullAudioChunks = [];
                    const play = document.getElementById('play-full-recording');
                    if (play) play.remove();
                    const del = document.getElementById('delete-full-recording');
                    if (del) del.remove();
                    showToast('🗑️ Đã xóa bản ghi', 'warning', 1500);
                }
            };
            parent.insertBefore(playBtn, btn.nextSibling);
            parent.insertBefore(delBtn, btn.nextSibling);
        };
        fullRecorder.start();
        isFullRecording = true;
        btn.classList.add('recording');
        btn.textContent = '⏹ Dừng ghi';
        showToast('🔴 Đang ghi âm...', 'success', 1500);
        const oldPlay2 = document.getElementById('play-full-recording');
        if (oldPlay2) oldPlay2.remove();
        const oldDel2 = document.getElementById('delete-full-recording');
        if (oldDel2) oldDel2.remove();
    } catch (err) {
        alert('Không thể truy cập microphone.');
        console.error(err);
    }
}

function toggleTranslateAll() {
    const trans = document.getElementById('essay-translation');
    const btn = document.getElementById('translate-all-btn');
    if (trans.classList.contains('hidden')) {
        trans.classList.remove('hidden');
        btn.textContent = '🇻🇳 Ẩn dịch';
        btn.classList.add('bg-blue-200');
    } else {
        trans.classList.add('hidden');
        btn.textContent = '🇻🇳 Dịch';
        btn.classList.remove('bg-blue-200');
    }
}

// ===== RENDER KHUNG TỪ VỰNG TRONG TAB BÀI ĐỌC =====
function renderReadingVocab() {
    const container = document.getElementById('reading-vocab-cloud');
    if (!container) return;
    const orderedWords = [];
    for (const wordName of readingVocabOrder) {
        const found = vocabData.find(v => v.word.toLowerCase() === wordName.toLowerCase());
        if (found) {
            orderedWords.push(found);
        }
    }
    container.innerHTML = orderedWords.map(v =>
        `<span class="vocab-list-item" onclick="showWord(${v.id})">${v.word} <span class="text-xs text-slate-500 ml-1">(${v.meaning})</span></span>`
    ).join('');
}

// ===== READING TAB =====
function renderReading() {
    const container = document.getElementById('essay-container');
    container.innerHTML = essayData.map((p, idx) => {
        const words = p.text.split(/\s+/);
        const highlighted = words.map(w => {
            const clean = w.replace(/[^a-zA-Z']/g, '');
            const found = vocabData.find(v => v.word.toLowerCase() === clean.toLowerCase());
            if (found) {
                return `<span class="clickable-word" onclick="showWord(${found.id})">${w}</span>`;
            }
            return w;
        }).join(' ');
        const hasRecording = (recording.recordedIndex === idx && recording.url);
        return `
        <div id="para-card-${idx}" class="paragraph-card bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div class="flex items-center justify-between mb-2">
                <span class="bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-0.5 rounded-full">Đoạn ${idx+1}</span>
                <div class="flex gap-2">
                    <button onclick="toggleParagraphLoop(${idx})" id="p-btn-${idx}" class="text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1 rounded-xl flex items-center gap-1">🔁 Nghe lặp</button>
                    <button onclick="toggleRecording(${idx})" id="rec-btn-${idx}" class="mic-btn text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-300 px-3 py-1 rounded-xl flex items-center gap-1 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                        Ghi âm
                    </button>
                    <button onclick="playRecording(${idx})" id="play-rec-${idx}" class="${hasRecording ? '' : 'hidden'} text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1 rounded-xl flex items-center gap-1">▶️ Nghe lại</button>
                    <button onclick="deleteRecording(${idx})" id="del-rec-${idx}" class="${hasRecording ? '' : 'hidden'} text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-1 rounded-xl flex items-center gap-1">🗑️ Xóa</button>
                    <button onclick="toggleTranslate(${idx})" class="text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1 rounded-xl flex items-center gap-1">🇻🇳 Dịch</button>
                </div>
            </div>
            <p class="text-slate-800 text-[17px] leading-[2]">${highlighted}</p>
            <div id="translate-${idx}" class="translate-box" style="display: none;">${p.vi}</div>
        </div>
    `}).join('');

    renderReadingVocab();
}

function toggleTranslate(idx) {
    const box = document.getElementById('translate-' + idx);
    if (box) {
        box.style.display = (box.style.display === 'none' || box.style.display === '') ? 'block' : 'none';
    }
}

function toggleParagraphLoop(idx) {
    if (isParagraphToggling) return;
    isParagraphToggling = true;

    const btn = document.getElementById('p-btn-' + idx);

    // Dừng audio player nếu đang phát
    const mainAudio = document.getElementById('main-audio');
    if (mainAudio && !mainAudio.paused) {
        mainAudio.pause();
        mainAudio.currentTime = 0;
        document.getElementById('audio-progress-bar').style.width = '0%';
        document.getElementById('audio-current').textContent = '0:00';
    }

    // Nếu đang lặp chính đoạn này → DỪNG
    if (paragraphLoop.active && paragraphLoop.index === idx) {
        // QUAN TRỌNG: tắt active TRƯỚC khi cancel để tránh onend gọi lại speak
        paragraphLoop.active = false;
        paragraphLoop.index = null;
        paragraphLoop.utterance = null;

        if (window.speechSynthesis) window.speechSynthesis.cancel();

        if (btn) {
            btn.textContent = '🔁 Nghe lặp';
            btn.className = 'text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1 rounded-xl flex items-center gap-1';
        }
        document.getElementById('reading-indicator')?.classList.add('hidden');
        for (let i = 0; i < 4; i++) {
            const card = document.getElementById('para-card-' + i);
            if (card) card.classList.remove('active');
        }
        showToast('⏹ Đã dừng lặp đoạn', 'warning', 1500);
        isParagraphToggling = false;
        return;
    }

    // Nếu đang lặp đoạn khác → dừng đoạn đó trước
    if (paragraphLoop.active) {
        paragraphLoop.active = false;
        paragraphLoop.index = null;
        paragraphLoop.utterance = null;
        if (window.speechSynthesis) window.speechSynthesis.cancel();
        // Reset tất cả nút
        for (let i = 0; i < 4; i++) {
            const oldBtn = document.getElementById('p-btn-' + i);
            if (oldBtn) {
                oldBtn.textContent = '🔁 Nghe lặp';
                oldBtn.className = 'text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1 rounded-xl flex items-center gap-1';
            }
        }
    }

    // BẮT ĐẦU lặp đoạn mới
    const text = essayData[idx].text;
    if (!window.speechSynthesis) {
        showToast('❌ Trình duyệt không hỗ trợ', 'error');
        isParagraphToggling = false;
        return;
    }

    paragraphLoop.active = true;
    paragraphLoop.index = idx;
    paragraphLoop.text = text;

    if (btn) {
        btn.textContent = '⏹ Dừng lặp';
        btn.className = 'text-xs font-bold text-white bg-red-500 hover:bg-red-600 border border-red-300 px-3 py-1 rounded-xl flex items-center gap-1';
    }

    const speak = () => {
        if (!paragraphLoop.active) return;
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        u.rate = speechRate;
        u.pitch = 1;
        if (selectedVoice) {
            const voices = window.speechSynthesis.getVoices();
            const selected = voices.find(v => v.name === selectedVoice);
            if (selected) u.voice = selected;
        }
        u.onend = function() {
            if (paragraphLoop.active) speak();
        };
        paragraphLoop.utterance = u;
        window.speechSynthesis.speak(u);
        document.getElementById('reading-indicator')?.classList.remove('hidden');
        for (let i = 0; i < 4; i++) {
            const card = document.getElementById('para-card-' + i);
            if (card) card.classList.remove('active');
        }
        const activeCard = document.getElementById('para-card-' + idx);
        if (activeCard) activeCard.classList.add('active');
    };

    speak();
    showToast('🔁 Đang lặp đoạn ' + (idx + 1), 'success', 1500);
    isParagraphToggling = false;
}

function playFullText() {
    stopAllAudio();
    const full = essayData.map(p => p.text).join(' ');
    const ok = playAudio(full, () => { stopAllAudio(); });
    if (ok) {
        document.getElementById('reading-indicator').classList.remove('hidden');
        document.getElementById('cancel-read').classList.remove('hidden');
        for (let i = 0; i < 4; i++) {
            const btn = document.getElementById('p-btn-' + i);
            if (btn) { btn.className = 'text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1 rounded-xl flex items-center gap-1';
                btn.textContent = '🔁 Nghe lặp'; }
            const card = document.getElementById('para-card-' + i);
            if (card) card.classList.remove('active');
        }
    }
}

// ===== RECORDING =====
function deleteRecording(index) {
    if (recording.recordedIndex === index) {
        recording.url = null;
        recording.recordedIndex = null;
        const playBtn = document.getElementById('play-rec-' + index);
        const delBtn = document.getElementById('del-rec-' + index);
        if (playBtn) playBtn.classList.add('hidden');
        if (delBtn) delBtn.classList.add('hidden');
        const recBtn = document.getElementById('rec-btn-' + index);
        if (recBtn) {
            recBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                Ghi âm
            `;
            recBtn.className = 'mic-btn text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-300 px-3 py-1 rounded-xl flex items-center gap-1 transition';
        }
        showToast('🗑️ Đã xóa bản ghi', 'warning', 1500);
    }
}

async function toggleRecording(index) {
    if (recording.isRecording) {
        if (recording.activeIndex === index) {
            stopRecording();
        } else {
            stopRecording();
            await startRecording(index);
        }
    } else {
        await startRecording(index);
    }
}

async function startRecording(index) {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        const chunks = [];
        recorder.ondataavailable = e => chunks.push(e.data);
        recorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'audio/webm' });
            const url = URL.createObjectURL(blob);
            recording.url = url;
            recording.chunks = chunks;
            const recordedIdx = recording.activeIndex;
            recording.recordedIndex = recordedIdx;
            recording.activeIndex = null;
            const playBtn = document.getElementById('play-rec-' + recordedIdx);
            const delBtn = document.getElementById('del-rec-' + recordedIdx);
            if (playBtn) playBtn.classList.remove('hidden');
            if (delBtn) delBtn.classList.remove('hidden');
            const recBtn = document.getElementById('rec-btn-' + recordedIdx);
            if (recBtn) {
                recBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                    Ghi âm
                `;
                recBtn.className = 'mic-btn text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 border border-blue-300 px-3 py-1 rounded-xl flex items-center gap-1 transition';
            }
            recording.isRecording = false;
            recording.recorder = null;
            showToast('🎤 Đã ghi âm xong!', 'success', 2000);
        };
        recorder.start();
        recording.recorder = recorder;
        recording.isRecording = true;
        recording.activeIndex = index;
        const recBtn = document.getElementById('rec-btn-' + index);
        if (recBtn) {
            recBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="1"/></svg>
                Dừng
            `;
            recBtn.className = 'mic-btn text-xs font-bold text-white bg-red-600 hover:bg-red-700 border border-red-300 px-3 py-1 rounded-xl flex items-center gap-1 transition recording';
        }
        const playBtn = document.getElementById('play-rec-' + index);
        const delBtn = document.getElementById('del-rec-' + index);
        if (playBtn) playBtn.classList.add('hidden');
        if (delBtn) delBtn.classList.add('hidden');
    } catch (err) {
        alert('Không thể truy cập microphone. Vui lòng cho phép quyền truy cập.');
        console.error(err);
    }
}

function stopRecording() {
    if (recording.recorder && recording.isRecording) {
        recording.recorder.stop();
        if (recording.recorder.stream) {
            recording.recorder.stream.getTracks().forEach(track => track.stop());
        }
    }
}

function playRecording(index) {
    if (recording.url && recording.recordedIndex === index) {
        const audioEl = new Audio(recording.url);
        audioEl.play();
    } else {
        alert('Chưa có bản ghi cho đoạn này. Hãy ghi âm trước.');
    }
}

// ===== GRAMMAR =====
function renderGrammar() {
    const grid = document.getElementById('grammar-grid');
    grid.innerHTML = grammarData.map((g, idx) => `
        <div class="grammar-card bg-white p-5 rounded-2xl border border-blue-100 shadow-soft">
            <div class="flex items-start justify-between">
                <h3 class="text-lg font-extrabold text-blue-700">${g.title}</h3>
                <span class="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">#${idx+1}</span>
            </div>
            <div class="bg-slate-50 p-2 rounded-lg border border-slate-100 my-2"><code class="text-sm font-mono text-slate-700">${g.formula}</code></div>
            <p class="text-sm text-slate-600">${g.desc}</p>
            <div class="bg-blue-50/60 p-3 rounded-xl border border-blue-100 my-3">
                <p class="text-sm font-semibold text-slate-700">📌 "${g.example}"</p>
                <p class="text-sm text-slate-500">📝 ${g.vi}</p>
                <button onclick="playAudio('${g.example.replace(/'/g, "\\'")}')" class="text-[10px] text-blue-600 font-bold hover:underline mt-1">🔊 Nghe</button>
            </div>
            <div class="text-xs text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100 space-y-1">
                <p class="font-semibold text-slate-600">📖 Thêm:</p>
                ${g.extra.map(ex => `<div class="pl-2 border-l-2 border-blue-300"><p class="text-slate-700">"${ex.en}"</p><p class="text-slate-500">📝 ${ex.vi}</p></div>`).join('')}
            </div>
        </div>
    `).join('');

    const sidebar = document.getElementById('grammar-sidebar');
    sidebar.innerHTML = grammarData.map(g => `
        <div class="bg-slate-50 p-3 rounded-xl border border-slate-100">
            <p class="font-bold text-blue-700 text-[11px]">${g.title}</p>
            <p class="text-[10px] text-slate-500">${g.formula}</p>
        </div>
    `).join('');
}

// ===== EXERCISES =====
function switchExercise(id) {
    currentExercise = id;
    document.querySelectorAll('.exercise-tab').forEach(b => b.classList.remove('active'));
    document.getElementById('ex-tab-' + id).classList.add('active');
    document.querySelectorAll('.exercise-section').forEach(el => el.classList.add('hidden'));
    document.getElementById('ex-' + id).classList.remove('hidden');
}

function updateScore() {
    let total = 0;
    document.querySelectorAll('#ex-1 .quiz-input').forEach(inp => {
        if (inp.value.trim().toLowerCase() === inp.dataset.answer) total++;
    });
    document.querySelectorAll('#ex-2 .quiz-radio:checked').forEach(r => {
        if (r.value === r.dataset.answer) total++;
    });
    total += Object.keys(matchAnswers).length;
    total += Object.keys(wordOrderAnswers).length;
    document.getElementById('score-badge').textContent = total + '/100';
    updateProgress();
}

function renderEx1() {
    const c = document.getElementById('ex-1');
    c.innerHTML = `
        <div class="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 mb-4"><p class="text-sm font-semibold text-blue-800">📝 Điền từ (15 câu)</p></div>
        ${ex1Data.map(q => `
            <div class="bg-slate-50/80 p-4 rounded-2xl border border-slate-100 space-y-2">
                <p class="font-bold text-sm text-slate-700">${q.q}</p>
                <input type="text" data-answer="${q.a}" class="quiz-input w-full px-4 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white font-medium" placeholder="Nhập từ...">
                <p class="result-feedback hidden text-xs font-bold"></p>
            </div>
        `).join('')}
    `;
}

function renderEx2() {
    const c = document.getElementById('ex-2');
    const shuffledData = ex2Data.map(q => {
        const shuffledOpts = [...q.opts].sort(() => Math.random() - 0.5);
        return { ...q, opts: shuffledOpts };
    });
    c.innerHTML = `
        <div class="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 mb-4"><p class="text-sm font-semibold text-blue-800">🔘 Trắc nghiệm (15 câu)</p></div>
        ${shuffledData.map(q => `
            <div class="bg-slate-50/80 p-4 rounded-2xl border border-slate-100 space-y-3">
                <p class="font-bold text-sm text-slate-700">${q.q}</p>
                <div class="grid grid-cols-2 gap-2">
                    ${q.opts.map(opt => `
                        <label class="quiz-option flex items-center gap-2 p-2.5 bg-white hover:bg-blue-50 border border-slate-200 rounded-xl cursor-pointer text-xs font-medium transition">
                            <input type="radio" name="q2-${q.q}" value="${opt}" class="quiz-radio h-4 w-4 text-blue-600 focus:ring-blue-400" data-answer="${q.a}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
                <p class="result-feedback hidden text-xs font-bold"></p>
            </div>
        `).join('')}
    `;
}

function renderEx3() {
    const c = document.getElementById('ex-3');
    matchAnswers = {};
    const shuffled = [...ex3Data].sort(() => Math.random() - 0.5);
    c.innerHTML = `
        <div class="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 mb-4"><p class="text-sm font-semibold text-blue-800">🎯 Ghép từ với nghĩa (15 cặp)</p></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><p class="text-xs font-bold text-slate-500 uppercase">Từ vựng</p>
                ${ex3Data.map(item => `
                    <div class="match-item bg-white p-3 rounded-xl border border-slate-200 mb-2 shadow-sm" draggable="true" data-id="${item.word}" data-word="${item.word}" data-mean="${item.mean}">
                        <span class="font-bold text-blue-600">${item.word}</span>
                    </div>
                `).join('')}
            </div>
            <div><p class="text-xs font-bold text-slate-500 uppercase">Nghĩa</p>
                ${shuffled.map(item => `
                    <div class="match-zone p-3 rounded-xl border-2 border-dashed border-slate-300 mb-2" data-id="${item.word}" data-mean="${item.mean}">
                        <span class="text-slate-600">${item.mean}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <p id="match-result" class="text-xs font-bold text-center mt-4 hidden"></p>
    `;
    setupDragDrop();
}

function setupDragDrop() {
    const items = document.querySelectorAll('.match-item');
    const zones = document.querySelectorAll('.match-zone');
    let dragged = null;
    items.forEach(el => {
        el.addEventListener('dragstart', e => { dragged = el;
            el.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move'; });
        el.addEventListener('dragend', () => { el.classList.remove('dragging'); });
    });
    zones.forEach(zone => {
        zone.addEventListener('dragover', e => { e.preventDefault();
            zone.classList.add('drag-over'); });
        zone.addEventListener('dragleave', () => { zone.classList.remove('drag-over'); });
        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            if (!dragged) return;
            if (dragged.dataset.id === zone.dataset.id) {
                zone.classList.add('filled');
                zone.innerHTML = `<span class="text-blue-600 font-bold">✓ ${dragged.dataset.word}</span>`;
                dragged.style.opacity = '0.4';
                dragged.draggable = false;
                dragged.classList.add('dropped');
                matchAnswers[dragged.dataset.id] = true;
                const total = ex3Data.length;
                const done = Object.keys(matchAnswers).length;
                const hint = document.getElementById('match-result');
                hint.classList.remove('hidden');
                if (done === total) {
                    hint.textContent = '🎉 Chúc mừng! Bạn đã ghép đúng tất cả!';
                    hint.className = 'text-xs font-bold text-center mt-4 text-blue-600';
                    updateScore();
                } else {
                    hint.textContent = `✅ Đã ghép ${done}/${total}`;
                    hint.className = 'text-xs font-bold text-center mt-4 text-blue-600';
                }
            } else {
                zone.classList.add('wrong');
                setTimeout(() => zone.classList.remove('wrong'), 400);
                document.getElementById('match-result').textContent = '❌ Không khớp!';
                document.getElementById('match-result').className =
                    'text-xs font-bold text-center mt-4 text-red-600';
                document.getElementById('match-result').classList.remove('hidden');
            }
            dragged = null;
        });
    });
}

// ===== FLASHCARD VỚI NÚT ĐỌC =====
let flashcardData = [];

function renderEx4() {
    const c = document.getElementById('ex-4');
    flashcardIndex = 0;
    const totalCards = flashcardData.length;
    c.innerHTML = `
        <div class="bg-purple-50/60 p-4 rounded-2xl border border-purple-100 mb-4 flex items-center justify-between flex-wrap">
            <p class="text-sm font-semibold text-purple-800">🃏 Flashcard (${totalCards} thẻ)</p>
            <div class="flex items-center gap-3">
                <button onclick="shuffleFlashcards()" class="text-xs bg-purple-100 hover:bg-purple-200 px-3 py-1 rounded-xl transition">🔀 Xáo trộn</button>
            </div>
        </div>
        <div class="flex flex-col items-center">
            <div class="flashcard w-full max-w-md" onclick="flipCard()">
                <div class="flashcard-inner">
                    <!-- Mặt trước -->
                    <div class="flashcard-front flex flex-col items-center justify-center p-4">
                        <span class="text-3xl font-bold text-blue-600" id="fc-word"></span>
                        <span class="text-sm text-slate-500" id="fc-phonetic"></span>
                        <span class="text-xs text-slate-400" id="fc-type"></span>
                        <div class="mt-2 flex items-center gap-2">
                            <span class="text-xs text-slate-400">👆 Nhấp để lật</span>
                            <button class="fc-audio-btn" id="fc-play-front" onclick="event.stopPropagation(); playAudio(currentWord)" title="Nghe từ">🔊</button>
                        </div>
                    </div>
                    <!-- Mặt sau -->
                    <div class="flashcard-back flex flex-col items-center justify-start p-4 overflow-auto" style="max-height: 300px;">
                        <span class="text-xl font-bold text-slate-800" id="fc-mean"></span>
                        <div class="text-xs text-slate-600 mt-2 space-y-2 w-full text-left" id="fc-examples"></div>
                        <div class="mt-2 flex items-center gap-2">
                            <span class="text-xs text-slate-400">👆 Nhấp để lật lại</span>
                            <button class="fc-audio-btn" id="fc-play-back" onclick="event.stopPropagation(); playAudio(currentWord)" title="Nghe từ">🔊</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-4 mt-4">
                <button onclick="prevCard()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition text-sm font-medium">&larr; Trước</button>
                <span class="text-sm font-bold text-slate-600" id="fc-counter">1/${totalCards}</span>
                <button onclick="nextCard()" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition text-sm font-medium">Sau &rarr;</button>
            </div>
        </div>
    `;
    updateFC(0);
}

function toggleFlashcardReverse() {
    const checked = document.getElementById('flashcard-reverse').checked;
    localStorage.setItem('flashcardReverse', checked);
    renderEx4();
}

function flipCard() { document.querySelector('.flashcard')?.classList.toggle('flipped'); }

function updateFC(idx) {
    const data = flashcardData[idx];
    if (!data) return;
    const wordEl = document.getElementById('fc-word');
    const phoneticEl = document.getElementById('fc-phonetic');
    const typeEl = document.getElementById('fc-type');
    const meanEl = document.getElementById('fc-mean');
    const examplesEl = document.getElementById('fc-examples');
    const counterEl = document.getElementById('fc-counter');

    if (wordEl) wordEl.textContent = data.word;
    if (phoneticEl) phoneticEl.textContent = data.phonetic;
    if (typeEl) typeEl.textContent = data.type;
    if (meanEl) meanEl.textContent = data.meaning;
    if (examplesEl) {
        // Thêm nút 🔊 cho mỗi câu ví dụ
        examplesEl.innerHTML = `
            <div class="example-item border-b border-slate-100 pb-2 mb-2">
                <div class="flex items-start gap-2">
                    <span class="font-medium">${data.ex1}</span>
                    <button onclick="event.stopPropagation(); playAudio('${data.ex1.replace(/'/g, "\\'")}')" 
                            class="text-blue-500 hover:text-blue-700 text-sm flex-shrink-0" 
                            title="Nghe câu này">🔊</button>
                </div>
                <span class="text-slate-500 text-sm">${data.ex1_vi}</span>
            </div>
            <div class="example-item border-b border-slate-100 pb-2 mb-2">
                <div class="flex items-start gap-2">
                    <span class="font-medium">${data.ex2}</span>
                    <button onclick="event.stopPropagation(); playAudio('${data.ex2.replace(/'/g, "\\'")}')" 
                            class="text-blue-500 hover:text-blue-700 text-sm flex-shrink-0" 
                            title="Nghe câu này">🔊</button>
                </div>
                <span class="text-slate-500 text-sm">${data.ex2_vi}</span>
            </div>
            <div class="example-item">
                <div class="flex items-start gap-2">
                    <span class="font-medium">${data.ex3}</span>
                    <button onclick="event.stopPropagation(); playAudio('${data.ex3.replace(/'/g, "\\'")}')" 
                            class="text-blue-500 hover:text-blue-700 text-sm flex-shrink-0" 
                            title="Nghe câu này">🔊</button>
                </div>
                <span class="text-slate-500 text-sm">${data.ex3_vi}</span>
            </div>
        `;
    }
    if (counterEl) counterEl.textContent = (idx + 1) + '/' + flashcardData.length;
    document.querySelector('.flashcard')?.classList.remove('flipped');
    
    // Cập nhật nút nghe từ chính
    const frontBtn = document.getElementById('fc-play-front');
    const backBtn = document.getElementById('fc-play-back');
    const word = data.word;
    if (frontBtn) {
        frontBtn.onclick = function(e) { e.stopPropagation(); playAudio(word); };
    }
    if (backBtn) {
        backBtn.onclick = function(e) { e.stopPropagation(); playAudio(word); };
    }
    window.currentWord = word;
}

function nextCard() {
    if (flashcardIndex < flashcardData.length - 1) {
        flashcardIndex++;
        updateFC(flashcardIndex);
    }
}
function prevCard() {
    if (flashcardIndex > 0) {
        flashcardIndex--;
        updateFC(flashcardIndex);
    }
}

function shuffleFlashcards() {
    for (let i = flashcardData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcardData[i], flashcardData[j]] = [flashcardData[j], flashcardData[i]];
    }
    flashcardIndex = 0;
    updateFC(0);
    showToast('🃏 Đã xáo trộn flashcard!', 'success', 1500);
}

// ===== TYPING =====
function renderEx5() {
    const c = document.getElementById('ex-5');
    const sentence = ex5Data[typingIndex % ex5Data.length];
    c.innerHTML = `
        <div class="bg-orange-50/60 p-4 rounded-2xl border border-orange-100 mb-4"><p class="text-sm font-semibold text-orange-800">⌨️ Gõ chính tả (10 câu)</p></div>
        <div class="bg-white p-6 rounded-2xl border border-slate-200">
            <div class="flex justify-between items-center mb-2"><span class="text-sm font-semibold text-slate-600">📝 Gõ chính xác câu sau:</span><span class="text-xs text-slate-400">Câu ${typingIndex+1}/10</span></div>
            <div class="typing-practice font-mono bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4" id="typing-display">
                ${sentence.split('').map((ch, i) => `<span class="${i===0?'char-current':''}" data-idx="${i}">${ch}</span>`).join('')}
            </div>
            <input type="text" id="typing-input" class="w-full px-4 py-3 text-lg rounded-xl border-2 border-slate-200 focus:border-blue-400 focus:outline-none font-mono" placeholder="Bắt đầu gõ..." autofocus>
            <div class="flex justify-between mt-2 text-xs text-slate-400"><span>Lỗi: <span id="typing-errors">0</span></span><span>Tiến độ: <span id="typing-progress">0%</span></span></div>
            <div id="typing-result" class="hidden text-center font-bold mt-4"></div>
            <div class="flex gap-2 mt-4">
                <button onclick="nextTyping()" class="text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-xl transition font-medium">Câu tiếp →</button>
                <button onclick="resetTyping()" class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl transition font-medium">🔄 Làm lại</button>
            </div>
        </div>
    `;
    document.getElementById('typing-input')?.addEventListener('input', handleTyping);
}

function handleTyping(e) {
    const input = e.target;
    const val = input.value;
    const sentence = ex5Data[typingIndex % ex5Data.length];
    const chars = document.querySelectorAll('#typing-display span');
    let errors = 0,
        correct = 0;
    chars.forEach((sp, i) => {
        sp.classList.remove('char-correct', 'char-wrong', 'char-current');
        if (i < val.length) {
            if (val[i] === sentence[i]) { sp.classList.add('char-correct');
                correct++; } else { sp.classList.add('char-wrong');
                errors++; }
        } else if (i === val.length) sp.classList.add('char-current');
    });
    document.getElementById('typing-errors').textContent = errors;
    document.getElementById('typing-progress').textContent = Math.round((correct / sentence.length) * 100) + '%';
    if (val.length === sentence.length) {
        const res = document.getElementById('typing-result');
        res.classList.remove('hidden');
        if (errors === 0) { res.innerHTML = '🎉 Chính xác!';
            res.className = 'text-center font-bold mt-4 text-blue-600'; } else { res.innerHTML =
                '⚠️ Có ' + errors + ' lỗi. Thử lại!';
            res.className = 'text-center font-bold mt-4 text-amber-600'; }
    }
}

function nextTyping() {
    if (typingIndex < ex5Data.length - 1) { typingIndex++;
        renderEx5(); } else { alert('🎉 Hoàn thành 10 câu!');
        typingIndex = 0;
        renderEx5(); }
}

function resetTyping() { renderEx5(); }

// ===== WORD ORDER =====
function renderEx6() {
    const c = document.getElementById('ex-6');
    wordOrderAnswers = {};
    c.innerHTML = `
        <div class="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 mb-4"><p class="text-sm font-semibold text-blue-800">🔄 Sắp xếp từ (10 câu)</p></div>
        ${ex6Data.map(item => `
            <div class="bg-white p-4 rounded-2xl border border-slate-200 mb-4">
                <p class="text-xs font-bold text-slate-500 mb-2">Câu ${item.id}: Sắp xếp</p>
                <div class="flex flex-wrap gap-2 mb-3" id="bank-${item.id}">
                    ${item.words.map(w => `<span class="word-token px-3 py-1.5 bg-slate-100 rounded-lg text-sm hover:bg-blue-100 transition" data-word="${w}" onclick="pickWord(${item.id},'${w}',this)">${w}</span>`).join('')}
                </div>
                <div class="word-slot flex flex-wrap gap-2 min-h-[48px] p-2 border-2 border-dashed border-slate-300 rounded-xl" id="slot-${item.id}">
                    <span class="text-slate-400 text-sm">⬇️ Nhấp từ bên trên</span>
                </div>
                <div class="flex justify-between mt-2">
                    <button onclick="checkOrder(${item.id})" class="text-xs text-blue-600 hover:underline font-medium">✅ Kiểm tra</button>
                    <button onclick="resetOrder(${item.id})" class="text-xs text-slate-400 hover:underline">🔄 Làm lại</button>
                </div>
                <p id="order-result-${item.id}" class="text-xs font-bold mt-2 hidden"></p>
            </div>
        `).join('')}
    `;
}

function pickWord(id, word, el) {
    const slot = document.getElementById('slot-' + id);
    const bank = document.getElementById('bank-' + id);
    const ph = slot.querySelector('.text-slate-400');
    if (ph) ph.remove();
    const span = document.createElement('span');
    span.className = 'word-token px-3 py-1.5 bg-blue-100 rounded-lg text-sm hover:bg-red-100 transition cursor-pointer';
    span.textContent = word;
    span.dataset.word = word;
    span.onclick = function() { removeWord(id, word, this); };
    slot.appendChild(span);
    el.remove();
    document.getElementById('order-result-' + id).classList.add('hidden');
}

function removeWord(id, word, el) {
    const bank = document.getElementById('bank-' + id);
    const slot = document.getElementById('slot-' + id);
    el.remove();
    const sp = document.createElement('span');
    sp.className = 'word-token px-3 py-1.5 bg-slate-100 rounded-lg text-sm hover:bg-blue-100 transition cursor-pointer';
    sp.textContent = word;
    sp.dataset.word = word;
    sp.onclick = function() { pickWord(id, word, this); };
    bank.appendChild(sp);
    if (slot.children.length === 0) {
        const ph = document.createElement('span');
        ph.className = 'text-slate-400 text-sm';
        ph.textContent = '⬇️ Nhấp từ bên trên';
        slot.appendChild(ph);
    }
    document.getElementById('order-result-' + id).classList.add('hidden');
}

function checkOrder(id) {
    const slot = document.getElementById('slot-' + id);
    const res = document.getElementById('order-result-' + id);
    const words = Array.from(slot.querySelectorAll('.word-token')).map(el => el.textContent);
    const user = words.join(' ');
    const correct = ex6Data.find(d => d.id === id).correct;
    res.classList.remove('hidden');
    if (user.toLowerCase() === correct.toLowerCase()) {
        res.textContent = '✅ Chính xác!';
        res.className = 'text-xs font-bold mt-2 text-blue-600';
        wordOrderAnswers[id] = true;
        updateScore();
    } else {
        res.textContent = '❌ Chưa đúng. Đáp án: "' + correct + '"';
        res.className = 'text-xs font-bold mt-2 text-red-600';
    }
}

function resetOrder(id) {
    const slot = document.getElementById('slot-' + id);
    const bank = document.getElementById('bank-' + id);
    const res = document.getElementById('order-result-' + id);
    const words = Array.from(slot.querySelectorAll('.word-token'));
    words.forEach(el => {
        const sp = document.createElement('span');
        sp.className = 'word-token px-3 py-1.5 bg-slate-100 rounded-lg text-sm hover:bg-blue-100 transition cursor-pointer';
        sp.textContent = el.textContent;
        sp.dataset.word = el.textContent;
        sp.onclick = function() { pickWord(id, el.textContent, this); };
        bank.appendChild(sp);
        el.remove();
    });
    const ph = document.createElement('span');
    ph.className = 'text-slate-400 text-sm';
    ph.textContent = '⬇️ Nhấp từ bên trên';
    slot.appendChild(ph);
    res.classList.add('hidden');
    delete wordOrderAnswers[id];
}

// ===== QUESTIONS =====
function renderEx7() {
    const c = document.getElementById('ex-7');
    c.innerHTML = `
        <div class="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 mb-4"><p class="text-sm font-semibold text-blue-800">❓ Câu hỏi đọc hiểu (10 câu)</p></div>
        ${ex7Data.map((item, idx) => `
            <div class="bg-white p-4 rounded-2xl border border-slate-200 mb-4">
                <p class="font-bold text-sm text-slate-700">${idx+1}. ${item.q}</p>
                <button onclick="toggleAnswer(${idx})" class="btn-toggle-answer mt-2">Ẩn/Hiện đáp án</button>
                <div id="answer-${idx}" class="answer-box">
                    <strong>Đáp án:</strong> ${item.a}
                </div>
            </div>
        `).join('')}
    `;
}

function toggleAnswer(idx) {
    const box = document.getElementById('answer-' + idx);
    if (box) {
        box.classList.toggle('show');
    }
}

// ===== EVALUATE & RESET =====
function evaluateCurrent() {
    const ex = currentExercise;
    let correct = 0,
        total = 0;
    if (ex === 1) {
        const inputs = document.querySelectorAll('#ex-1 .quiz-input');
        total = inputs.length;
        inputs.forEach(inp => {
            const fb = inp.nextElementSibling;
            fb.classList.remove('hidden');
            if (inp.value.trim().toLowerCase() === inp.dataset.answer) {
                correct++;
                fb.textContent = '✅ Chính xác!';
                fb.className = 'result-feedback text-xs font-bold text-blue-600 mt-1';
                inp.className =
                    'quiz-input w-full px-4 py-2 text-sm rounded-xl border-2 border-blue-500 focus:outline-none bg-white font-medium';
            } else {
                fb.textContent = '❌ Đáp án: "' + inp.dataset.answer + '"';
                fb.className = 'result-feedback text-xs font-bold text-rose-600 mt-1';
                inp.className =
                    'quiz-input w-full px-4 py-2 text-sm rounded-xl border-2 border-rose-400 focus:outline-none bg-white font-medium';
            }
        });
    } else if (ex === 2) {
        const radios = document.querySelectorAll('#ex-2 .quiz-radio');
        const groups = {};
        radios.forEach(r => { const id = r.name; if (!groups[id]) groups[id] = []; groups[id].push(r); });
        total = Object.keys(groups).length;
        Object.keys(groups).forEach(id => {
            const group = groups[id];
            const checked = group.find(r => r.checked);
            const ans = group[0].dataset.answer;
            const parent = group[0].closest('.space-y-3');
            const fb = parent.querySelector('.result-feedback');
            fb.classList.remove('hidden');
            if (checked && checked.value === ans) { correct++;
                fb.textContent = '✅ Chính xác!';
                fb.className = 'result-feedback text-xs font-bold text-blue-600 mt-1'; } else {
                fb.textContent = '❌ Đáp án: "' + ans + '"';
                fb.className = 'result-feedback text-xs font-bold text-rose-600 mt-1'; }
        });
    } else if (ex === 3) { total = ex3Data.length;
        correct = Object.keys(matchAnswers).length; } else if (ex === 4) { alert('🃏 Flashcard dùng để học, không chấm điểm!');
        return; } else if (ex === 5) { alert('⌨️ Kết quả gõ chính tả hiển thị ở trên!'); return; } else if (ex === 6) {
        total = ex6Data.length;
        correct = Object.keys(wordOrderAnswers).length; } else if (ex === 7) { alert('📝 Bạn đã xem đáp án ở từng câu hỏi!');
        return; }
    const badge = document.getElementById('score-badge');
    const cur = parseInt(badge.textContent.split('/')[0]) || 0;
    const newScore = cur + correct;
    const newTotal = cur + total;
    badge.textContent = newScore + '/' + newTotal;
    const container = document.getElementById('ex-' + ex);
    const old = container.querySelector('.exercise-result');
    if (old) old.remove();
    const msg = document.createElement('div');
    const pct = Math.round((correct / total) * 100);
    msg.className = 'text-center font-bold p-3 rounded-xl mt-4 ' + (pct === 100 ? 'bg-blue-50 text-blue-700' :
        'bg-amber-50 text-amber-700');
    msg.textContent = pct === 100 ? '🎉 Hoàn thành 100%! Rất tốt!' : `📊 Kết quả: ${correct}/${total} đúng (${pct}%)`;
    msg.className += ' exercise-result';
    container.appendChild(msg);
    updateProgress();
    if (pct === 100) {
        showToast('🎉 Chúc mừng! Bạn đã hoàn thành xuất sắc!', 'success', 3000);
    } else if (pct >= 80) {
        showToast('👍 Khá tốt! Cố gắng thêm nhé!', 'success', 2000);
    } else {
        showToast('📖 Hãy ôn lại và thử lại!', 'warning', 2000);
    }
}

function resetCurrent() {
    const ex = currentExercise;
    if (ex === 1) {
        document.querySelectorAll('#ex-1 .quiz-input').forEach(inp => {
            inp.value = '';
            inp.className =
                'quiz-input w-full px-4 py-2 text-sm rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white font-medium';
            const fb = inp.nextElementSibling;
            fb.classList.add('hidden');
        });
    } else if (ex === 2) {
        document.querySelectorAll('#ex-2 .quiz-radio').forEach(r => r.checked = false);
        document.querySelectorAll('#ex-2 .result-feedback').forEach(f => f.classList.add('hidden'));
    } else if (ex === 3) { renderEx3(); } else if (ex === 4) { renderEx4(); } else if (ex === 5) { typingIndex = 0;
        renderEx5(); } else if (ex === 6) { renderEx6(); } else if (ex === 7) { renderEx7(); }
    const container = document.getElementById('ex-' + ex);
    const old = container.querySelector('.exercise-result');
    if (old) old.remove();
    showToast('🔄 Đã làm lại!', 'success', 1500);
}

// ===== ANALYSIS =====
function renderAnalysis() {
    const container = document.getElementById('analysis-container');
    let html = '';
    analysisData.forEach((item, idx) => {
        html += `
            <div class="analysis-card bg-white p-5 rounded-2xl border border-slate-200 shadow-soft">
                <div class="flex items-center justify-between">
                    <div class="sentence text-blue-700 dark:text-blue-400">Câu ${idx+1}: ${item.sentence}</div>
                    <button onclick="playAudio('${item.sentence.replace(/'/g, "\\'")}')" class="analysis-play-btn text-blue-600 hover:text-blue-800" title="Nghe câu này">🔊</button>
                </div>
                <div class="structure mt-2"><span class="font-semibold">Cấu trúc:</span> ${item.structure}</div>
                <div class="translation mt-1"><span class="font-semibold">Dịch:</span> ${item.translation}</div>
                <div class="pos mt-1"><span class="font-semibold">Từ loại:</span> <span>${item.pos}</span></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// ===== VOICE & RATE =====
function populateVoices() {
    const voices = window.speechSynthesis.getVoices();
    const selects = ['voice-select', 'voice-select-dashboard'];
    selects.forEach(id => {
        const select = document.getElementById(id);
        if (!select) return;
        select.innerHTML = '';
        const defaultOpt = document.createElement('option');
        defaultOpt.value = '';
        defaultOpt.textContent = '🔊 Mặc định';
        select.appendChild(defaultOpt);
        const enVoices = voices.filter(v => v.lang.startsWith('en'));
        const voiceList = enVoices.length > 0 ? enVoices : voices;
        voiceList.forEach(v => {
            const opt = document.createElement('option');
            opt.value = v.name;
            opt.textContent = `${v.name} (${v.lang})`;
            select.appendChild(opt);
        });
        const savedVoice = localStorage.getItem('selectedVoice');
        if (savedVoice) {
            select.value = savedVoice;
            selectedVoice = savedVoice;
        }
        select.addEventListener('change', () => {
            const val = select.value;
            selectedVoice = val;
            localStorage.setItem('selectedVoice', val);
            selects.forEach(id2 => {
                const sel2 = document.getElementById(id2);
                if (sel2 && sel2 !== select) {
                    sel2.value = val;
                }
            });
        });
    });
}

if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = populateVoices;
    setTimeout(populateVoices, 500);
}

const rateSlider = document.getElementById('speech-rate');
const rateSliderDash = document.getElementById('speech-rate-dashboard');
const rateDisplay = document.getElementById('rate-display');
const rateDisplayDash = document.getElementById('rate-display-dashboard');

function updateRate(value) {
    speechRate = parseFloat(value);
    if (rateDisplay) rateDisplay.textContent = speechRate.toFixed(1) + 'x';
    if (rateDisplayDash) rateDisplayDash.textContent = speechRate.toFixed(1) + 'x';
    localStorage.setItem('speechRate', speechRate);
}

if (rateSlider) {
    rateSlider.addEventListener('input', () => {
        const val = rateSlider.value;
        if (rateSliderDash) rateSliderDash.value = val;
        updateRate(val);
    });
}
if (rateSliderDash) {
    rateSliderDash.addEventListener('input', () => {
        const val = rateSliderDash.value;
        if (rateSlider) rateSlider.value = val;
        updateRate(val);
    });
}

const savedRate = localStorage.getItem('speechRate');
if (savedRate) {
    speechRate = parseFloat(savedRate);
    if (rateSlider) rateSlider.value = speechRate;
    if (rateSliderDash) rateSliderDash.value = speechRate;
    if (rateDisplay) rateDisplay.textContent = speechRate.toFixed(1) + 'x';
    if (rateDisplayDash) rateDisplayDash.textContent = speechRate.toFixed(1) + 'x';
}

// ===== INIT =====
function init() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark');
        document.querySelector('.dark-toggle').textContent = '☀️';
    }

    flashcardData = vocabData.slice();

    renderDashboardEssay();
    renderReading();
    renderVocab('');
    renderGrammar();
    renderEx1();
    renderEx2();
    renderEx3();
    renderEx4();
    renderEx5();
    renderEx6();
    renderEx7();
    renderAnalysis();
    switchExercise(1);
    updateProgress();

    document.querySelectorAll('.translate-box').forEach(el => el.style.display = 'none');

    document.getElementById('vocab-search')?.addEventListener('input', e => renderVocab(e.target.value));

    if (audio) {
        audio.addEventListener('timeupdate', updateAudioProgress);
        audio.addEventListener('loadedmetadata', () => {
            document.getElementById('audio-duration-label').textContent = formatTime(audio.duration);
        });
    }

    document.getElementById('word-modal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    const playLoopBtn = document.getElementById('btn-play-loop');
    const stopLoopBtn = document.getElementById('btn-stop-loop');
    if (playLoopBtn) playLoopBtn.addEventListener('click', playLoop);
    if (stopLoopBtn) stopLoopBtn.addEventListener('click', stopLoop);

    setTimeout(populateVoices, 1000);

    setTimeout(() => {
        showToast('🧠 Chào mừng! Hãy bắt đầu học về bộ não nhé!', 'success', 3000);
    }, 500);
	
    // Khi audio player bắt đầu phát, dừng các audio khác
    const mainAudio = document.getElementById('main-audio');
    if (mainAudio) {
        mainAudio.addEventListener('play', function() {
            if (window.speechSynthesis) window.speechSynthesis.cancel();
            if (isLooping) stopLoop();
            if (paragraphLoop.active) stopAllAudio();
            document.getElementById('tts-status')?.classList.add('hidden');
            document.getElementById('tts-play')?.classList.remove('hidden');
            document.getElementById('tts-stop')?.classList.add('hidden');
            document.getElementById('reading-indicator')?.classList.add('hidden');
        });
    }

    // 👇 GỌI HÀM THÊM LOGO
    addLogos();
}

// 👇 ĐỊNH NGHĨA HÀM NÀY BÊN NGOÀI init()
function addLogos() {
    console.log('🔥 addLogos() đã chạy');

    const scriptTag = document.querySelector('script[src*="Common.js"]');
    let basePath = '';
    if (scriptTag) {
        const src = scriptTag.src;
        basePath = src.substring(0, src.lastIndexOf('/') + 1);
    }
    console.log('📁 basePath:', basePath);

    // ============================================================
    // 1. NAVBAR - Thay thế icon 🏙️ bằng logo
    // ============================================================
    const navIcon = document.querySelector('nav .w-11.h-11');
    if (navIcon) {
        console.log('✅ Tìm thấy navIcon');
        const img = document.createElement('img');
        img.src = basePath + 'LogoMCP.png';
        img.alt = 'Logo Minh Châu Phú';
        img.className = 'w-full h-full object-contain p-1';
        img.onerror = () => console.error('❌ Lỗi load ảnh navbar:', img.src);
        img.onload = () => console.log('✅ Ảnh navbar load thành công');
        navIcon.innerHTML = '';
        navIcon.className = 'w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-lg overflow-hidden border border-red-200';
        navIcon.appendChild(img);
    } else {
        console.warn('❌ Không tìm thấy navIcon');
    }

    // ============================================================
    // 2. FOOTER - Logo cạnh chữ "Minh Châu Phú"
    // ============================================================
    const footer = document.querySelector('footer');
    if (footer) {
        console.log('✅ Tìm thấy footer');
        const allSpans = footer.querySelectorAll('span');
        let nameSpan = null;
        allSpans.forEach(span => {
            const text = span.textContent.trim();
            if (text === 'Minh Châu Phú' || text.includes('Minh Châu Phú')) {
                nameSpan = span;
            }
        });

        if (nameSpan) {
            console.log('✅ Tìm thấy nameSpan:', nameSpan.textContent);
            const imgFoot = document.createElement('img');
            imgFoot.src = basePath + 'LogoMCP.png';
            imgFoot.alt = 'MCP';
            imgFoot.className = 'inline-block h-9 w-auto align-middle mr-3';
            imgFoot.onerror = () => console.error('❌ Lỗi load ảnh footer:', imgFoot.src);
            imgFoot.onload = () => console.log('✅ Ảnh footer load thành công');
            nameSpan.parentNode.insertBefore(imgFoot, nameSpan);
            console.log('✅ Đã chèn logo footer cạnh chữ');
        } else {
            console.warn('❌ Không tìm thấy span chứa "Minh Châu Phú" trong footer');
            console.log('📄 Nội dung footer:', footer.textContent);
        }
    } else {
        console.warn('❌ Không tìm thấy footer');
    }

    // ============================================================
    // 3. FOOTER - Logo góc phải (dưới cùng)
    // ============================================================
    const footerEl = document.querySelector('footer');
    if (footerEl) {
        const rightLogoContainer = document.createElement('div');
        rightLogoContainer.style.cssText = `
            position: absolute;
            right: 24px;
            bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
            z-index: 10;
        `;

        const label = document.createElement('span');
        label.textContent = 'Design by';
        label.style.cssText = `
            font-size: 10px;
            color: #94a3b8;
            font-weight: 500;
            letter-spacing: 0.5px;
        `;

        const imgRight = document.createElement('img');
        imgRight.src = basePath + 'LogoMCP.png';
        imgRight.alt = 'MCP';
        imgRight.style.cssText = `
            height: 70px;
            width: auto;
            border-radius: 6px;
            opacity: 0.85;
            transition: opacity 0.3s;
        `;
        imgRight.onerror = () => console.error('❌ Lỗi load logo góc phải:', imgRight.src);
        imgRight.onload = () => console.log('✅ Logo góc phải load thành công');

        imgRight.onmouseenter = () => imgRight.style.opacity = '1';
        imgRight.onmouseleave = () => imgRight.style.opacity = '0.85';

        rightLogoContainer.appendChild(label);
        rightLogoContainer.appendChild(imgRight);

        footerEl.style.position = 'relative';
        footerEl.appendChild(rightLogoContainer);
        console.log('✅ Đã thêm logo góc phải footer');
    }

    // ============================================================
    // 4. DASHBOARD - Logo nằm NGOÀI khung "Mẹo học" (khung riêng)
    //    Tìm bằng NỘI DUNG "Mẹo học" - KHÔNG phụ thuộc màu sắc
    // ============================================================
    const dashboardSection = document.getElementById('tab-dashboard');
    if (dashboardSection) {
        console.log('✅ Tìm thấy dashboard section');

        // Tìm box chứa chữ "Mẹo học" (KHÔNG phụ thuộc màu sắc)
        let tipBox = null;
        const allDivs = dashboardSection.querySelectorAll('div.p-5.rounded-2xl, div.p-4.rounded-2xl, div.p-5.rounded-3xl');
        for (const div of allDivs) {
            const text = div.textContent || '';
            if (text.includes('Mẹo học')) {
                tipBox = div;
                console.log('✅ Tìm thấy box Mẹo học bằng nội dung');
                break;
            }
        }
        
        if (tipBox) {
            // Tạo container riêng cho logo (nằm NGOÀI khung Mẹo học)
            const logoWrapper = document.createElement('div');
            logoWrapper.style.cssText = `
                margin-top: 16px;
                padding: 20px 16px 16px 16px;
                // background: linear-gradient(135deg, #fef2f2 0%, #fef9c3 100%);
				background: #ffffff;
                border-radius: 16px;
                border: 2px solid rgba(239, 68, 68, 0.2);
                text-align: center;
                width: 100%;
                transition: all 0.3s;
            `;

            // Hiệu ứng hover
            logoWrapper.onmouseenter = () => {
                logoWrapper.style.boxShadow = '0 8px 30px rgba(239, 68, 68, 0.15)';
                logoWrapper.style.transform = 'translateY(-2px)';
            };
            logoWrapper.onmouseleave = () => {
                logoWrapper.style.boxShadow = 'none';
                logoWrapper.style.transform = 'translateY(0)';
            };

            // Logo
            const imgBig = document.createElement('img');
            imgBig.src = basePath + 'LogoMCP.png';
            imgBig.alt = 'Minh Châu Phú';
            imgBig.style.cssText = `
                height: 300px;
                width: auto;
                object-fit: contain;
                display: block;
                margin: 0 auto;
                border-radius: 8px;
            `;
            imgBig.onerror = () => console.error('❌ Lỗi load logo dưới Mẹo học:', imgBig.src);
            imgBig.onload = () => console.log('✅ Logo dưới Mẹo học load thành công');

            logoWrapper.appendChild(imgBig);

            // CHÈN LOGO VÀO SAU (bên ngoài) khung Mẹo học
            tipBox.parentNode.insertBefore(logoWrapper, tipBox.nextSibling);
            
            console.log('✅ Đã thêm logo (khung riêng, nằm ngoài Mẹo học) - KHÔNG phụ thuộc màu');
        } else {
            console.warn('❌ Không tìm thấy box chứa "Mẹo học" trong dashboard');
        }
    } else {
        console.warn('❌ Không tìm thấy dashboard section');
    }
}

window.onload = init;

// ===== EXPOSE FUNCTIONS =====
window.switchTab = switchTab;
window.showWord = showWord;
window.closeModal = closeModal;
window.toggleParagraphLoop = toggleParagraphLoop;
window.playFullText = playFullText;
window.stopAllAudio = stopAllAudio;
window.toggleTranslate = toggleTranslate;
window.seekAudio = seekAudio;
window.switchExercise = switchExercise;
window.evaluateCurrent = evaluateCurrent;
window.resetCurrent = resetCurrent;
window.flipCard = flipCard;
window.nextCard = nextCard;
window.prevCard = prevCard;
window.shuffleFlashcards = shuffleFlashcards;
window.nextTyping = nextTyping;
window.resetTyping = resetTyping;
window.pickWord = pickWord;
window.checkOrder = checkOrder;
window.resetOrder = resetOrder;
window.playAudio = playAudio;
window.toggleRecording = toggleRecording;
window.playRecording = playRecording;
window.stopRecording = stopRecording;
window.deleteRecording = deleteRecording;
window.toggleDarkMode = toggleDarkMode;
window.toggleFullscreen = toggleFullscreen;
window.exportData = exportData;
window.importData = importData;
window.filterVocab = filterVocab;
window.toggleLearned = toggleLearned;
window.toggleLearnedFilter = toggleLearnedFilter;
window.toggleFavorite = toggleFavorite;
window.shuffleVocab = shuffleVocab;
window.toggleFlashcardReverse = toggleFlashcardReverse;
window.toggleFullRecording = toggleFullRecording;
window.toggleTranslateAll = toggleTranslateAll;
window.playLoop = playLoop;
window.stopLoop = stopLoop;
window.toggleAnswer = toggleAnswer;
// ===== FOOTER DARK MODE =====
function updateFooterTheme() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const isDark = document.body.classList.contains('dark');
    const textEl = footer.querySelector('.text-slate-600');
    if (textEl) {
        if (isDark) {
            textEl.className = 'text-xs md:text-sm text-slate-300 font-medium leading-relaxed';
        } else {
            textEl.className = 'text-xs md:text-sm text-slate-600 font-medium leading-relaxed';
        }
    }
}

// Ghi đè hàm toggleDarkMode để cập nhật footer
const originalToggleDarkMode = window.toggleDarkMode;
window.toggleDarkMode = function() {
    if (originalToggleDarkMode) originalToggleDarkMode();
    updateFooterTheme();
};

// Cập nhật footer khi khởi tạo
setTimeout(updateFooterTheme, 100);

// Các hàm ẩn audio
window.hideAudio = function() {
    const wrapper = document.getElementById('audio-wrapper');
    if (wrapper) wrapper.style.display = 'none';
    console.log('❌ Không tìm thấy file audio, đã ẩn toàn bộ');
};
window.hideVideo = function() {
    const container = document.getElementById('video-container');
    if (container) container.style.display = 'none';
    console.log('❌ Không tìm thấy brain.mp4');
};