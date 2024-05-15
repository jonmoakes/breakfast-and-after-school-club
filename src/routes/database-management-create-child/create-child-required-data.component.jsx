import { BlackHr } from "../../styles/hr/hr.styles";
import { BlackSpan, RedSpan } from "../../styles/span/span.styles";

const CreateChildRequiredData = () => (
  <ul>
    <BlackHr />

    <li>
      <BlackSpan>
        <RedSpan>*</RedSpan>the childs name
      </BlackSpan>
    </li>
    <BlackHr />

    <li>
      <BlackSpan>
        <RedSpan>*</RedSpan>the childs age
      </BlackSpan>
    </li>
    <BlackHr />

    <li>
      <BlackSpan>
        <RedSpan>*</RedSpan>the image / video consent choice ( for school
        newsletters etc )
      </BlackSpan>
    </li>
    <BlackHr />

    <li>
      <BlackSpan>the childs medical info</BlackSpan>
    </li>
    <BlackHr />

    <li>
      <BlackSpan>the childs dietry requirements</BlackSpan>
    </li>
    <BlackHr />

    <li>
      <BlackSpan>any additional info</BlackSpan>
    </li>
    <BlackHr />

    <li>
      <BlackSpan>
        <RedSpan>*</RedSpan>the parents name
      </BlackSpan>
    </li>
    <BlackHr />

    <li>
      <BlackSpan>
        <RedSpan>*</RedSpan>the parents email
      </BlackSpan>
    </li>
    <BlackHr />

    <li>
      <BlackSpan>
        <RedSpan>*</RedSpan>the parents phone number
      </BlackSpan>
    </li>
    <BlackHr />

    <li>
      <BlackSpan>
        <RedSpan>*</RedSpan>the parents user id
      </BlackSpan>
    </li>
    <BlackHr />
  </ul>
);

export default CreateChildRequiredData;
