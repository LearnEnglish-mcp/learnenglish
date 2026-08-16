// ===== AI01 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Chat AI is a smart computer program that can talk with people through text or voice.",
    "structure": "S + linking verb + noun phrase + relative clause",
    "grammar": "Dùng that để bổ nghĩa cho danh từ và can để diễn tả khả năng.",
    "translation": "Chat AI là một chương trình máy tính thông minh có thể trò chuyện với con người qua văn bản hoặc giọng nói.",
    "function": "Chat AI (chủ ngữ); is (động từ liên kết); a smart computer program (bổ ngữ chủ ngữ); that can talk with people through text or voice (mệnh đề quan hệ bổ nghĩa cho program).",
    "pos": "Chat (noun); AI (noun); is (linking verb); a (article); smart (adjective); computer (noun); program (noun); that (relative pronoun); can (modal verb); talk (verb); with (preposition); people (noun); through (preposition); text (noun); or (conjunction); voice (noun).",
    "note": ""
  },
  {
    "sentence": "It can answer questions, explain ideas, write sentences, translate languages, and help users learn new things.",
    "structure": "S + can + coordinated verb phrases",
    "grammar": "Dùng can với nhiều động từ song song để liệt kê khả năng.",
    "translation": "Nó có thể trả lời câu hỏi, giải thích ý tưởng, viết câu, dịch ngôn ngữ và giúp người dùng học những điều mới.",
    "function": "It (chủ ngữ); can answer questions, explain ideas, write sentences, translate languages, and help users learn new things (cụm vị ngữ gồm các động từ song song sau can).",
    "pos": "It (pronoun); can (modal verb); answer (verb); questions (noun); explain (verb); ideas (noun); write (verb); sentences (noun); translate (verb); languages (noun); and (conjunction); help (verb); users (noun); learn (verb); new (adjective); things (noun).",
    "note": ""
  },
  {
    "sentence": "Many people use Chat AI because it is fast, friendly, and easy to use.",
    "structure": "S + V + O + because-clause",
    "grammar": "Dùng because để nêu lý do.",
    "translation": "Nhiều người sử dụng Chat AI vì nó nhanh, thân thiện và dễ sử dụng.",
    "function": "Many people (chủ ngữ); use (động từ chính); Chat AI (tân ngữ); because it is fast, friendly, and easy to use (mệnh đề trạng ngữ chỉ nguyên nhân).",
    "pos": "Many (determiner); people (noun); use (verb); Chat (noun); AI (noun); because (conjunction); it (pronoun); is (linking verb); fast (adjective); friendly (adjective); and (conjunction); easy (adjective); to (infinitive marker); use (verb).",
    "note": ""
  },
  {
    "sentence": "Chat AI does not think like a human, but it can understand many questions and give useful answers.",
    "structure": "Clause + but + clause",
    "grammar": "Dùng hiện tại đơn phủ định và but để tạo sự tương phản.",
    "translation": "Chat AI không suy nghĩ giống con người, nhưng nó có thể hiểu nhiều câu hỏi và đưa ra câu trả lời hữu ích.",
    "function": "Chat AI (chủ ngữ mệnh đề thứ nhất); does not think (động từ phủ định); like a human (cụm so sánh); but (liên từ); it (chủ ngữ mệnh đề thứ hai); can understand many questions and give useful answers (vị ngữ).",
    "pos": "Chat (noun); AI (noun); does (auxiliary verb); not (adverb); think (verb); like (preposition); a (article); human (noun); but (conjunction); it (pronoun); can (modal verb); understand (verb); many (determiner); questions (noun); and (conjunction); give (verb); useful (adjective); answers (noun).",
    "note": ""
  },
  {
    "sentence": "It learns from a large amount of information and uses patterns to respond.",
    "structure": "S + coordinated verbs + object + to-infinitive",
    "grammar": "Dùng hai động từ song song và to-infinitive để nêu mục đích.",
    "translation": "Nó học từ một lượng lớn thông tin và sử dụng các mẫu để phản hồi.",
    "function": "It (chủ ngữ); learns from a large amount of information (vị ngữ thứ nhất); and (liên từ); uses patterns (vị ngữ thứ hai); to respond (cụm động từ nguyên mẫu chỉ mục đích).",
    "pos": "It (pronoun); learns (verb); from (preposition); a (article); large (adjective); amount (noun); of (preposition); information (noun); and (conjunction); uses (verb); patterns (noun); to (infinitive marker); respond (verb).",
    "note": ""
  },
  {
    "sentence": "Today, Chat AI is used in education, work, business, and daily life.",
    "structure": "Adverb + S + passive verb + prepositional phrases",
    "grammar": "Dùng câu bị động khi nhấn mạnh đối tượng được sử dụng.",
    "translation": "Ngày nay, Chat AI được sử dụng trong giáo dục, công việc, kinh doanh và cuộc sống hằng ngày.",
    "function": "Today (trạng từ thời gian); Chat AI (chủ ngữ); is used (động từ bị động); in education, work, business, and daily life (cụm giới từ chỉ phạm vi sử dụng).",
    "pos": "Today (adverb); Chat (noun); AI (noun); is (auxiliary verb); used (verb); in (preposition); education (noun); work (noun); business (noun); and (conjunction); daily (adjective); life (noun).",
    "note": ""
  },
  {
    "sentence": "Students can use it to study English, write essays, or review lessons.",
    "structure": "S + can + use + O + to-infinitive series",
    "grammar": "Dùng use + tân ngữ + to-infinitive để nói dùng một công cụ nhằm làm gì.",
    "translation": "Học sinh có thể dùng nó để học tiếng Anh, viết bài luận hoặc ôn lại bài học.",
    "function": "Students (chủ ngữ); can use (động từ khuyết thiếu và động từ chính); it (tân ngữ); to study English, write essays, or review lessons (cụm chỉ mục đích với các động từ song song).",
    "pos": "Students (noun); can (modal verb); use (verb); it (pronoun); to (infinitive marker); study (verb); English (proper noun); write (verb); essays (noun); or (conjunction); review (verb); lessons (noun).",
    "note": ""
  },
  {
    "sentence": "Using Chat AI every day can save time and make learning easier.",
    "structure": "Gerund phrase + can + coordinated verbs",
    "grammar": "Dùng cụm V-ing ở đầu câu làm chủ ngữ.",
    "translation": "Sử dụng Chat AI mỗi ngày có thể tiết kiệm thời gian và làm cho việc học dễ dàng hơn.",
    "function": "Using Chat AI every day (cụm V-ing làm chủ ngữ); can save time (vị ngữ thứ nhất); and make learning easier (vị ngữ thứ hai).",
    "pos": "Using (noun); Chat (noun); AI (noun); every (determiner); day (noun); can (modal verb); save (verb); time (noun); and (conjunction); make (verb); learning (noun); easier (adjective).",
    "note": ""
  },
  {
    "sentence": "It is available anytime, so users can ask questions whenever they need help.",
    "structure": "Clause + so + clause + whenever-clause",
    "grammar": "Dùng so để nêu kết quả và whenever để nói bất cứ khi nào.",
    "translation": "Nó luôn sẵn có, vì vậy người dùng có thể đặt câu hỏi bất cứ khi nào họ cần trợ giúp.",
    "function": "It (chủ ngữ mệnh đề đầu); is available anytime (vị ngữ); so (liên từ chỉ kết quả); users can ask questions (mệnh đề chính thứ hai); whenever they need help (mệnh đề thời gian).",
    "pos": "It (pronoun); is (linking verb); available (adjective); anytime (adverb); so (conjunction); users (noun); can (modal verb); ask (verb); questions (noun); whenever (conjunction); they (pronoun); need (verb); help (verb).",
    "note": ""
  },
  {
    "sentence": "Students should practice with other people, listen to English often, and keep studying every day for better results.",
    "structure": "S + should + coordinated verb phrases",
    "grammar": "Dùng should để đưa ra lời khuyên với nhiều hành động.",
    "translation": "Học sinh nên luyện tập với người khác, thường xuyên nghe tiếng Anh và tiếp tục học mỗi ngày để có kết quả tốt hơn.",
    "function": "Students (chủ ngữ); should practice with other people, listen to English often, and keep studying every day (các vị ngữ song song sau should); for better results (cụm giới từ chỉ mục đích/kết quả).",
    "pos": "Students (noun); should (modal verb); practice (verb); with (preposition); other (determiner); people (noun); listen (verb); to (preposition); English (proper noun); often (adverb); and (conjunction); keep (verb); studying (gerund); every (determiner); day (noun); for (preposition); better (adjective); results (noun).",
    "note": ""
  }
];
