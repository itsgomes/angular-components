import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-modal-content-component',
  standalone: true,
  template: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nibh libero. Curabitur egestas mauris dolor, dignissim facilisis massa hendrerit consectetur. Sed felis nisl, mollis pharetra turpis eget, venenatis consequat urna. Vivamus pulvinar nec libero a hendrerit. Suspendisse eleifend pellentesque nibh, id suscipit diam venenatis vitae. Praesent ac urna aliquet, ullamcorper ex a, semper nisl. Nulla nec ullamcorper ligula. Phasellus fermentum nibh quis nibh pulvinar molestie. Aliquam nec lectus pretium libero convallis porttitor sed et erat. Quisque eu maximus tortor, a tincidunt augue. Donec iaculis accumsan porttitor. Nunc eleifend est vel porta egestas. Fusce in sapien ut tortor lacinia consequat.
  Integer faucibus in tortor id pellentesque. Mauris id eleifend dui, ut imperdiet leo. Aliquam ullamcorper varius dui nec ornare. Nam lacinia neque vel quam auctor, sit amet placerat lectus commodo. Donec orci ante, tempor eget malesuada id, vestibulum nec lorem. Phasellus mollis mauris et odio finibus interdum. Integer laoreet mauris nec placerat ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent porta egestas fermentum. Vestibulum elementum tristique sapien. Maecenas vitae tempus arcu. Sed dignissim vitae magna sit amet scelerisque. Mauris a arcu id ex suscipit porta non quis magna. Vestibulum quis risus vel ante laoreet hendrerit non ut erat. Nullam nec luctus eros, vel dapibus est. Fusce ut sagittis purus.
  Nulla turpis urna, iaculis eu fringilla vitae, placerat ac velit. Nam placerat, lorem at viverra congue, odio ante molestie magna, sed mattis nunc nulla at nibh. Curabitur pretium lacinia felis ut semper. Curabitur id felis nisl. Proin efficitur urna quis mi maximus, auctor condimentum urna hendrerit. Curabitur fringilla ultricies lobortis. Sed varius molestie lacus et ultrices. Aliquam in dignissim massa, vel malesuada elit. Morbi magna nulla, lobortis eu aliquet venenatis, finibus quis orci. Vestibulum elit neque, mollis vel pulvinar at, elementum et purus. Aliquam ornare scelerisque diam, nec tincidunt diam ullamcorper non.
  Nullam convallis quam felis, eu ultricies nisi imperdiet ac. Nam vitae nisl nisi. Vestibulum metus magna, congue eget interdum vel, mattis ut purus. Nam vehicula lacus ut egestas viverra. Maecenas at auctor quam. Nulla dapibus, nibh at iaculis vestibulum, massa nisi lacinia odio, elementum fermentum justo mauris non ante. Mauris placerat ullamcorper faucibus. Phasellus non augue auctor, consequat sapien quis, congue neque. Nullam malesuada imperdiet dolor vel eleifend.
  Duis tristique metus at elementum elementum. Vestibulum molestie magna ut dapibus convallis. Suspendisse potenti. In maximus rhoncus purus sit amet porttitor. Curabitur condimentum, ipsum ut lobortis semper, dui velit gravida eros, eget mollis enim massa eget velit. Quisque mattis vulputate odio, nec mollis mauris vehicula quis. Donec ut eros in sapien tincidunt posuere. Ut efficitur elit eu blandit ultricies. Sed quis rhoncus nibh. In sed ligula eget leo condimentum pulvinar.
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContentComponent {}