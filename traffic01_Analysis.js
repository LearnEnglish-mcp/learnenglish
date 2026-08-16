// ===== traffic01 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "City traffic is busy every day, especially in the morning and evening.",
    "structure": "S + linking verb + adjective complement + time adverbials",
    "grammar": "Hiện tại đơn với to be; trạng ngữ thời gian.",
    "translation": "Giao thông thành phố đông đúc mỗi ngày, đặc biệt vào buổi sáng và buổi tối.",
    "function": "City traffic (chủ ngữ); is (động từ liên kết); busy (bổ ngữ tính từ); every day, especially in the morning and evening (trạng ngữ thời gian).",
    "pos": "City (noun); traffic (noun); is (noun); busy (adjective); every (determiner); day (noun); especially (adverb); in (preposition); the (article); morning (noun); and (conjunction); evening (noun).",
    "note": ""
  },
  {
    "sentence": "Cars, buses, motorbikes, bicycles, and trucks share the same roads.",
    "structure": "Compound S + V + O",
    "grammar": "Hiện tại đơn; chủ ngữ liệt kê nối bằng and.",
    "translation": "Ô tô, xe buýt, xe máy, xe đạp và xe tải cùng sử dụng những con đường.",
    "function": "Cars, buses, motorbikes, bicycles, and trucks (chủ ngữ ghép); share (động từ chính); the same roads (tân ngữ).",
    "pos": "Cars (noun); buses (noun); motorbikes (noun); bicycles (noun); and (conjunction); trucks (noun); share (verb); the (article); same (determiner); roads (noun).",
    "note": ""
  },
  {
    "sentence": "Traffic lights, road signs, and police officers help keep traffic safe and organized.",
    "structure": "Compound S + help + V + O + adjective complements",
    "grammar": "Cấu trúc help + động từ nguyên mẫu; keep + object + adjective.",
    "translation": "Đèn giao thông, biển báo đường bộ và cảnh sát giúp giữ cho giao thông an toàn và có trật tự.",
    "function": "Traffic lights, road signs, and police officers (chủ ngữ ghép); help keep (cụm động từ); traffic (tân ngữ); safe and organized (bổ ngữ tính từ).",
    "pos": "Traffic (noun); lights (noun); road (noun); signs (noun); and (conjunction); police (noun); officers (noun); help (verb); keep (verb); traffic (noun); safe (adjective); and (conjunction); organized (adjective).",
    "note": ""
  },
  {
    "sentence": "Drivers should stop at red lights and follow speed limits carefully.",
    "structure": "S + modal + coordinated verbs + adverb",
    "grammar": "Should + động từ nguyên mẫu; hai động từ song song.",
    "translation": "Người lái xe nên dừng ở đèn đỏ và tuân thủ giới hạn tốc độ cẩn thận.",
    "function": "Drivers (chủ ngữ); should stop (cụm động từ thứ nhất); at red lights (trạng ngữ); and follow (động từ song song); speed limits (tân ngữ); carefully (trạng từ cách thức).",
    "pos": "Drivers (noun); should (modal verb); stop (verb); at (preposition); red (adjective); lights (noun); and (conjunction); follow (verb); speed (noun); limits (noun); carefully (adverb).",
    "note": ""
  },
  {
    "sentence": "Heavy traffic can cause delays and air pollution.",
    "structure": "S + modal + V + coordinated O",
    "grammar": "Can + động từ nguyên mẫu.",
    "translation": "Giao thông đông đúc có thể gây chậm trễ và ô nhiễm không khí.",
    "function": "Heavy traffic (chủ ngữ); can cause (cụm động từ); delays and air pollution (hai tân ngữ song song).",
    "pos": "Heavy (adjective); traffic (noun); can (modal verb); cause (verb); delays (noun); and (conjunction); air (noun); pollution (noun).",
    "note": ""
  },
  {
    "sentence": "Public transportation is an important part of city life.",
    "structure": "S + linking verb + noun complement + prepositional phrase",
    "grammar": "Hiện tại đơn với to be.",
    "translation": "Phương tiện giao thông công cộng là một phần quan trọng của cuộc sống thành phố.",
    "function": "Public transportation (chủ ngữ); is (động từ liên kết); an important part (bổ ngữ danh từ); of city life (cụm giới từ bổ nghĩa).",
    "pos": "Public (adjective); transportation (noun); is (noun); an (article); important (adjective); part (noun); of (preposition); city (noun); life (noun).",
    "note": ""
  },
  {
    "sentence": "They are usually cheaper than driving private cars every day.",
    "structure": "S + linking verb + adverb + comparative + than-clause",
    "grammar": "So sánh hơn với than.",
    "translation": "Chúng thường rẻ hơn so với việc lái ô tô riêng mỗi ngày.",
    "function": "They (chủ ngữ); are (động từ liên kết); usually (trạng từ); cheaper (bổ ngữ so sánh hơn); than driving private cars every day (cụm so sánh).",
    "pos": "They (pronoun); are (noun); usually (adverb); cheaper (comparative adjective); than (conjunction); driving (verb); private (adjective); cars (noun); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "Passengers should wait patiently at bus stops or train stations.",
    "structure": "S + modal + V + adverb + place phrase",
    "grammar": "Should + động từ nguyên mẫu.",
    "translation": "Hành khách nên kiên nhẫn chờ tại trạm xe buýt hoặc nhà ga.",
    "function": "Passengers (chủ ngữ); should wait (cụm động từ); patiently (trạng từ); at bus stops or train stations (trạng ngữ nơi chốn).",
    "pos": "Passengers (noun); should (modal verb); wait (verb); patiently (adverb); at (preposition); bus (noun); stops (noun); or (conjunction); train (noun); stations (noun).",
    "note": ""
  },
  {
    "sentence": "Drivers must wear seat belts and avoid using mobile phones while driving.",
    "structure": "S + modal + coordinated verbs + while-clause",
    "grammar": "Must + động từ nguyên mẫu; avoid + V-ing; while + V-ing.",
    "translation": "Người lái xe phải thắt dây an toàn và tránh sử dụng điện thoại di động khi lái xe.",
    "function": "Drivers (chủ ngữ); must wear (cụm động từ thứ nhất); seat belts (tân ngữ); and avoid using mobile phones (vị ngữ song song); while driving (trạng ngữ thời gian).",
    "pos": "Drivers (noun); must (modal verb); wear (verb); seat (noun); belts (noun); and (conjunction); avoid (verb); using (verb); mobile (adjective); phones (noun); while (conjunction); driving (verb).",
    "note": ""
  },
  {
    "sentence": "Following traffic rules reduces accidents and protects many lives.",
    "structure": "Gerund phrase S + coordinated V + O",
    "grammar": "V-ing làm chủ ngữ; hai động từ song song.",
    "translation": "Tuân thủ luật giao thông làm giảm tai nạn và bảo vệ nhiều sinh mạng.",
    "function": "Following traffic rules (cụm danh động từ làm chủ ngữ); reduces accidents (vị ngữ thứ nhất); and protects many lives (vị ngữ thứ hai).",
    "pos": "Following (verb); traffic (noun); rules (noun); reduces (verb); accidents (noun); and (conjunction); protects (verb); many (determiner); lives (noun).",
    "note": ""
  }
];
