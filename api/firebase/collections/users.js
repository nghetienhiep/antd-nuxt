import {firestore} from '../index'
import rootCollections from '../../../config/firebaseCollections';

export default {
    async $_get(root, code, callback) {
        try {
            const snapshot = await firestore.collection(rootCollections.users).get();
            if (snapshot) {
                return snapshot.docs.map((doc, index) => {
                    let obj = doc.data();
                    obj['id'] = doc.id;
                    obj['stt'] = index + 1;
                    return obj;
                });
            } else return []
        } catch (e) {
            throw e;
        }
    },
    $_add(root, body) {

    },
    $_update(root, id, body) {

    },
}
