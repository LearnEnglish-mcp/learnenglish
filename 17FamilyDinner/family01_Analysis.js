// ===== family01 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Family dinner is an important part of daily life in many homes.",
    "structure": "S + be + noun phrase",
    "grammar": "Dùng hiện tại đơn với be để định nghĩa hoặc mô tả.",
    "translation": "Bữa tối gia đình là một phần quan trọng của cuộc sống hằng ngày trong nhiều gia đình.",
    "function": "Family dinner (chủ ngữ); is (động từ liên kết); an important part of daily life (bổ ngữ chủ ngữ); in many homes (cụm giới từ chỉ phạm vi).",
    "pos": "Family (noun); dinner (noun); is (linking/auxiliary verb); an (article); important (adjective); part (noun); of (preposition); daily (adjective); life (noun); in (preposition); many (determiner); homes (noun).",
    "note": ""
  },
  {
    "sentence": "It is a time when family members sit together, enjoy food, and share their experiences.",
    "structure": "S + be + time + when + clause",
    "grammar": "Dùng when để bổ sung thông tin về thời điểm.",
    "translation": "Đây là lúc các thành viên trong gia đình ngồi cùng nhau, thưởng thức thức ăn và chia sẻ những trải nghiệm của mình.",
    "function": "It (chủ ngữ); is (động từ liên kết); a time (bổ ngữ); when family members sit together, enjoy food, and share their experiences (mệnh đề với when bổ nghĩa cho time).",
    "pos": "It (noun); is (linking/auxiliary verb); a (article); time (noun); when (conjunction); family (noun); members (noun); sit (verb); together (adverb); enjoy (verb); food (noun); and (conjunction); share (verb); their (possessive determiner); experiences (noun).",
    "note": ""
  },
  {
    "sentence": "A simple meal can bring happiness and strengthen family relationships.",
    "structure": "S + can + V + O",
    "grammar": "Dùng can để nói khả năng hoặc kết quả có thể xảy ra.",
    "translation": "Một bữa ăn đơn giản có thể mang lại hạnh phúc và củng cố các mối quan hệ gia đình.",
    "function": "A simple meal (chủ ngữ); can bring happiness (vị ngữ thứ nhất với modal can); and strengthen family relationships (vị ngữ song song thứ hai).",
    "pos": "A (article); simple (adjective); meal (noun); can (modal verb); bring (verb); happiness (noun); and (conjunction); strengthen (verb); family (noun); relationships (noun).",
    "note": ""
  },
  {
    "sentence": "Parents listen to their children, and children learn from their parents.",
    "structure": "Clause + and + clause",
    "grammar": "Dùng and để nối hai mệnh đề có quan hệ gần nhau.",
    "translation": "Cha mẹ lắng nghe con cái, và con cái học hỏi từ cha mẹ.",
    "function": "Parents (chủ ngữ mệnh đề thứ nhất); listen to their children (vị ngữ); and (liên từ); children (chủ ngữ mệnh đề thứ hai); learn from their parents (vị ngữ).",
    "pos": "Parents (noun); listen (verb); to (preposition); their (possessive determiner); children (noun); and (conjunction); children (noun); learn (verb); from (preposition); their (possessive determiner); parents (noun).",
    "note": ""
  },
  {
    "sentence": "What matters most is spending time together.",
    "structure": "What + V + ... + be + complement",
    "grammar": "Dùng mệnh đề bắt đầu bằng what làm chủ ngữ.",
    "translation": "Điều quan trọng nhất là dành thời gian bên nhau.",
    "function": "What matters most (mệnh đề danh từ làm chủ ngữ); is (động từ liên kết); spending time together (bổ ngữ chủ ngữ dạng V-ing).",
    "pos": "What (pronoun); matters (verb); most (adverb); is (linking/auxiliary verb); spending (verb); time (noun); together (adverb).",
    "note": ""
  },
  {
    "sentence": "Before cooking, family members choose ingredients and decide what dishes to make.",
    "structure": "Before + V-ing, S + V",
    "grammar": "Dùng before + V-ing để nói hành động xảy ra trước.",
    "translation": "Trước khi nấu, các thành viên trong gia đình chọn nguyên liệu và quyết định sẽ làm những món gì.",
    "function": "Before cooking (cụm thời gian); family members (chủ ngữ); choose ingredients (vị ngữ thứ nhất); and decide what dishes to make (vị ngữ thứ hai có mệnh đề what).",
    "pos": "Before (preposition); cooking (verb); family (noun); members (noun); choose (verb); ingredients (noun); and (conjunction); decide (verb); what (pronoun); dishes (noun); to (preposition); make (verb).",
    "note": ""
  },
  {
    "sentence": "They may wash vegetables, set the table, or carry dishes to the dining room.",
    "structure": "S + may + V",
    "grammar": "Dùng may để nói một việc có thể làm.",
    "translation": "Các em có thể rửa rau, dọn bàn hoặc mang món ăn đến phòng ăn.",
    "function": "They (chủ ngữ); may wash, set, or carry (cụm động từ song song với modal may); vegetables, the table, dishes (các tân ngữ); to the dining room (cụm chỉ hướng).",
    "pos": "They (noun); may (modal verb); wash (verb); vegetables (noun); set (verb); the (article); table (noun); or (conjunction); carry (verb); dishes (noun); to (preposition); the (article); dining (adjective); room (noun).",
    "note": ""
  },
  {
    "sentence": "Working together makes meal preparation easier and more enjoyable.",
    "structure": "S + make(s) + O + adjective",
    "grammar": "Dùng make + tân ngữ + tính từ để diễn tả kết quả.",
    "translation": "Cùng làm việc giúp việc chuẩn bị bữa ăn dễ dàng và thú vị hơn.",
    "function": "Working together (cụm V-ing làm chủ ngữ); makes (động từ); meal preparation (tân ngữ); easier and more enjoyable (bổ ngữ cho tân ngữ).",
    "pos": "Working (verb); together (adverb); makes (verb); meal (noun); preparation (noun); easier (adjective); and (conjunction); more (adverb); enjoyable (adjective).",
    "note": ""
  },
  {
    "sentence": "Many families try to have dinner together after work or school.",
    "structure": "S + try + to + V",
    "grammar": "Dùng try + to-infinitive để nói sự cố gắng.",
    "translation": "Nhiều gia đình cố gắng ăn tối cùng nhau sau giờ làm việc hoặc học tập.",
    "function": "Many families (chủ ngữ); try (động từ); to have dinner together (cụm to-infinitive làm bổ ngữ); after work or school (cụm thời gian).",
    "pos": "Many (determiner); families (noun); try (verb); to (preposition); have (verb); dinner (noun); together (adverb); after (preposition); work (noun); or (conjunction); school (noun).",
    "note": ""
  },
  {
    "sentence": "People often eat more balanced meals and spend less time using phones or watching television.",
    "structure": "S + spend + time + V-ing",
    "grammar": "Dùng spend + time + V-ing để nói dành thời gian làm gì.",
    "translation": "Mọi người thường ăn các bữa cân bằng hơn và dành ít thời gian hơn cho điện thoại hoặc xem tivi.",
    "function": "People (chủ ngữ); often eat more balanced meals (vị ngữ thứ nhất); and spend less time (vị ngữ thứ hai); using phones or watching television (cụm V-ing bổ sung cho spend time).",
    "pos": "People (noun); often (adverb); eat (verb); more (adverb); balanced (adjective); meals (noun); and (conjunction); spend (verb); less (determiner); time (noun); using (verb); phones (noun); or (conjunction); watching (verb); television (noun).",
    "note": ""
  }
];
