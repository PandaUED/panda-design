/**
 * Created by Liqi on 17/9/29.
 */
import { WhiteSpace, Badge, style } from 'pand';
import styled from 'styled-components';

const PageBadge = () => {
  const BadgeDemo = styled.div`
    > a {
      display: block;
      padding: 1rem;
      background: #fff;
      color: #444;
      ${style.split.bottom};
    }
  `;
  return (
    <BadgeDemo>
      <WhiteSpace>Badge</WhiteSpace>
      <a>
        Dot<Badge type="dot" />
      </a>
      <a>
        text <Badge type="text">+2个</Badge>
      </a>
      <a>
        number 9 <Badge className="test">9</Badge>
      </a>
      <a>
        number 55 <Badge>55</Badge>
      </a>
      <a>
        number 109 no overflowNum <Badge overflowNum={null}>109</Badge>
      </a>
      <a>
        number 109 default overflow 99 <Badge>109</Badge>
      </a>
      <a>
        number 55 overflow 33 <Badge overflowNum={33}>55</Badge>
      </a>
      <a>
        number 55 no border <Badge border={false}>55</Badge>
      </a>
      <a>
        number 55 plus before <Badge plusBefore>55</Badge>
      </a>
      <a>
        number 55 bg red{' '}
        <Badge className="test" bgColor="red">
          55
        </Badge>
      </a>
    </BadgeDemo>
  );
};

export default PageBadge;
