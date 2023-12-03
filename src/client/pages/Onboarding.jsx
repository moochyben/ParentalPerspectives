import React from 'react';
import { Link } from 'react-router-dom';


export function Onboarding() {
  return (
    <div>
      <h1>Welcome to Parental Perspectives!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
        magna et massa tincidunt, nec lobortis odio laoreet. Proin auctor vel
        erat nec molestie. Nunc at tincidunt leo. Sed maximus urna non
        facilisis ultrices. Aliquam id risus vitae purus sagittis mattis eu
        non risus. Etiam vitae sagittis arcu. Nam scelerisque pharetra nisi,
        non commodo elit vestibulum a. Quisque posuere ipsum in gravida
        lacinia. Etiam molestie dolor ac metus faucibus, et feugiat augue
        ultrices. Ut a luctus turpis. Aliquam erat volutpat. Maecenas vel
        malesuada enim, in varius metus.
      </p>
      <p>
        Quisque lacinia suscipit interdum. Vivamus id ex vehicula, tincidunt
        elit id, congue mauris. Sed dapibus sem et laoreet tincidunt. Morbi
        lacinia ipsum sed sem tincidunt aliquam. Praesent accumsan ligula eu
        est maximus, ornare sollicitudin lorem dictum. Curabitur a nisl eget
        velit interdum tincidunt. Donec quam tortor, euismod in turpis vel,
        porttitor tincidunt libero. Quisque viverra, arcu ac tincidunt
        pulvinar, ex orci dictum odio, nec laoreet tortor quam vitae lacus.
        Cras porttitor elit vel justo tempus, in venenatis odio suscipit.
        Sed efficitur turpis sed eros finibus, non mattis arcu fringilla.
        Vestibulum tristique, diam nec pulvinar tempus, leo urna iaculis
        tortor, nec semper nisl urna vitae elit. Morbi efficitur metus sit
        amet purus tristique, sed hendrerit augue cursus. Morbi pulvinar
        efficitur lectus in malesuada.
      </p>
      <Link to='/signup'>Sign up</Link>
    </div>
  );
}