// ===== routine01 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "I usually wake up at six o’clock every morning.",
    "structure": "S + usually/often + V",
    "grammar": "Dùng trạng từ tần suất để nói về thói quen thường xuyên.",
    "translation": "Tôi thường thức dậy lúc sáu giờ mỗi sáng.",
    "function": "I usually (chủ ngữ); wake up at six o’clock every morning (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "I (pronoun); usually (adverb); wake (verb); up (adverb); at (preposition); six (number); o’clock (adverb); every (determiner); morning (noun).",
    "note": ""
  },
  {
    "sentence": "First, I make my bed, wash my face, and brush my teeth.",
    "structure": "First, + S + V",
    "grammar": "Dùng First ở đầu câu để nói hành động xảy ra trước tiên.",
    "translation": "Đầu tiên, tôi dọn giường, rửa mặt và đánh răng.",
    "function": "First (cụm/mệnh đề trạng ngữ mở đầu); I make my bed, wash my face, and brush my teeth. (mệnh đề chính diễn tả hành động hoặc trạng thái).",
    "pos": "First (adverb); I (pronoun); make (verb); my (pronoun); bed (noun); wash (verb); my (pronoun); face (noun); and (conjunction); brush (verb); my (pronoun); teeth (noun).",
    "note": ""
  },
  {
    "sentence": "Then I drink a glass of water and do some light exercise for ten minutes.",
    "structure": "S + V + O + and + V + O",
    "grammar": "Dùng and để nối hai hành động cùng chủ ngữ.",
    "translation": "Sau đó, tôi uống một cốc nước và tập thể dục nhẹ trong mười phút.",
    "function": "Then I (chủ ngữ); drink a glass of water and do some light exercise for ten minutes (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "Then (adverb); I (pronoun); drink (verb); a (article); glass (noun); of (preposition); water (noun); and (conjunction); do (verb); some (determiner); light (adjective); exercise (noun); for (preposition); ten (number); minutes (noun).",
    "note": ""
  },
  {
    "sentence": "Before leaving home, I check my school bag and make sure I have all my books and pens.",
    "structure": "Before + V-ing, S + V",
    "grammar": "Dùng before + V-ing để diễn tả một hành động xảy ra trước hành động chính.",
    "translation": "Trước khi rời nhà, tôi kiểm tra cặp sách và chắc chắn rằng mình có đủ sách và bút.",
    "function": "Before leaving home (cụm/mệnh đề trạng ngữ mở đầu); I check my school bag and make sure I have all my books and pens. (mệnh đề chính diễn tả hành động hoặc trạng thái).",
    "pos": "Before (preposition); leaving (verb); home (noun); I (pronoun); check (verb); my (pronoun); school (noun); bag (noun); and (conjunction); make (verb); sure (adjective); I (pronoun); have (verb); all (determiner); my (pronoun); books (noun); and (conjunction); pens (noun).",
    "note": ""
  },
  {
    "sentence": "I feel fresh, active, and ready to study.",
    "structure": "S + linking verb + adjective + to + V",
    "grammar": "Dùng tính từ + to-infinitive để diễn tả trạng thái hoặc sự sẵn sàng làm việc gì.",
    "translation": "Tôi cảm thấy tỉnh táo, năng động và sẵn sàng học tập.",
    "function": "I (chủ ngữ); feel fresh active and ready to study (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "I (pronoun); feel (verb); fresh (adjective); active (adjective); and (conjunction); ready (adjective); to (preposition/infinitive marker); study (verb).",
    "note": ""
  },
  {
    "sentence": "Reading helps me learn new words and understand different ideas.",
    "structure": "S + help(s) + O + V",
    "grammar": "Dùng help + tân ngữ + động từ nguyên mẫu không to để nói sự hỗ trợ.",
    "translation": "Đọc sách giúp tôi học từ mới và hiểu những ý tưởng khác nhau.",
    "function": "Reading (cụm V-ing làm chủ ngữ); helps me learn new words and understand different ideas. (vị ngữ nêu đặc điểm hoặc tác dụng).",
    "pos": "Reading (gerund/present participle); helps (verb); me (pronoun); learn (verb); new (adjective); words (noun); and (conjunction); understand (verb); different (adjective); ideas (noun).",
    "note": ""
  },
  {
    "sentence": "When I find a difficult word, I write it in a notebook.",
    "structure": "When + S + V, S + V",
    "grammar": "Dùng mệnh đề when để nói thời điểm một hành động xảy ra.",
    "translation": "Khi gặp một từ khó, tôi viết nó vào sổ tay.",
    "function": "When I find a difficult word (cụm/mệnh đề trạng ngữ mở đầu); I write it in a notebook. (mệnh đề chính diễn tả hành động hoặc trạng thái).",
    "pos": "When (conjunction); I (pronoun); find (verb); a (article); difficult (adjective); word (noun); I (pronoun); write (verb); it (pronoun); in (preposition); a (article); notebook (noun).",
    "note": ""
  },
  {
    "sentence": "By reading every day, I improve my English, grow my knowledge, and sleep more peacefully.",
    "structure": "By + V-ing, S + V",
    "grammar": "Dùng by + V-ing để nói cách thức đạt được một kết quả.",
    "translation": "Bằng việc đọc mỗi ngày, tôi cải thiện tiếng Anh, mở rộng kiến thức và ngủ yên hơn.",
    "function": "By reading every day (cụm/mệnh đề trạng ngữ mở đầu); I improve my English, grow my knowledge, and sleep more peacefully. (mệnh đề chính diễn tả hành động hoặc trạng thái).",
    "pos": "By (preposition); reading (gerund/present participle); every (determiner); day (noun); I (pronoun); improve (verb); my (pronoun); English (proper noun); grow (verb); my (pronoun); knowledge (noun); and (conjunction); sleep (verb); more (adverb); peacefully (adverb).",
    "note": ""
  },
  {
    "sentence": "I try to exercise every day because it keeps me healthy and strong.",
    "structure": "S + V + because + S + V",
    "grammar": "Dùng because để nêu nguyên nhân.",
    "translation": "Tôi cố gắng tập thể dục mỗi ngày vì điều đó giúp tôi khỏe mạnh và cường tráng.",
    "function": "I (chủ ngữ); try to exercise every day because it keeps me healthy and strong (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "I (pronoun); try (verb); to (preposition/infinitive marker); exercise (noun); every (determiner); day (noun); because (conjunction); it (pronoun); keeps (verb); me (pronoun); healthy (adjective); and (conjunction); strong (adjective).",
    "note": ""
  },
  {
    "sentence": "We do not need expensive equipment or a large gym.",
    "structure": "S + do not + V + O",
    "grammar": "Dùng do not + động từ nguyên mẫu để tạo câu phủ định ở hiện tại đơn.",
    "translation": "Chúng ta không cần thiết bị đắt tiền hay một phòng gym lớn.",
    "function": "We (chủ ngữ); do not need expensive equipment or a large gym (vị ngữ diễn tả hành động, trạng thái hoặc kết quả của chủ ngữ).",
    "pos": "We (pronoun); do (verb); not (adverb); need (verb); expensive (adjective); equipment (noun); or (conjunction); a (article); large (adjective); gym (noun).",
    "note": ""
  }
];
