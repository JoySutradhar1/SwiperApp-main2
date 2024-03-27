import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const listTab = [
  {
    id: 1,
    status: 'Experience',
  },
  {
    id: 2,
    status: 'Education',
  },
  {
    id: 3,
    status: 'Certifications',
  },
];
const Tabs = () => {
  const [status, setStatus] = useState('Experience');
  const setStatusFilter = status => {
    setStatus(status);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#fff',

          flexDirection: 'row',
        }}>
        {listTab.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[
              {
                width: Dimensions.get('window').width / 3.1,
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'center',
              },
              status === item.status && {
                borderBottomWidth: 2,
                borderBottomColor: 'green',
              },
            ]}
            onPress={() => setStatusFilter(item.status)}>
            <Text
              style={[
                styles.tabLabelStyle,
                status === item.status && styles.focusLabelStyle,
              ]}>
              {item.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          flex: 1,
          padding: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {status === 'Experience' && (
          <Text style={{color: 'black'}}>
            Experience. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Velit ipsum non doloribus laudantium incidunt. Quo saepe sapiente
            quod, debitis consequatur vel autem modi, neque cupiditate accusamus
            consequuntur at explicabo ipsa a. Nobis esse totam nulla dolor
            facere id tempore doloribus unde voluptatem minus officiis beatae
            consectetur laborum quibusdam quis numquam asperiores repudiandae
            porro ipsa sed, saepe ipsum nostrum. Incidunt earum rerum totam,
            adipisci, eius placeat eligendi nam quo iusto magnam maxime.
            Possimus quasi quisquam in facilis ipsa accusamus esse recusandae
            inventore beatae! Odio perferendis iusto quia recusandae repellat
            ipsa placeat molestias rerum necessitatibus ducimus modi deserunt
            blanditiis officiis eligendi dignissimos unde fugiat illum, tempore
            consequuntur dolorem odit dolore. Corporis repellendus aut
            exercitationem a sapiente. Perferendis, cum modi. Repellendus
            voluptate necessitatibus, recusandae ea labore ex incidunt minima
            quis vitae doloribus eaque. Error nesciunt voluptate eius totam
            architecto corrupti laborum, nisi aspernatur veniam aperiam magni
            perspiciatis ratione repellat sequi ab nulla dolorum qui accusamus
            modi tempore voluptatem pariatur iusto sunt repudiandae. Similique
            est atque eveniet. Id maiores, quae sunt nobis voluptates
            repudiandae deserunt officia odit excepturi! Repellat amet libero
            consectetur eius aut ducimus dignissimos ut numquam quod, magnam
            exercitationem dolorem laudantium molestiae ipsam quo adipisci!
            Dolor aspernatur ex tempore, reiciendis error hic esse. Libero
            cupiditate animi corrupti ipsam eligendi incidunt. Facilis tempore
            vitae quaerat labore blanditiis architecto recusandae ipsa unde vero
            quos animi illum deleniti quibusdam, modi itaque quas, explicabo,
            cum odit ratione! Illo, adipisci! Atque eveniet similique facere
            expedita, voluptatum, necessitatibus nostrum pariatur tenetur ad
            amet possimus autem officia ipsa harum doloribus voluptas nesciunt
            magni asperiores. Laborum tempore enim recusandae sequi itaque rerum
            cupiditate sunt maxime quos saepe sit tenetur, architecto voluptatum
            animi dignissimos eos magnam. Consectetur tempora cum perspiciatis
            ab harum nulla sit, enim, dolorem laudantium quas ipsum, repudiandae
            quasi voluptatum ullam tempore nisi quam impedit nemo animi?
            Suscipit recusandae error porro cumque incidunt eos nam expedita,
            tempore iste quasi adipisci iusto aperiam officiis deserunt dolorem
            facilis culpa quisquam reiciendis, repellendus libero dolor eaque et
            repellat quam. Illo fuga praesentium quod aperiam laudantium
            perspiciatis, dolor esse harum, sunt natus quos minima unde?
            Corrupti temporibus, reprehenderit in consequatur libero, modi earum
            explicabo atque maxime nisi culpa, perferendis architecto quam
            molestiae at cupiditate fugiat sapiente quaerat! In impedit, nulla
            fuga ab vel voluptates dolorum rem ratione accusamus, ducimus
            laboriosam. Nesciunt natus velit dolore excepturi beatae
            necessitatibus suscipit vitae nobis dolores eum! Magni eius
            repudiandae quaerat maiores in quae ullam assumenda sed ad fuga
            corrupti asperiores, id exercitationem recusandae tempora. Officiis,
            ex corporis. Voluptates voluptate sapiente labore officia, quidem
            dicta maxime provident eius fuga libero vero fugit, vel rerum
            aperiam quasi asperiores fugiat. Dignissimos molestiae iste
            laudantium. Saepe, sapiente voluptatum. Necessitatibus, vero
            delectus quaerat accusantium placeat sunt temporibus ad aperiam hic
            praesentium. Nesciunt ex quaerat eos quam perspiciatis sapiente hic
            placeat, laudantium blanditiis aliquam omnis saepe quis a quo iste
            suscipit, dolor asperiores magni tenetur. Fuga voluptatibus illum
            quia. Placeat quae fuga in accusantium, vitae sunt ea commodi,
            voluptates porro tempore itaque! Nihil reiciendis nesciunt ab iure
            error vero adipisci magni eligendi eius.
          </Text>
        )}
        {status === 'Education' && (
          <ScrollView>
            <Text style={{color: 'black'}}>Education</Text>
          </ScrollView>
        )}
        {status === 'Certifications' && (
          <Text style={{color: 'black'}}>Certifications</Text>
        )}
      </View>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabLabelStyle: {color: '#010A0399', fontWeight: 600, fontSize: 11},
  focusLabelStyle: {color: '#020202'},
});
