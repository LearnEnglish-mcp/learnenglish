// ===== traffic03 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Drivers should stay focused and always watch other vehicles, cyclists, and pedestrians.",
    "structure": "S + modal + coordinated verbs + objects",
    "grammar": "Should + động từ nguyên mẫu; hai vị ngữ song song.",
    "translation": "Người lái xe nên tập trung và luôn quan sát các phương tiện khác, người đi xe đạp và người đi bộ.",
    "function": "Drivers (chủ ngữ); should stay focused (vị ngữ thứ nhất); and always watch (vị ngữ thứ hai); other vehicles, cyclists, and pedestrians (các tân ngữ).",
    "pos": "Drivers (noun); should (modal verb); stay (verb); focused (adjective); and (conjunction); always (adverb); watch (verb); other (determiner); vehicles (noun); cyclists (noun); and (conjunction); pedestrians (noun).",
    "note": ""
  },
  {
    "sentence": "They should avoid using mobile phones while driving because distractions are dangerous.",
    "structure": "Main clause + while phrase + because-clause",
    "grammar": "Avoid + V-ing; while + V-ing; because chỉ nguyên nhân.",
    "translation": "Họ nên tránh dùng điện thoại di động khi lái xe vì sự xao nhãng rất nguy hiểm.",
    "function": "They (chủ ngữ); should avoid using mobile phones (vị ngữ chính); while driving (trạng ngữ thời gian); because distractions are dangerous (mệnh đề nguyên nhân).",
    "pos": "They (pronoun); should (modal verb); avoid (verb); using (verb); mobile (adjective); phones (noun); while (conjunction); driving (verb); because (conjunction); distractions (noun); are (noun); dangerous (adjective).",
    "note": ""
  },
  {
    "sentence": "Keeping enough distance from other vehicles makes driving much safer for everyone.",
    "structure": "Gerund phrase S + make + O + adjective",
    "grammar": "V-ing làm chủ ngữ; make + object + adjective.",
    "translation": "Giữ đủ khoảng cách với các phương tiện khác làm cho việc lái xe an toàn hơn nhiều đối với mọi người.",
    "function": "Keeping enough distance from other vehicles (chủ ngữ); makes (động từ chính); driving (tân ngữ); much safer (bổ ngữ tính từ); for everyone (cụm giới từ).",
    "pos": "Keeping (verb); enough (determiner); distance (noun); from (preposition); other (determiner); vehicles (noun); makes (verb); driving (verb); much (determiner); safer (comparative adjective); for (preposition); everyone (pronoun).",
    "note": ""
  },
  {
    "sentence": "Heavy traffic causes air pollution in many large cities every day.",
    "structure": "S + V + O + place + time",
    "grammar": "Hiện tại đơn.",
    "translation": "Giao thông đông đúc gây ô nhiễm không khí ở nhiều thành phố lớn mỗi ngày.",
    "function": "Heavy traffic (chủ ngữ); causes (động từ chính); air pollution (tân ngữ); in many large cities (trạng ngữ nơi chốn); every day (trạng ngữ thời gian).",
    "pos": "Heavy (adjective); traffic (noun); causes (verb); air (noun); pollution (noun); in (preposition); many (determiner); large (adjective); cities (noun); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "Cars, buses, trucks, and motorbikes produce smoke that makes the air dirty.",
    "structure": "Compound S + V + O + relative clause",
    "grammar": "Mệnh đề quan hệ với that; make + object + adjective.",
    "translation": "Ô tô, xe buýt, xe tải và xe máy tạo ra khói khiến không khí bẩn.",
    "function": "Cars, buses, trucks, and motorbikes (chủ ngữ ghép); produce (động từ chính); smoke (tân ngữ); that makes the air dirty (mệnh đề quan hệ).",
    "pos": "Cars (noun); buses (noun); trucks (noun); and (conjunction); motorbikes (noun); produce (verb); smoke (noun); that (determiner); makes (verb); the (article); air (noun); dirty (adjective).",
    "note": ""
  },
  {
    "sentence": "People can help reduce pollution by using public transportation more often.",
    "structure": "S + modal + help + V + O + by V-ing",
    "grammar": "Can + động từ; by + V-ing chỉ cách thức.",
    "translation": "Mọi người có thể giúp giảm ô nhiễm bằng cách sử dụng phương tiện công cộng thường xuyên hơn.",
    "function": "People (chủ ngữ); can help reduce (cụm động từ); pollution (tân ngữ); by using public transportation more often (trạng ngữ chỉ cách thức).",
    "pos": "People (noun); can (modal verb); help (verb); reduce (verb); pollution (noun); by (preposition); using (verb); public (adjective); transportation (noun); more (determiner); often (adverb).",
    "note": ""
  },
  {
    "sentence": "Taking a bus is an easy way to travel around the city.",
    "structure": "Gerund phrase S + linking verb + noun complement + to-infinitive",
    "grammar": "V-ing làm chủ ngữ; to-infinitive bổ nghĩa cho way.",
    "translation": "Đi xe buýt là một cách dễ dàng để di chuyển quanh thành phố.",
    "function": "Taking a bus (chủ ngữ); is (động từ liên kết); an easy way (bổ ngữ); to travel around the city (cụm nguyên mẫu).",
    "pos": "Taking (verb); a (article); bus (noun); is (noun); an (article); easy (adjective); way (noun); to (preposition); travel (verb); around (preposition); the (article); city (noun).",
    "note": ""
  },
  {
    "sentence": "They need to buy tickets, keep the bus clean, and respect other passengers.",
    "structure": "S + need to + coordinated verbs",
    "grammar": "Need to + động từ; ba động từ song song.",
    "translation": "Họ cần mua vé, giữ xe buýt sạch sẽ và tôn trọng những hành khách khác.",
    "function": "They (chủ ngữ); need to buy tickets (vị ngữ thứ nhất); keep the bus clean (vị ngữ thứ hai); and respect other passengers (vị ngữ thứ ba).",
    "pos": "They (pronoun); need (verb); to (preposition); buy (verb); tickets (noun); keep (verb); the (article); bus (noun); clean (adjective); and (conjunction); respect (verb); other (determiner); passengers (noun).",
    "note": ""
  },
  {
    "sentence": "Walking is one of the healthiest ways to travel in the city.",
    "structure": "Gerund S + linking verb + one of the + superlative",
    "grammar": "One of the + so sánh nhất + danh từ số nhiều.",
    "translation": "Đi bộ là một trong những cách di chuyển lành mạnh nhất trong thành phố.",
    "function": "Walking (chủ ngữ); is (động từ liên kết); one of the healthiest ways (bổ ngữ); to travel in the city (cụm nguyên mẫu).",
    "pos": "Walking (verb); is (noun); one (pronoun); of (preposition); the (article); healthiest (superlative adjective); ways (noun); to (preposition); travel (verb); in (preposition); the (article); city (noun).",
    "note": ""
  },
  {
    "sentence": "Looking both ways before crossing helps prevent accidents and keeps everyone safe outside.",
    "structure": "Gerund phrase S + coordinated V + complements",
    "grammar": "V-ing làm chủ ngữ; before + V-ing; help + V; keep + object + adjective.",
    "translation": "Nhìn cả hai phía trước khi băng qua giúp ngăn ngừa tai nạn và giữ mọi người an toàn bên ngoài.",
    "function": "Looking both ways before crossing (chủ ngữ); helps prevent accidents (vị ngữ thứ nhất); and keeps everyone safe outside (vị ngữ thứ hai).",
    "pos": "Looking (verb); both (determiner); ways (noun); before (preposition); crossing (noun); helps (verb); prevent (verb); accidents (noun); and (conjunction); keeps (verb); everyone (pronoun); safe (adjective); outside (adverb).",
    "note": ""
  }
];
