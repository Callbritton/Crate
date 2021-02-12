'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('styles', [
      {
        description: 'A space cowboy outfit',
        image_url: 'https://i.pinimg.com/originals/0d/75/36/0d75363db5808bd972a3b66caa453636.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Edgy',
        image_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F489625790723093994%2F&psig=AOvVaw2_PuwxWPbaylVj9Hz3chSo&ust=1613186116255000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjfp9-w4-4CFQAAAAAdAAAAABAD',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Casual',
        image_url: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.puttingmetogether.com%2Fwp-content%2Fuploads%2F2019%2F05%2FWhite-tee-brown-cardigan-skinny-jeans-leopard-print-sandals-grey-purse.jpg&imgrefurl=https%3A%2F%2Fwww.puttingmetogether.com%2Fways-to-wear-a-white-tee-spring-summer%2Fwhite-tee-brown-cardigan-skinny-jeans-leopard-print-sandals-grey-purse%2F&tbnid=7-9xvdw2-_i4nM&vet=10CAcQxiAoB2oXChMIqK6jx7Hj7gIVAAAAAB0AAAAAECY..i&docid=Q5yPqihOMoDX-M&w=3456&h=5184&itg=1&q=casual%20outfits&hl=en&client=safari&ved=0CAcQxiAoB2oXChMIqK6jx7Hj7gIVAAAAAB0AAAAAECY',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Hipster',
        image_url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F355221489354115340%2F&psig=AOvVaw2pFsohN3LbHSXFusXXZuoD&ust=1613186490825000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJj35o-y4-4CFQAAAAAdAAAAABAF',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('styles', null, {});
  }
}
