class Solution {
public:

    string encode(vector<string>& strs) {
      string encoded = "";
      for (int i = 0; i < strs.size(); i++) {
        for (int j = 0; j < strs[i].size(); j++) {
          encoded += to_string((int)strs[i][j]);
          encoded += ',';
        }
        encoded += '|';
      }
      return encoded;
    }

    vector<string> decode(string s) {
      vector<string> strs;
      string aux = "";
      string word = "";

      for (int i = 0; i < s.size(); i++) {
        if (s[i] == ',') {
          int code = stoi(aux);
          word.push_back((char)code);
          aux.clear();
        } else if (s[i] == '|') {
          strs.push_back(word);
          word.clear();
          aux.clear();
        } else {
          aux += s[i];
        }
      }

      return strs;
    }
};
