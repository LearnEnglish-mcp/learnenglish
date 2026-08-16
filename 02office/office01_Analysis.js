// ===== office01 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Many people work in a modern office every day.",
    "structure": "S + V(s/es) + complement",
    "grammar": "Present simple for routines.",
    "translation": "Nhiều người làm việc trong một văn phòng hiện đại mỗi ngày.",
    "function": "Many people (chủ ngữ); work (động từ chính); in a modern office (cụm giới từ chỉ nơi chốn); every day (trạng ngữ thời gian).",
    "pos": "Many (determiner); people (noun); work (verb); in (preposition); a (article); modern (adjective); office (noun); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "The office has many desks, computers, and bright lights.",
    "structure": "S + have/has + O",
    "grammar": "Have/has + noun.",
    "translation": "Văn phòng có nhiều bàn làm việc, máy tính và đèn sáng.",
    "function": "The office (chủ ngữ); has (động từ chính); many desks, computers, and bright lights (tân ngữ).",
    "pos": "The (article); office (noun); has (verb); many (determiner); desks (noun); computers (noun); and (conjunction); bright (adjective); lights (noun).",
    "note": ""
  },
  {
    "sentence": "Workers arrive early, greet each other, and start their tasks.",
    "structure": "S + V1 + complement, V2 + complement, and V3 + complement",
    "grammar": "Coordinated verbs with and.",
    "translation": "Nhân viên đến sớm, chào nhau và bắt đầu công việc.",
    "function": "Workers (chủ ngữ); arrive early, greet each other, and start their tasks (ba vị ngữ song song nối bằng and).",
    "pos": "Workers (noun); arrive (verb); early (adverb); greet (verb); each (determiner); other (determiner); and (conjunction); start (verb); their (possessive determiner); tasks (noun).",
    "note": ""
  },
  {
    "sentence": "Some talk with customers, while others prepare documents.",
    "structure": "Clause, while + clause",
    "grammar": "While + contrasting clause.",
    "translation": "Một số người nói chuyện với khách hàng, trong khi những người khác chuẩn bị tài liệu.",
    "function": "Some (chủ ngữ mệnh đề thứ nhất); talk with customers (vị ngữ thứ nhất); while (liên từ); others (chủ ngữ mệnh đề thứ hai); prepare documents (vị ngữ thứ hai).",
    "pos": "Some (determiner); talk (verb); with (preposition); customers (noun); while (conjunction); others (pronoun); prepare (verb); documents (noun).",
    "note": ""
  },
  {
    "sentence": "They help each other when needed.",
    "structure": "S + V + when + complement",
    "grammar": "When + past participle/adjective.",
    "translation": "Họ giúp đỡ nhau khi cần.",
    "function": "They (chủ ngữ); help (động từ chính); each other (tân ngữ); when needed (mệnh đề rút gọn chỉ thời điểm/điều kiện).",
    "pos": "They (pronoun); help (verb); each (determiner); other (determiner); when (conjunction); needed (adjective).",
    "note": ""
  },
  {
    "sentence": "Workers should use office equipment carefully and follow simple instructions.",
    "structure": "S + should + V",
    "grammar": "Should + bare infinitive.",
    "translation": "Nhân viên nên sử dụng thiết bị văn phòng cẩn thận và làm theo các hướng dẫn đơn giản.",
    "function": "Workers (chủ ngữ); should use office equipment carefully (vị ngữ với modal should); and follow simple instructions (vị ngữ phối hợp).",
    "pos": "Workers (noun); should (modal verb); use (verb); office (noun); equipment (noun); carefully (adverb); and (conjunction); follow (verb); simple (adjective); instructions (noun).",
    "note": ""
  },
  {
    "sentence": "Every office job is important because each person has different responsibilities.",
    "structure": "Clause + because + clause",
    "grammar": "Because + reason clause.",
    "translation": "Mỗi công việc văn phòng đều quan trọng vì mỗi người có những trách nhiệm khác nhau.",
    "function": "Every office job (chủ ngữ); is important (động từ liên kết + bổ ngữ); because (liên từ chỉ nguyên nhân); each person has different responsibilities (mệnh đề nguyên nhân).",
    "pos": "Every (determiner); office (noun); job (noun); is (linking verb); important (adjective); because (conjunction); each (determiner); person (noun); has (verb); different (determiner); responsibilities (noun).",
    "note": ""
  },
  {
    "sentence": "Employees use different equipment to finish tasks quickly and correctly.",
    "structure": "S + V + O + to + V",
    "grammar": "To-infinitive for purpose.",
    "translation": "Nhân viên sử dụng các thiết bị khác nhau để hoàn thành nhiệm vụ nhanh chóng và chính xác.",
    "function": "Employees (chủ ngữ); use (động từ chính); different equipment (tân ngữ); to finish tasks quickly and correctly (cụm nguyên mẫu chỉ mục đích).",
    "pos": "Employees (noun); use (verb); different (determiner); equipment (noun); to (infinitive marker); finish (verb); tasks (noun); quickly (adverb); and (conjunction); correctly (adverb).",
    "note": ""
  },
  {
    "sentence": "Keeping machines clean and reporting problems quickly helps prevent damage.",
    "structure": "V-ing phrase + singular verb",
    "grammar": "Gerund phrase as subject.",
    "translation": "Giữ máy móc sạch sẽ và báo cáo sự cố nhanh chóng giúp ngăn ngừa hư hỏng.",
    "function": "Keeping machines clean and reporting problems quickly (cụm V-ing làm chủ ngữ); helps prevent (cụm động từ); damage (tân ngữ).",
    "pos": "Keeping (gerund); machines (noun); clean (adjective); and (conjunction); reporting (gerund); problems (noun); quickly (adverb); helps (verb); prevent (verb); damage (noun).",
    "note": ""
  },
  {
    "sentence": "Good equipment and careful use make the office safer, faster, and more productive every day.",
    "structure": "make + O + comparative adjective(s)",
    "grammar": "Comparative adjectives.",
    "translation": "Thiết bị tốt và cách sử dụng cẩn thận làm cho văn phòng an toàn hơn, nhanh hơn và hiệu quả hơn mỗi ngày.",
    "function": "Good equipment and careful use (chủ ngữ ghép); make (động từ chính); the office (tân ngữ); safer, faster, and more productive (bổ ngữ cho tân ngữ); every day (trạng ngữ thời gian).",
    "pos": "Good (adjective); equipment (noun); and (conjunction); careful (adjective); use (verb); make (verb); the (article); office (noun); safer (comparative adjective); faster (comparative adverb); and (conjunction); more (determiner); productive (adjective); every (determiner); day (noun).",
    "note": ""
  }
];
