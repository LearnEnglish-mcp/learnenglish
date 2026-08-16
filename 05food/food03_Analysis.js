// ===== food03 ANALYSIS =====

const newAnalysisData = [
  {
    "sentence": "Cooking street food requires skill and careful preparation.",
    "structure": "V-ing + noun + V(s) + ...",
    "grammar": "Dùng V-ing làm chủ ngữ để nói về một hoạt động nói chung.",
    "translation": "Nấu đồ ăn đường phố đòi hỏi kỹ năng và sự chuẩn bị cẩn thận.",
    "function": "Cooking street food (cụm V-ing làm chủ ngữ); requires (động từ chính); skill and careful preparation (tân ngữ ghép).",
    "pos": "Cooking (gerund); street (noun); food (noun); requires (verb); skill (noun); and (conjunction); careful (adjective); preparation (noun).",
    "note": ""
  },
  {
    "sentence": "Sellers begin by washing fresh ingredients and preparing meat, vegetables, rice, or noodles.",
    "structure": "S + begin(s) + by + V-ing",
    "grammar": "Dùng begin by + V-ing để nói bước đầu tiên của một quá trình.",
    "translation": "Người bán bắt đầu bằng cách rửa nguyên liệu tươi và chuẩn bị thịt, rau, cơm hoặc mì.",
    "function": "Sellers (chủ ngữ); begin (động từ chính); by washing fresh ingredients and preparing meat, vegetables, rice, or noodles (cụm by + V-ing chỉ bước đầu).",
    "pos": "Sellers (noun); begin (verb); by (preposition); washing (gerund); fresh (adjective); ingredients (noun); and (conjunction); preparing (gerund); meat (noun); vegetables (noun); rice (noun); or (conjunction); noodles (noun).",
    "note": ""
  },
  {
    "sentence": "They cook the food quickly so customers receive hot and tasty meals without waiting too long.",
    "structure": "S + V + so + S + V",
    "grammar": "Dùng so để nối nguyên nhân với kết quả.",
    "translation": "Họ nấu thức ăn nhanh để khách hàng nhận được những bữa ăn nóng và ngon mà không phải chờ quá lâu.",
    "function": "They (chủ ngữ); cook the food quickly (mệnh đề nguyên nhân); so (liên từ); customers receive hot and tasty meals without waiting too long (mệnh đề kết quả).",
    "pos": "They (pronoun); cook (verb); the (article); food (noun); quickly (adverb); so (conjunction); customers (noun); receive (verb); hot (adjective); and (conjunction); tasty (adjective); meals (noun); without (preposition); waiting (gerund); too (adverb); long (adjective).",
    "note": ""
  },
  {
    "sentence": "Fresh ingredients and clean equipment help make the food safe and delicious for everyone.",
    "structure": "S + help + make + O + adjective",
    "grammar": "Dùng help make để nói một yếu tố góp phần làm cho điều gì trở nên thế nào.",
    "translation": "Nguyên liệu tươi và thiết bị sạch giúp làm cho thức ăn an toàn và ngon cho mọi người.",
    "function": "Fresh ingredients and clean equipment (chủ ngữ ghép); help make (cụm động từ); the food (tân ngữ); safe and delicious (bổ ngữ cho tân ngữ); for everyone (cụm giới từ).",
    "pos": "Fresh (adjective); ingredients (noun); and (conjunction); clean (adjective); equipment (noun); help (verb); make (verb); the (article); food (noun); safe (adjective); and (conjunction); delicious (adjective); for (preposition); everyone (pronoun).",
    "note": ""
  },
  {
    "sentence": "Happy customers always return when the food tastes good and the service is friendly.",
    "structure": "S + V + when + S + V",
    "grammar": "Dùng when để nói điều xảy ra trong một tình huống nhất định.",
    "translation": "Khách hàng vui vẻ luôn quay lại khi thức ăn ngon và dịch vụ thân thiện.",
    "function": "Happy customers (chủ ngữ); always return (mệnh đề chính); when (liên từ); the food tastes good and the service is friendly (mệnh đề phụ chỉ tình huống).",
    "pos": "Happy (adjective); customers (noun); always (adverb); return (verb); when (conjunction); the (article); food (noun); tastes (verb); good (adjective); and (conjunction); the (article); service (noun); is (linking verb); friendly (adjective).",
    "note": ""
  },
  {
    "sentence": "We enjoy walking around food stalls, looking at different meals, and choosing our favorite dishes together.",
    "structure": "S + enjoy + V-ing",
    "grammar": "Dùng enjoy với V-ing để nói thích làm một hoạt động.",
    "translation": "Chúng tôi thích đi quanh các quầy đồ ăn, ngắm những món khác nhau và cùng chọn các món yêu thích.",
    "function": "We (chủ ngữ); enjoy (động từ chính); walking around food stalls, looking at different meals, and choosing our favorite dishes together (ba cụm V-ing làm tân ngữ song song).",
    "pos": "We (pronoun); enjoy (verb); walking (gerund); around (preposition); food (noun); stalls (noun); looking (gerund); at (preposition); different (adjective); meals (noun); and (conjunction); choosing (gerund); our (possessive determiner); favorite (adjective); dishes (noun); together (adverb).",
    "note": ""
  },
  {
    "sentence": "While eating, we laugh, tell stories, and take photos.",
    "structure": "While + V-ing, S + V",
    "grammar": "Dùng while + V-ing để nói một hành động diễn ra trong lúc thực hiện hành động khác.",
    "translation": "Trong khi ăn, chúng tôi cười, kể chuyện và chụp ảnh.",
    "function": "While eating (cụm chỉ thời gian); we (chủ ngữ); laugh, tell stories, and take photos (ba động từ/cụm động từ song song).",
    "pos": "While (conjunction); eating (gerund); we (pronoun); laugh (verb); tell (verb); stories (noun); and (conjunction); take (verb); photos (noun).",
    "note": ""
  },
  {
    "sentence": "Hot food should be served immediately after cooking.",
    "structure": "S + should be + past participle",
    "grammar": "Dùng should be + phân từ quá khứ để đưa ra lời khuyên ở dạng bị động.",
    "translation": "Thức ăn nóng nên được phục vụ ngay sau khi nấu.",
    "function": "Hot food (chủ ngữ); should be served (cụm động từ bị động với should); immediately (trạng từ); after cooking (cụm giới từ chỉ thời gian).",
    "pos": "Hot (adjective); food (noun); should (modal verb); be (verb); served (verb); immediately (adverb); after (preposition); cooking (gerund).",
    "note": ""
  },
  {
    "sentence": "When people follow simple safety rules, they can enjoy delicious street food without worry.",
    "structure": "When + S + V, S + can + V",
    "grammar": "Dùng when ở mệnh đề phụ và can ở mệnh đề chính để nói kết quả có thể xảy ra.",
    "translation": "Khi mọi người tuân theo những quy tắc an toàn đơn giản, họ có thể thưởng thức đồ ăn đường phố ngon mà không phải lo lắng.",
    "function": "When people follow simple safety rules (mệnh đề phụ); they (chủ ngữ mệnh đề chính); can enjoy (cụm động từ); delicious street food (tân ngữ); without worry (cụm giới từ).",
    "pos": "When (conjunction); people (noun); follow (verb); simple (adjective); safety (noun); rules (noun); they (pronoun); can (modal verb); enjoy (verb); delicious (adjective); street (noun); food (noun); without (preposition); worry (noun).",
    "note": ""
  },
  {
    "sentence": "The friendly atmosphere makes every visit enjoyable and relaxing after school or work.",
    "structure": "S + make(s) + O + adjective",
    "grammar": "Dùng make + tân ngữ + tính từ để nói khiến ai hoặc điều gì trở nên thế nào.",
    "translation": "Bầu không khí thân thiện làm cho mỗi lần ghé thăm trở nên thú vị và thư giãn sau giờ học hoặc làm việc.",
    "function": "The friendly atmosphere (chủ ngữ); makes (động từ chính); every visit (tân ngữ); enjoyable and relaxing (bổ ngữ cho tân ngữ); after school or work (cụm chỉ thời gian).",
    "pos": "The (article); friendly (adjective); atmosphere (noun); makes (verb); every (determiner); visit (verb); enjoyable (adjective); and (conjunction); relaxing (adjective); after (preposition); school (noun); or (conjunction); work (noun).",
    "note": ""
  }
];
