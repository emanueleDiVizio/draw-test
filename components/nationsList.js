import React from 'react';

import { Query } from "react-apollo";
import gql from "graphql-tag";
import {  Text, FlatList  } from 'react-native';
import Item from './nationItem.js'
import _ from 'lodash'

function countMedals(medals){
  count = _.countBy(medals, (medal) => medal.medal)
  return {total: medals.length, gold: count["Gold"] ? count["Gold"]  : 0 , silver: count["Silver"] ? count["Silver"]  : 0 , bronze: count["Bronze"] ? count["Bronze"]  : 0  }
}

export default NationList = () => (
  <Query
    query={gql`
      {
        nations(orderBy: noc_code_ASC){
            noc_code
            name
            medals(where: {medal_in: ["Gold", "Silver", "Bronze"], year: 2008}){
                medal
                athlete
                year
                id
            }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;

       return <FlatList
        style={{flex: 1, alignSelf: 'stretch', marginTop: 24, marginLeft: 16, marginRight: 16}}
        data={_.orderBy(data.nations, (nation) => nation.medals.length, ["desc"]).map(({noc_code, name, medals}) => ({noc_code, name, medals: countMedals(medals)}))}
        renderItem={({item}) => <Item nation={item}/>}
      />
    }}
  </Query>
);