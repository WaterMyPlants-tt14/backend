exports.seed = function (knex) {
    return knex('species')
      .del()
      .then(function () {
        return knex('species').insert([
          {
           plant_name: "Fiddle Leaf Fig",
           plant_scientific_name: "Ficus Lyrata",
           plant_image: "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_fiddle-leaf-fig_charcoal-alt.jpg?ver=279576",
           water_id: 1 
          },
          {
           plant_name: "Golden Barrel Cactus",
           plant_scientific_name: "Echinocactus grusonii",
           plant_image: "https://bloomscape.com/wp-content/uploads/2021/03/bloomscape_cacti-golden-barrell_medium_clay.jpg?ver=425501",
           water_id: 3 
          },
          {
           plant_name: "Hedgehog Aloe",
           plant_scientific_name: "Aloe Vera",
           plant_image: "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_hedgehog-aloe_charcoal.jpg?ver=278997",
           water_id: 3 
          },
          {
           plant_name: "Kimberly Queen Fern",
           plant_scientific_name: "Nephrolepis obliterata",
           plant_image: "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_kimberly-queen-fern_charcoal.jpg?ver=279236",
           water_id: 2 
          },
          {
           plant_name: "Neon Rubber Tree",
           plant_scientific_name: "Ficus Altissima",
           plant_image: "https://bloomscape.com/wp-content/uploads/2020/05/bloomscape_ficus-altissima-std_charcoal.jpg?ver=385169",
           water_id: 1 
          },
          {
           plant_name: "Parlor Palm",
           plant_scientific_name: "Chamaedorea elegans",
           plant_image: "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_parlor-palmloomscape_charcoal.jpg?ver=279260",
           water_id: 1 
          },
          {
           plant_name: "Philodendron Heart Leaf",
           plant_scientific_name: "Philodendron selloum",
           plant_image: "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_philodendron-heartleaf_charcoal.jpg?ver=279047",
           water_id: 2 
          },
          {
           plant_name: "Ponytail Palm",
           plant_scientific_name: "Beaucarnea Recurvata",
           plant_image: "https://bloomscape.com/wp-content/uploads/2020/04/bloomscape_palm-ponytail_slate_lg-scaled.jpg?ver=439957",
           water_id: 3
          },
          {
           plant_name: "Pothos",
           plant_scientific_name: "Epipremnum",
           plant_image: "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_pothos_collection_pearls-jade.jpg?ver=278897",
           water_id: 3
          },
          {
           plant_name: "Prayer Plant",
           plant_scientific_name: "Maranta leuconeur",
           plant_image: "https://bloomscape.com/wp-content/uploads/2020/09/bloomscape_neon-prayer-plant_charcoal.jpg?ver=292318",
           water_id: 1 
          },
          {
           plant_name: "Rubber Tree",
           plant_scientific_name: "Ficus Elastica",
           plant_image: "https://bloomscape.com/wp-content/uploads/2020/12/bloomscape_burgandy-rubber-tree_stone-resize.jpg?ver=372943",
           water_id: 1 
          },
          {
           plant_name: "Snake Plant",
           plant_scientific_name: "Sansevieria ",
           plant_image: "https://bloomscape.com/wp-content/uploads/2020/12/bloomscape_sansevieria_stone-resize.jpg?ver=372956",
           water_id: 3 
          },
          {
           plant_name: "Spider Plant",
           plant_scientific_name: "Chlorophytum comosum",
           plant_image: "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape-spider-plant_stone.jpg?ver=279117",
           water_id: 1 
          },
          {
           plant_name: "Staggered Yucca Cane",
           plant_scientific_name: "Yucca elephantipes",
           plant_image: "https://bloomscape.com/wp-content/uploads/2021/03/bloomscape_yucca-cane_xl_clay.jpg?ver=437482",
           water_id: 3
          },
          {
           plant_name: "Succulent",
           plant_scientific_name: "Succulent",
           plant_image: "https://bloomscape.com/wp-content/uploads/2020/10/bloomscape_jack-frost_collection_terra-cotta.jpg?ver=313682",
           water_id: 1 
          },
        ]);
      });
  };
  