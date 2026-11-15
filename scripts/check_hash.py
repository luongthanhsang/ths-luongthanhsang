import hashlib

def file_hash(path):
    with open(path, 'rb') as f:
        return hashlib.md5(f.read()).hexdigest()

h1 = file_hash('js/quiz-data.js')
h2 = file_hash('BAN_CAP_NHAT_NETLIFY/js/quiz-data.js')
print("js/quiz-data.js MD5:                  ", h1)
print("BAN_CAP_NHAT_NETLIFY/js/quiz-data.js MD5:", h2)
print("Identical:", h1 == h2)
