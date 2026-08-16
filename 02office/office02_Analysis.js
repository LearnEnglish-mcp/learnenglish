// ===== office02 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "A team meeting helps workers discuss projects and share useful ideas.",
    "structure": "S + V(s/es) + complement",
    "grammar": "Present simple for facts.",
    "translation": "Một cuộc họp nhóm giúp nhân viên thảo luận dự án và chia sẻ ý tưởng hữu ích.",
    "function": "A team meeting (chủ ngữ); helps (động từ chính); workers (tân ngữ); discuss projects and share useful ideas (cụm động từ nguyên mẫu không to).",
    "pos": "A (article); team (noun); meeting (noun); helps (verb); workers (noun); discuss (verb); projects (noun); and (conjunction); share (verb); useful (adjective); ideas (noun).",
    "note": ""
  },
  {
    "sentence": "Everyone gathers in one room or joins online.",
    "structure": "S + V1 + complement + or + V2 + complement",
    "grammar": "Or for alternatives.",
    "translation": "Mọi người tập trung trong một phòng hoặc tham gia trực tuyến.",
    "function": "Everyone (chủ ngữ); gathers in one room (vị ngữ thứ nhất); or (liên từ lựa chọn); joins online (vị ngữ thứ hai).",
    "pos": "Everyone (pronoun); gathers (verb); in (preposition); one (pronoun); room (noun); or (conjunction); joins (verb); online (adverb).",
    "note": ""
  },
  {
    "sentence": "Meetings help people understand goals, solve problems, and work together better every single day successfully.",
    "structure": "S + help(s) + O + V",
    "grammar": "Help + object + bare infinitive.",
    "translation": "Các cuộc họp giúp mọi người hiểu mục tiêu, giải quyết vấn đề và làm việc cùng nhau tốt hơn mỗi ngày.",
    "function": "Meetings (chủ ngữ); help (động từ chính); people (tân ngữ); understand goals, solve problems, and work together better (các động từ nguyên mẫu song song); every single day successfully (trạng ngữ).",
    "pos": "Meetings (noun); help (verb); people (noun); understand (verb); goals (noun); solve (verb); problems (noun); and (conjunction); work (verb); together (adverb); better (comparative adjective); every (determiner); single (adjective); day (noun); successfully (adverb).",
    "note": ""
  },
  {
    "sentence": "During the meeting, each person gives opinions and listens carefully.",
    "structure": "During + noun phrase, S + V",
    "grammar": "During + noun phrase.",
    "translation": "Trong cuộc họp, mỗi người đưa ra ý kiến và lắng nghe cẩn thận.",
    "function": "During the meeting (cụm giới từ chỉ thời gian); each person (chủ ngữ); gives opinions and listens carefully (hai vị ngữ song song).",
    "pos": "During (preposition); the (article); meeting (noun); each (determiner); person (noun); gives (verb); opinions (noun); and (conjunction); listens (verb); carefully (adverb).",
    "note": ""
  },
  {
    "sentence": "Team members ask questions, suggest improvements, and agree on the best solutions for future work together.",
    "structure": "the + superlative adjective + noun",
    "grammar": "Superlative adjective.",
    "translation": "Các thành viên nhóm đặt câu hỏi, đề xuất cải tiến và thống nhất những giải pháp tốt nhất cho công việc tương lai.",
    "function": "Team members (chủ ngữ); ask questions, suggest improvements, and agree on the best solutions (các vị ngữ song song); for future work together (cụm giới từ).",
    "pos": "Team (noun); members (noun); ask (verb); questions (noun); suggest (verb); improvements (noun); and (conjunction); agree (verb); on (preposition); the (article); best (superlative adjective); solutions (noun); for (preposition); future (noun); work (verb); together (adverb).",
    "note": ""
  },
  {
    "sentence": "Employees should understand these rules before starting their jobs.",
    "structure": "S + should + V",
    "grammar": "Should + bare infinitive.",
    "translation": "Nhân viên nên hiểu những quy tắc này trước khi bắt đầu công việc.",
    "function": "Employees (chủ ngữ); should understand (cụm động từ với modal should); these rules (tân ngữ); before starting their jobs (cụm giới từ + V-ing chỉ thời gian).",
    "pos": "Employees (noun); should (modal verb); understand (verb); these (determiner); rules (noun); before (preposition); starting (gerund); their (possessive determiner); jobs (noun).",
    "note": ""
  },
  {
    "sentence": "Everyone feels respected and comfortable when people follow the same standards.",
    "structure": "S + V + when + S + V",
    "grammar": "When + clause.",
    "translation": "Mọi người cảm thấy được tôn trọng và thoải mái khi cùng tuân theo những tiêu chuẩn giống nhau.",
    "function": "Everyone (chủ ngữ); feels respected and comfortable (động từ liên kết + bổ ngữ); when (liên từ); people follow the same standards (mệnh đề thời gian/điều kiện).",
    "pos": "Everyone (pronoun); feels (verb); respected (adjective); and (conjunction); comfortable (adjective); when (conjunction); people (noun); follow (verb); the (article); same (determiner); standards (noun).",
    "note": ""
  },
  {
    "sentence": "Working together is important in every office because teamwork brings better results.",
    "structure": "Clause + because + clause",
    "grammar": "Because + reason clause.",
    "translation": "Làm việc cùng nhau rất quan trọng trong mọi văn phòng vì tinh thần đồng đội mang lại kết quả tốt hơn.",
    "function": "Working together (cụm V-ing làm chủ ngữ); is important (động từ liên kết + bổ ngữ); in every office (cụm giới từ); because teamwork brings better results (mệnh đề nguyên nhân).",
    "pos": "Working (gerund); together (adverb); is (linking verb); important (adjective); in (preposition); every (determiner); office (noun); because (conjunction); teamwork (noun); brings (verb); better (comparative adjective); results (noun).",
    "note": ""
  },
  {
    "sentence": "Following office rules creates a friendly environment where everyone can work peacefully together every day.",
    "structure": "V-ing phrase + singular verb",
    "grammar": "Gerund phrase as subject.",
    "translation": "Tuân theo nội quy văn phòng tạo ra một môi trường thân thiện, nơi mọi người có thể làm việc yên bình cùng nhau mỗi ngày.",
    "function": "Following office rules (cụm V-ing làm chủ ngữ); creates (động từ chính); a friendly environment (tân ngữ); where everyone can work peacefully together every day (mệnh đề quan hệ chỉ nơi chốn).",
    "pos": "Following (gerund); office (noun); rules (noun); creates (verb); a (article); friendly (adjective); environment (noun); where (conjunction); everyone (pronoun); can (modal verb); work (verb); peacefully (adverb); together (adverb); every (determiner); day (noun).",
    "note": ""
  },
  {
    "sentence": "Good teamwork helps everyone finish tasks faster and creates a positive working environment daily.",
    "structure": "comparative + than / comparative description",
    "grammar": "Comparative adjectives and adverbs.",
    "translation": "Tinh thần làm việc nhóm tốt giúp mọi người hoàn thành nhiệm vụ nhanh hơn và tạo ra môi trường làm việc tích cực hằng ngày.",
    "function": "Good teamwork (chủ ngữ); helps (động từ chính); everyone (tân ngữ); finish tasks faster (cụm động từ nguyên mẫu); and creates a positive working environment daily (vị ngữ phối hợp).",
    "pos": "Good (adjective); teamwork (noun); helps (verb); everyone (pronoun); finish (verb); tasks (noun); faster (comparative adverb); and (conjunction); creates (verb); a (article); positive (adjective); working (gerund); environment (noun); daily (adjective).",
    "note": ""
  }
];
