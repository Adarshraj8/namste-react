# Namate React 🚀
#Parcel
1. Dev Build
यह Parcel का डिफ़ॉल्ट मोड है, जिसमें डेवलपमेंट सर्वर शामिल होता है। आपको केवल parcel index.html कमांड चलानी है और आपका प्रोजेक्ट स्थानीय सर्वर पर शुरू हो जाएगा।

2. Local Server
Parcel अपने साथ एक लोकल सर्वर प्रदान करता है, जिससे आप अपनी वेबसाइट या ऐप को सीधे ब्राउज़र में देख सकते हैं।

3. HMR (Hot Module Replacement)
जब आप अपने कोड में कोई बदलाव करते हैं, तो यह फीचर ब्राउज़र को स्वत: रिफ्रेश कर देता है। इससे आपको मैन्युअली पेज को रिफ्रेश करने की ज़रूरत नहीं पड़ती। यह डेवलपमेंट को तेज़ और आसान बनाता है।

4. File Watching Algorithm
Parcel का फाइल वॉचिंग सिस्टम C++ में लिखा गया है, जिससे यह तेज़ी से बदलावों का पता लगाता है और उन पर प्रतिक्रिया करता है।

5. Caching
जब आप अपना कोड बनाते हैं, तो Parcel कुछ फाइलों को कैश करता है (सहेजता है), जिससे अगली बार बिल्ड करने में समय कम लगता है।

6. Image Optimization
Parcel आपकी इमेज को ऑप्टिमाइज़ (साइज़ घटाना और क्वालिटी बनाए रखना) करता है ताकि वेबसाइट तेज़ी से लोड हो सके।

7. Minification
यह कोड से अनावश्यक स्पेस, कमेंट्स, और अतिरिक्त कैरेक्टर हटाकर उसे छोटा और तेज़ बनाता है।

8. Bundling
Parcel अलग-अलग फाइलों को एक साथ जोड़कर एक बंडल बनाता है, जिससे वेब ऐप्स तेज़ी से लोड होती हैं।

9. Compressing
यह आपके कोड को ज़िप फॉर्मेट में संपीड़ित करता है, जिससे फ़ाइल का साइज़ और भी कम हो जाता है और लोडिंग तेज़ होती है।

10. Consistent Hashing
Parcel आपकी फाइलों के लिए कंसिस्टेंट (सुसंगत) हैश बनाता है। इससे ब्राउज़र केवल उन्हीं फाइलों को लोड करता है जिनमें बदलाव हुआ हो, बाकी को कैश से लेता है।

11. Code Splitting
यह आपकी ऐप को छोटे-छोटे हिस्सों में तोड़ देता है, ताकि ब्राउज़र केवल जरूरी कोड को लोड करे। इससे परफॉर्मेंस बेहतर होती है।

12. Differential Bundling
Parcel पुराने ब्राउज़र और नए ब्राउज़र दोनों को सपोर्ट करता है। यह आपके कोड का अलग-अलग वर्ज़न बनाता है, जो हर ब्राउज़र के हिसाब से सही तरीके से काम करता है।

13. Diagnostics and Error Handling
कोड में कोई एरर हो तो Parcel आपको साफ और समझने लायक डायग्नोस्टिक मैसेज देता है।

14. HTTPS Support
Parcel लोकल डेवलपमेंट के लिए HTTPS (सिक्योर सर्वर) भी सपोर्ट करता है।

15. Tree Shaking
यह बहुत खास फीचर है।
Tree Shaking का मतलब:

यह आपके कोड से उन हिस्सों (फंक्शन, वेरिएबल आदि) को हटा देता है जो इस्तेमाल नहीं हो रहे हैं।
इससे आपका कोड छोटा और तेज़ हो जाता है।

#Restaurants
 <!-- // Header
//-Logo
// -Navitems
// Body
//-Restuarantcontainer
//-Restuarantcard
//-Img,Name of rest,star rating,cusines,delivery time
// Footer
//-Copyright
//-Links
//-Address
//-contact information -->

Two Types of Export/Import
-Defalut Export/Import

export default Component;
import Component from "path";

-Named Export/Import

export const Component;
import {Component} from "path";

#React Hooks
(Noram js utility functions written by facebook developer)
we did npm install react to download all node_module /utility function inside project
-useState() -Superpowerful state Variable in react
-useEffect() -